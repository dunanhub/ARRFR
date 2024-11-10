<template>
    <div class="relative">
        <div @click="toggleMenu" class="cursor-pointer inline-block">
            <NuxtImg src="/avatar.png" width="40px" class="rounded-full" />
            <span class="absolute w-3.5 h-3.5 bottom-0 right-0 bg-[rgb(86,202,0)] rounded-full border-2 border-[rgb(40,36,61)]"></span>
        </div>

        <transition name="fade">
            <div
                v-if="menuOpen"
                class="absolute right-0 mt-2 w-56 bg-[#2e2a3b] rounded-lg shadow-lg p-4 z-10"
            >
                <div class="flex items-center space-x-3 border-b border-gray-700 pb-4 mb-4">
                    <NuxtImg src="/avatar.png" width="40px" class="rounded-full" />
                    <div>
                        <p class="text-base font-semibold">John Doe</p>
                        <p class="text-gray-400 text-sm">Admin</p>
                    </div>
                </div>
                <ul class="space-y-3">
                    <li class="flex items-center space-x-2 text-white cursor-pointer hover:text-purple-400 transition">
                        <Icon name="line-md:account" class="w-5 h-5" />
                        <span class="text-base">Profile</span>
                    </li>
                    <li class="flex items-center space-x-2 text-white cursor-pointer hover:text-purple-400 transition">
                        <Icon name="line-md:cog-loop" class="w-5 h-5" />
                        <span class="text-base">Settings</span>
                    </li>
                    <li class="flex items-center space-x-2 text-white cursor-pointer hover:text-purple-400 transition">
                        <Icon name="line-md:text-box" class="w-5 h-5" />
                        <span class="text-base">Billing Plan</span>
                        <span class="ml-auto bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">4</span>
                    </li>
                    <li class="flex items-center space-x-2 text-white cursor-pointer hover:text-purple-400 transition">
                        <Icon name="solar:dollar-linear" class="w-5 h-5" />
                        <span class="text-base">Pricing</span>
                    </li>
                    <li class="flex items-center space-x-2 text-white cursor-pointer hover:text-purple-400 transition">
                        <Icon name="line-md:brake-alert" class="w-5 h-5" />
                        <span class="text-base">FAQ</span>
                    </li>
                    </ul>
                    <div class="mt-4">
                    <button class="w-full bg-[rgb(255,76,81)] text-base py-2 rounded-lg hover:bg-[#d94045] transition">
                        Logout
                        <Icon name="line-md:log-in" />
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  color: #d94045;
}
</style>