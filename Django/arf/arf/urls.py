from django.contrib import admin
from django.urls import path, include
from auth_app.views import LoginView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('auth_app.urls')),  # Подключение auth_app
    path('api/login/', LoginView.as_view(), name='login'),
]
