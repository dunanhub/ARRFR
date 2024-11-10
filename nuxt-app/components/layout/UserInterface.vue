<template>
    <div>
        <div @click="toggleNotifications" class="relative cursor-default">
            <Icon name="line-md:bell-loop" size="1.5em" class="hover:bg-[#8c57ff] transition easy-in-out delay-150" />
            <span class="absolute -top-1 -right-1 bg-[#ff5a5f] w-3 h-3 py-0.2 px-0.5 rounded-full"></span>
        </div>

        <transition name="fade">
          <div v-if="notificationsOpen" class="absolute right-20 w-[300px] bg-[#2e2a3b] rounded-lg p-3 z-10 shadow-8xl">
            <div class="notifications-header">
                <h3>Уведомления</h3>
                <span class="new-count">3 новых</span>
            </div>
            <div class="notifications-list">
                <NotificationItem
                v-for="(notification, index) in notifications"
                :key="index"
                :avatar="notification.avatar"
                :title="notification.title"
                :message="notification.message"
                :time="notification.time"
                />
            </div>
            <div class="notifications-footer">
                <button @click="viewAllNotifications" class="view-all-button w-full">Просмотр всех уведомлений</button>
            </div>
          </div>
        </transition>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import NotificationItem from '~/components/NotificationItem.vue';

export default {
  components: {
    Icon,
    NotificationItem,
  },
  data() {
    return {
      notificationsOpen: false,
      notifications: [
        {
          avatar: "user1.png",
          title: "Congratulations Flora! 🎉",
          message: "Won the monthly best seller badge",
          time: "Today",
        },
        {
          avatar: "CB",
          title: "Cecilia Becker",
          message: "Accepted your connection",
          time: "12h ago",
        },
        {
          avatar: "user2.png",
          title: "New message received 👋",
          message: "You have 10 unread messages",
          time: "11 Aug",
        },
        {
          avatar: "chart-icon.png",
          title: "Monthly report generated",
          message: "July month financial report is generated",
          time: "Apr 24, 10:30 AM",
        },
        {
          avatar: "approved-icon.png",
          title: "Application has been approved 🚀",
          message: "Your application was accepted",
          time: "Yesterday",
        },
        {
          avatar: "approved-icon.png",
          title: "Hello, World 🚀",
          message: "Test text",
          time: "15.11.2000",
        },
      ],
    };
  },
  methods: {
    toggleNotifications() {
        this.notificationsOpen = !this.notificationsOpen;
        console.log("Notifications toggled:", this.notificationsOpen); // Отладочный вывод
    },
    viewAllNotifications() {
      alert("Redirecting to all notifications...");
    },
  },
};
</script>

<style scoped>

.notifications-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
}

.new-count {
  background-color: #6c5ce7;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.notifications-list {
  max-height: 300px;
  overflow-y: auto;
  margin-top: 12px;
}

.notifications-footer {
  text-align: center;
  margin-top: 12px;
}

.view-all-button {
  background-color: #6c5ce7;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
}

.view-all-button:hover {
  background-color: #8e7cf3;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>