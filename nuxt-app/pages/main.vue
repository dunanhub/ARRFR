<template>
  <div class="">
      <LayoutHeader />
      <div class="flex justify-center items-start py-10 px-10 w-full">
          <Sessions />
          <UserRequest />
      </div>
  </div>
</template>

<script setup>
    definePageMeta({
      middleware: 'auth',  // Подключаем middleware для этой страницы
    });
</script>