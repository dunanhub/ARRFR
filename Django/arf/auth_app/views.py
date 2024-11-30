from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

class LoginView(APIView):
    # Разрешаем доступ без аутентификации
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')  # Получаем email
        password = request.data.get('password')  # Получаем пароль

        # Аутентификация
        user = authenticate(username=email, password=password)
        if user is None:
            return Response({"error": "Invalid credentials or user not found"}, status=status.HTTP_401_UNAUTHORIZED)

        # Генерация токенов
        refresh = RefreshToken.for_user(user)
        return Response({
            "message": "Login successful",
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }, status=status.HTTP_200_OK)
