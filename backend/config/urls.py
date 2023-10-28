from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

from app.views import registration_view

urlpatterns = [
    path('admin/', admin.site.urls),

]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) # Adicionar Isto
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 


urlpatterns += [
    
    path('register/', registration_view, name='register'),

]