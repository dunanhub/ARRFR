<template>
    <div class="register-page">
      <h1>Регистрация</h1>
      <form @submit.prevent="register">
        <input type="text" v-model="username" placeholder="Имя пользователя" required />
        <input type="password" v-model="password" placeholder="Пароль" required />
        <button type="submit">Зарегистрироваться</button>
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
    async register() {
    try {
        await this.$axios.post('/register', {
        username: this.username,
        password: this.password,
        });
        this.$router.push('/login');
    } catch (error) {
        console.error('Ошибка регистрации:', error.response.data.message);
    }
    },
},
};
</script>

<style>
/* Добавьте стили для страницы */
.register-page {
max-width: 400px;
margin: 50px auto;
}
</style>
  