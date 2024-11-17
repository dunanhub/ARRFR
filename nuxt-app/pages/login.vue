<template>
    <div class="login-page">
      <h1>Вход</h1>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Имя пользователя" required />
        <input type="password" v-model="password" placeholder="Пароль" required />
        <button type="submit">Войти</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          await this.$auth.loginWith('local', {
            data: {
              username: this.username,
              password: this.password,
            },
          });
          this.$router.push('/');
        } catch (error) {
          console.error('Ошибка входа:', error.response.data.message);
        }
      },
    },
  };
  </script>
  
  <style>
  .login-page {
    max-width: 400px;
    margin: 50px auto;
  }
  </style>
  