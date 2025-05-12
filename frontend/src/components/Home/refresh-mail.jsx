import { useEffect, useState } from "react";
import RefreshIconSVG from "@public/svg/RefreshIconSVG";
import LeftArrowIconSVG from "@public/svg/LeftArrowIconSVG";

export const fetchEmailRefresh = async (emailData, setEmailData, setIsLoading) => {
  setIsLoading(true);
  try {
    if (emailData?.email) {
      const response = await fetch(`${import.meta.env.VITE_CLIENT_URL}/email/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailData.email }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.content !== "NoRecentEmails") {
          setEmailData(data);
        }
      }
    }
  } catch (error) {
    console.error("Fetch refresh email failed", error);
  } finally {
    setIsLoading(false);
  }
};

const RefreshMail = ({ emailData, setEmailData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMailList, setIsMailList] = useState(true);
  const [isEmailBody, setIsEmailBody] = useState("");
  const [isSender, setIsSender] = useState({});

  useEffect(() => {
    const handleClick = (event) => {
      const listItem = event.target.closest("#email-content li");

      if (listItem) {
        const emailBody = listItem.getAttribute("data-body");
        const senderName = listItem.querySelector(".inboxSenderName")?.textContent || "";
        const senderEmail = listItem.querySelector(".inboxSenderEmail")?.textContent || "";
        const subject = listItem.querySelector(".mail-subject")?.textContent || "";
        const date = listItem.getAttribute("data-date") || "";
        const content = listItem.getAttribute("data-content") || "";

        setIsEmailBody(emailBody);
        setIsSender({ senderName, senderEmail, subject, date, content });
        setIsMailList(false);
      }

      const backButton = event.target.closest(".back-btn-link");
      if (backButton) {
        setIsMailList(true);
        setIsEmailBody("");
        setIsSender({});
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="inboxx">
      <div className="tm-content">
        <div className="inboxWarpMain border border-[#787878] shadow-md rounded-xl bg-white">
          {/* Mail List View */}
          <div className={`inbox-area maillist ${isMailList ? "" : "hidden"}`}>
            <div className="inbox-header border-b hidden-xs-sm bg-white text-primary-foreground flex h-16 items-center rounded-tl-xl rounded-tr-xl border-[#787878] justify-between p-5">
              <div className="col-h flex items-center text-base font-bold uppercase max-w-2/5">
                Mailbox
              </div>
              <div className="col-h">
                <button
                  className="header-items__refresh header-items__size cursor-pointer"
                  onClick={() => fetchEmailRefresh(emailData, setEmailData, setIsLoading)}
                >
                  <RefreshIconSVG
                    iconWidth={20}
                    iconHeight={20}
                    className={isLoading ? "animate-spin" : ""}
                  />
                </button>
              </div>
            </div>

            <div className="inbox-dataList rounded-bl-xl rounded-br-xl min-h-96 pb-1">
              {emailData?.content ? (
                <ul
                  id="email-content"
                  className="m-0 p-0 list-none break-words"
                  dangerouslySetInnerHTML={{ __html: emailData.content }}
                />
              ) : (
                <div className="inbox-empty h-[335px] flex justify-center items-center text-center">
                  <div className="inbox-empty-msg items-center">
                    <div className="emptyInboxTitle text-2xl text-primary-foreground font-semibold mb-1.5">
                      Your inbox is empty
                    </div>
                    <div>Waiting for incoming mails!</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Single Email View */}
          <div className={`inbox-area onemail ${isMailList ? "hidden" : ""}`}>
            <div className="inbox-header email-view p-6 pl-3 border-b border-primary-foreground/40">
              <div className="col-h-data">
                <button className="back-btn-link flex items-center gap-2 cursor-pointer hover:[&>svg]:stroke-primary-foreground text-primary-foreground font-medium text-base uppercase">
                  <LeftArrowIconSVG
                    iconWidth={24}
                    iconHeight={24}
                    className="transition-all ease-in duration-500 stroke-foreground"
                  />
                  Back to list
                </button>
              </div>
            </div>

            <div className="inbox-data-content">
              <div className="inbox-data-content-header sm:flex items-center justify-between py-3 border-b border-primary-foreground/40 sm:px-6 gap-2">
                <div className="user-data-name flex items-center gap-4 pb-3 sm:pb-0 px-6 sm:px-0">
                  <figure className="first-letters size-[50px] border-2 border-primary-foreground text-primary-foreground flex items-center justify-center text-base font-semibold rounded-full flex-shrink-0">
                    {isSender.senderName?.charAt(0)}
                  </figure>

                  <div className="w-full overflow-hidden text-sm whitespace-nowrap">
                    <div className="from-name text-black font-semibold">{isSender.senderName}</div>
                    <div className="from-email text-ellipsis overflow-hidden">
                      {isSender.senderEmail}
                    </div>
                  </div>
                </div>
                <div className="user-data-time flex flex-row sm:flex-col gap-2 sm:gap-0.5 border-t sm:border-0 border-primary-foreground/40 pt-3 sm:pt-0 px-6 sm:px-0">
                  <div className="date-time-text sm:text-end text-sm font-normal text-black">
                    Date:
                  </div>
                  <div className="user-data-time-data text-right text-sm whitespace-nowrap">
                    {isSender.date}
                  </div>
                </div>
              </div>

              <div className="user-data-subject flex items-center px-6 py-3 border-b border-primary-foreground/40 gap-2">
                <div className="text-base font-semibold text-primary-foreground">Subject:</div>
                <h4 className="font-semibold">{isSender.subject}</h4>
              </div>

              <div className="inbox-data-content-intro p-6 text-sm font-normal">
                <iframe
                  srcDoc={isEmailBody}
                  style={{ width: "100%", height: "400px", border: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefreshMail;
