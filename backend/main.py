import random
import re
import asyncio
from typing import Dict, List, Optional, Union, Set
import smtplib

import httpx
from fastapi import FastAPI, HTTPException, BackgroundTasks, WebSocket, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pydantic import EmailStr
from email.message import EmailMessage
import aiosmtplib

GMAIL_USER = "contact@tempgmail.net"
GMAIL_PASS= "Tempcontact@201"
SMTP_SERVER = 'mail.privateemail.com'
PORT = 465
SMTP_USER = 'contact@tempgmail.net'
SMTP_PASS = 'Tempcontact@201'
SENDER_NAME = 'tempgmail.net'

app = FastAPI(
    title="Temp Mail API",
    description="Asynchronous API for temporary email services with WebSocket support",
    version="1.1.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# User agent list
USER_AGENTS = [
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.10 Safari/605.1.1",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.3",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.3",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.3",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Trailer/93.3.8652.5",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 OPR/117.0.0.",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.1958",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:136.0) Gecko/20100101 Firefox/136.",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.3"
]

# Email cache to avoid repetitive requests
email_cache = {}
# WebSocket connection manager
class ConnectionManager:
    def __init__(self):
        # Dictionary to map email addresses to connected clients
        self.active_connections: Dict[str, Set[WebSocket]] = {}
        # Flag to control background task
        self.is_running = False
        
    async def connect(self, websocket: WebSocket, email: str):
        await websocket.accept()
        if email not in self.active_connections:
            self.active_connections[email] = set()
        self.active_connections[email].add(websocket)
        
    def disconnect(self, websocket: WebSocket, email: str):
        if email in self.active_connections:
            if websocket in self.active_connections[email]:
                self.active_connections[email].remove(websocket)
            if not self.active_connections[email]:
                del self.active_connections[email]
                
    async def send_update(self, email: str, content: Union[Dict, List, str]):
        if email in self.active_connections:
            message = {
                "email": email,
                "content": content,
                "timestamp": asyncio.get_event_loop().time()
            }
            disconnected_clients = set()
            for connection in self.active_connections[email]:
                try:
                    await connection.send_json(message)
                except Exception:
                    disconnected_clients.add(connection)
            
            # Clean up disconnected clients
            for client in disconnected_clients:
                if email in self.active_connections and client in self.active_connections[email]:
                    self.active_connections[email].remove(client)
            
            if email in self.active_connections and not self.active_connections[email]:
                del self.active_connections[email]
    
    def get_subscribed_emails(self):
        return list(self.active_connections.keys())
    
    def has_connections(self):
        return bool(self.active_connections)

# Initialize connection manager
manager = ConnectionManager()

# Response models
class Email(BaseModel):
    email: str

class EmailContent(BaseModel):
    email: str
    content: Union[List[Dict], str]

class EmailList(BaseModel):
    emails: List[str]

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

async def get_random_user_agent() -> str:
    """Return a random user agent from the list."""
    return random.choice(USER_AGENTS)

async def extract_email_from_response(response_text: str) -> Optional[str]:
    """Extract email address from response text."""
    email_match = re.search(r'[\w\.-]+@[\w\.-]+', response_text)
    if email_match:
        return email_match.group(0)
    return None

async def get_new_email() -> str:
    """Get a new temporary email address."""
    user_agent = await get_random_user_agent()
    headers = {
        'User-Agent': user_agent,
        'Referer': 'https://tempmailhub.org/'
    }
    
    async with httpx.AsyncClient() as client:
        response = await client.get('https://tempmailhub.org/getEmails.php', headers=headers)
        
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Failed to get email address")
        
        email = await extract_email_from_response(response.text)
        if not email:
            raise HTTPException(status_code=500, detail="Could not extract email from response")
        
        return email

async def fetch_email_content(email: str) -> Union[List[Dict], str]:
    """Fetch content from a specific email address."""
    user_agent = await get_random_user_agent()
    headers = {
        'User-Agent': user_agent,
        'Referer': 'https://tempmailhub.org/'
    }
    
    payload = {
        "email": email
    }
    
    async with httpx.AsyncClient(timeout=15) as client:
        response = await client.post('https://tempmailhub.org/fetchEmails.php', headers=headers, data=payload, )
        
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Failed to fetch email content")

        # Try to parse as Html, otherwise return as string
        if response.text == 'NoRecentEmails':
            return response.text
        else:
            return response.text


async def email_polling_task():
    """Background task to poll for email updates and send them to WebSocket clients."""
    try:
        while True:
            if not manager.has_connections():
                await asyncio.sleep(5)
                continue
                
            subscribed_emails = manager.get_subscribed_emails()
            for email in subscribed_emails:
                try:
                    # Fetch current content
                    current_content = await fetch_email_content(email)
                    # Check if content has changed
                    if email not in email_cache or email_cache[email] != current_content:
                        email_cache[email] = current_content
                        await manager.send_update(email, current_content)
                except Exception as e:
                    print(f"Error polling email {email}: {str(e)}")
                    
                # Small delay between requests to avoid overwhelming the service
                await asyncio.sleep(0.5)
                
            # Wait before polling again
            await asyncio.sleep(5)
    except asyncio.CancelledError:
        # Handle task cancellation
        pass
    except Exception as e:
        print(f"Polling task encountered an error: {str(e)}")
        # Restart the task after a delay
        asyncio.get_event_loop().create_task(email_polling_task())


async def send_contact_email(form: ContactForm):
    # 1. Thank-you email to the user
    thank_you_msg = EmailMessage()
    thank_you_msg["From"] = f"{SENDER_NAME} <{SMTP_USER}>"
    thank_you_msg["To"] = form.email
    thank_you_msg["Subject"] = "Thank You for Contacting Us"
    thank_you_msg.set_content(
        f"Hi {form.name},\n\n"
        "Thank you for reaching out to us. We've received your message and will get back to you as soon as possible.\n\n"
        "Best regards,\nTempgmail.net Team\n"
    )

    # 2. Internal notification email to you/your team
    notify_msg = EmailMessage()
    notify_msg["Subject"] = f"New Contact Form: {form.subject}"
    notify_msg["From"] = f"{SENDER_NAME} <{SMTP_USER}>"
    notify_msg["To"] = SMTP_USER
    notify_msg.set_content(
        f"New message from contact form:\n\n"
        f"Name: {form.name}\n"
        f"Email: {form.email}\n"
        f"Subject: {form.subject}\n\n"
        f"Message:\n{form.message}"
    )
    try:
        # Send thank-you email
        with smtplib.SMTP_SSL(SMTP_SERVER, PORT) as server:
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(thank_you_msg)
            server.send_message(notify_msg)
        print("Emails sent successfully.")

    except Exception as e:
        print(f"[Error sending contact emails] {e}")



# Start the background polling task
@app.on_event("startup")
async def startup_event():
    asyncio.create_task(email_polling_task())

@app.post("/contact_email")
async def contact(form: ContactForm, background_tasks: BackgroundTasks):
    background_tasks.add_task(send_contact_email, form)
    return {"message": "Message sent successfully"}

# @app.post("/contact_email")
# async def contact(form: ContactForm):
#     msg = EmailMessage()
#     msg["From"] = GMAIL_USER
#     msg["To"] = GMAIL_USER
#     msg["Subject"] = f"New Message: {form.subject}"
#     msg.set_content(
#         f"Name: {form.name}\nEmail: {form.email}\n\n{form.message}"
#     )

#     try:
#         await aiosmtplib.send(
#             msg,
#             hostname="smtp.gmail.com",
#             port=587,
#             start_tls=True,
#             username=GMAIL_USER,
#             password=GMAIL_PASS,
#         )
#         return {"message": "Message sent successfully"}
#     except Exception as e:
#         return {"message": f"Failed to send email"}

@app.get("/", tags=["Root"])
async def root():
    """Root endpoint for API health check."""
    return {"status": "Temp Mail API is running", "websocket_support": True}

@app.get("/email", response_model=Email, tags=["Email"])
async def get_email(background_tasks: BackgroundTasks):
    """Get a new temporary email address."""
    email = await get_new_email()
    
    # Start background task to fetch initial content
    background_tasks.add_task(fetch_email_content, email)
    
    return {"email": email}


@app.post("/email/refresh", response_model=EmailContent, tags=["Email"])
async def refresh_email_content(email: Email):
    """Force refresh content for a specific email address."""
    content = await fetch_email_content(email.email)

    return {"email": email.email, "content": content}



# @app.get("/emails", response_model=EmailList, tags=["Email"])
# async def get_multiple_emails(background_tasks: BackgroundTasks, count: int = 1):
#     """Get multiple temporary email addresses."""
#     if count < 1 or count > 10:
#         raise HTTPException(status_code=400, detail="Count must be between 1 and 10")
    
#     emails = []
#     for _ in range(count):
#         email = await get_new_email()
#         emails.append(email)
#         background_tasks.add_task(fetch_email_content, email)
    
#     return {"emails": emails}

# @app.get("/email/{email}/content", response_model=EmailContent, tags=["Email"])
# async def get_email_content(email: str, background_tasks: BackgroundTasks):
#     """Get content for a specific email address."""
#     # Check if email content is in cache
    
#     content = await fetch_email_content(email)
    
#     return {"email": email, "content": content}

# @app.websocket("/ws/email/{email}")
# async def websocket_endpoint(websocket: WebSocket, email: str):
#     """WebSocket endpoint for real-time email content updates."""
#     await manager.connect(websocket, email)
    
#     # Send initial content if available
#     if email in email_cache:
#         await websocket.send_json({
#             "email": email,
#             "content": email_cache[email],
#             "initial": True
#         })
#     else:
#         try:
#             content = await fetch_email_content(email)
#             email_cache[email] = content
#             await websocket.send_json({
#                 "email": email,
#                 "content": content,
#                 "initial": True
#             })
#         except Exception as e:
#             await websocket.send_json({
#                 "email": email,
#                 "error": str(e),
#                 "initial": True
#             })
    
#     try:
#         while True:
#             # Keep the connection alive and handle client messages
#             data = await websocket.receive_text()
#             if data == "ping":
#                 await websocket.send_text("pong")
#             elif data == "refresh":
#                 try:
#                     content = await fetch_email_content(email)
#                     email_cache[email] = content
#                     await websocket.send_json({
#                         "email": email,
#                         "content": content,
#                         "refreshed": True
#                     })
#                 except Exception as e:
#                     await websocket.send_json({
#                         "email": email,
#                         "error": str(e),
#                         "refreshed": False
#                     })
#     except WebSocketDisconnect:
#         manager.disconnect(websocket, email)

# # Simple HTML client for testing WebSocket connection
# @app.get("/demo", response_class=HTMLResponse, tags=["Demo"])
# async def demo():
#     """Demo page for WebSocket testing."""
#     return """
#     <!DOCTYPE html>
#     <html>
#         <head>
#             <title>Temp Mail WebSocket Demo</title>
#             <style>
#                 body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
#                 #email-display, #content-display { margin-top: 20px; padding: 10px; border: 1px solid #ccc; }
#                 button { margin: 5px; padding: 5px 10px; }
#                 #content-display { white-space: pre-wrap; max-height: 400px; overflow-y: auto; }
#                 .status { margin-top: 10px; font-weight: bold; }
#                 .connected { color: green; }
#                 .disconnected { color: red; }
#             </style>
#         </head>
#         <body>
#             <h1>Temp Mail WebSocket Demo</h1>
#             <button id="get-email">Get New Email</button>
#             <div id="email-display">No email address yet</div>
#             <div class="status disconnected">WebSocket: Disconnected</div>
#             <button id="connect-ws" disabled>Connect WebSocket</button>
#             <button id="refresh" disabled>Refresh Content</button>
#             <h2>Email Content</h2>
#             <div id="content-display">No content yet</div>
            
#             <script>
#                 let ws = null;
#                 const emailDisplay = document.getElementById('email-display');
#                 const contentDisplay = document.getElementById('content-display');
#                 const statusDisplay = document.querySelector('.status');
#                 const connectButton = document.getElementById('connect-ws');
#                 const refreshButton = document.getElementById('refresh');
                
#                 document.getElementById('get-email').addEventListener('click', async () => {
#                     try {
#                         const response = await fetch('/email');
#                         const data = await response.json();
#                         emailDisplay.textContent = data.email;
#                         connectButton.disabled = false;
#                     } catch (error) {
#                         emailDisplay.textContent = 'Error: ' + error.message;
#                     }
#                 });
                
#                 connectButton.addEventListener('click', () => {
#                     const email = emailDisplay.textContent;
#                     if (email && email !== 'No email address yet') {
#                         connectWebSocket(email);
#                     }
#                 });
                
#                 refreshButton.addEventListener('click', () => {
#                     if (ws && ws.readyState === WebSocket.OPEN) {
#                         ws.send('refresh');
#                     }
#                 });
                
#                 function connectWebSocket(email) {
#                     const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
#                     const wsUrl = `${protocol}//${window.location.host}/ws/email/${email}`;
                    
#                     ws = new WebSocket(wsUrl);
                    
#                     ws.onopen = () => {
#                         statusDisplay.textContent = 'WebSocket: Connected';
#                         statusDisplay.className = 'status connected';
#                         refreshButton.disabled = false;
                        
#                         // Setup ping interval to keep connection alive
#                         setInterval(() => {
#                             if (ws.readyState === WebSocket.OPEN) {
#                                 ws.send('ping');
#                             }
#                         }, 30000);
#                     };
                    
#                     ws.onmessage = (event) => {
#                         try {
#                             const data = JSON.parse(event.data);
#                             if (data.error) {
#                                 contentDisplay.textContent = 'Error: ' + data.error;
#                             } else if (data.content) {
#                                 if (typeof data.content === 'string') {
#                                     contentDisplay.textContent = data.content;
#                                 } else {
#                                     contentDisplay.textContent = JSON.stringify(data.content, null, 2);
#                                 }
#                             } else if (event.data === 'pong') {
#                                 console.log('Received pong');
#                             }
#                         } catch (e) {
#                             contentDisplay.textContent = 'Error parsing message: ' + e.message;
#                         }
#                     };
                    
#                     ws.onclose = () => {
#                         statusDisplay.textContent = 'WebSocket: Disconnected';
#                         statusDisplay.className = 'status disconnected';
#                         refreshButton.disabled = true;
#                     };
                    
#                     ws.onerror = (error) => {
#                         statusDisplay.textContent = 'WebSocket Error';
#                         statusDisplay.className = 'status disconnected';
#                         console.error('WebSocket error:', error);
#                     };
#                 }
#             </script>
#         </body>
#     </html>
#     """

if __name__ == "__main__":
    import uvicorn
    print('main_asy')
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)