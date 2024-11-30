// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
    const token = localStorage.getItem('access_token');
    
    console.log("Auth")

    // Если нет токена и пользователь пытается попасть на защищенную страницу
    if (!token && to.path !== '/login') {
      return navigateTo('/');  // Перенаправление на страницу логина
    }
  });
  