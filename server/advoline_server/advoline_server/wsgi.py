"""
WSGI config for advoline_server project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/wsgi/
"""
import os
import sys

from django.core.wsgi import get_wsgi_application

SERVER_BASE = 'c:/Apache24/_projects/advoline/server'
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'advoline_server.settings')

sys.path.append(SERVER_BASE)
sys.path.append(f'{SERVER_BASE}/advoline_server')

application = get_wsgi_application()
