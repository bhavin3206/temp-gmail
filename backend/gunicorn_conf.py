# /var/www/temp_mail/backend/gunicorn_conf.py
from multiprocessing import cpu_count

bind = "127.0.0.1:8000"
workers = (cpu_count() * 2) + 1
worker_class = "uvicorn.workers.UvicornWorker"
timeout = 120

accesslog = "/var/log/temp_mail/access.log"
errorlog = "/var/log/temp_mail/error.log"
