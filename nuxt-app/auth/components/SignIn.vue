<template>
<div class="login-container">
    <h1 class="text-center">Login</h1>
    <form @submit.prevent="handleSubmit" class="login-form">
      <div class="form-group">
        <label for="email">Почта</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          placeholder="Enter your email"
          required
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input
          v-model="form.password"
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          class="input"
        />
      </div>
      <button type="submit" class="btn btn-primary">Войти</button>
    </form>
  </div>
</template>

<script setup>
    import { reactive } from 'vue';

    const form = reactive({
        email: '',
        password: '',
    });

    const handleSubmit = () => {
        console.log('Form Data:', form);
    };

</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.login-form .form-group {
  margin-bottom: 15px;
}

.input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  width: 100%;
  padding: 10px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>