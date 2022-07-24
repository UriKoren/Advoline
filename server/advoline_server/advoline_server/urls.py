from django.conf import settings
from django.contrib import admin
from . import views
from django.urls import path

api_prefix = settings.API_PREFIX

urlpatterns = [

    path('admin/', admin.site.urls),
    path(f'{api_prefix}userstoryservice/senduserstory/', views.classifyhandler),
    path(f'{api_prefix}nameservice/sendname/', views.nameAndEmailhandler),
    path(f'{api_prefix}phonenumberservice/sendphonenumber/', views.phonenumberhandler),
    path(f'{api_prefix}mainlegalfieldservice/sendmainlegal/', views.mainLegalhandler),
    path(f'{api_prefix}posts/', views.filehandler1),
    path(f'{api_prefix}posts2/', views.filehandler2),
    path(f'{api_prefix}posts3/', views.filehandler3),

]
