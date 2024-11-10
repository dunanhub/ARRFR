<template>
  <div class="notification-item">
    <div class="avatar">
      <img v-if="isImageAvatar" :src="avatarSrc" alt="Avatar" class="avatar-image" />
      <span v-else class="avatar-placeholder">{{ avatar }}</span>
    </div>
    <div class="notification-details">
      <p class="title">{{ title }}</p>
      <p class="message">{{ message }}</p>
      <p class="time">{{ time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: false,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  computed: {
    isImageAvatar() {
      // Проверяем, если аватар является путем к изображению
      return this.avatar && this.avatar.includes(".");
    },
    avatarSrc() {
      // Используем динамический импорт для загрузки изображения
      return new URL(`~/assets/${this.avatar}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.notification-item {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #3e3b4a;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #4e4a63;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-placeholder {
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
}

.notification-details {
  flex: 1;
}

.title {
  color: #ffffff;
  font-weight: bold;
  margin: 0;
}

.message {
  color: #c0c0c0;
  margin: 4px 0 0;
  font-size: 0.9rem;
}

.time {
  color: #a0a0a0;
  font-size: 0.8rem;
  margin-top: 4px;
}
</style>
