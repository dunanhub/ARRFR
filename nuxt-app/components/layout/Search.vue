<template>
  <div>
    <div
      class="flex items-center cursor-pointer"
      @click="toggleMenu"
      @mouseover="hoverSearchIcon = true"
      @mouseleave="hoverSearchIcon = false"
    >
      <Icon
        name="line-md:search"
        size="1.2em"
        class="search-icon rounded-full"
        :class="{ 'icon-hover': hoverSearchIcon }"
      />
      <span class="mx-5 text-base opacity-40 font-medium">
        Search
      </span>
      <span class="shortcut text-base py-0 px-2 border rounded-lg opacity-40 font-medium">
        ⌘K
      </span>
    </div>

    <div v-if="menuOpen" class="menu-overlay" @click="closeMenu"></div>

    <div v-if="menuOpen" class="search-menu">
      <div class="search-header">
        <Icon name="line-md:search" size="1.5em" class="header-icon" />
        <input type="text" placeholder="Search..." class="search-input" />
        <span @click="closeMenu" class="esc-text">[esc]</span>
        <span @click="closeMenu" class="close-btn">
          <Icon name="line-md:menu-to-close-alt-transition" class="hover:bg-[#8c57ff]" />
        </span>
      </div>
      <div class="divider"></div>
      <div class="menu-content">
        <div class="menu-section">
          <h4>Популярные запросы</h4>
          <ul>
            <li>
              <Icon name="uim:analytics" size="1.2em" class="mr-2" />
              Analytics
            </li>
            <li>
              <Icon name="grommet-icons:analytics" size="1.2em" class="mr-2" />
              CRM
            </li>
            <li>
              <Icon name="line-md:email" size="1.2em" class="mr-2" />
              Почта
            </li>
            <li>
              <Icon name="cil:chart-line" size="1.2em" class="mr-2" />
              Статистика
            </li>
          </ul>
        </div>
        <div class="menu-section">
          <h4>Приложения и страницы</h4>
          <ul>
            <li>
              <Icon name="uim:analytics" size="1.2em" class="mr-2" />
              Analytics
            </li>
            <li>
              <Icon name="grommet-icons:analytics" size="1.2em" class="mr-2" />
              CRM
            </li>
            <li>
              <Icon name="line-md:email" size="1.2em" class="mr-2" />
              Почта
            </li>
            <li>
              <Icon name="cil:chart-line" size="1.2em" class="mr-2" />
              Статистика
            </li>
          </ul>
        </div>
        <div class="menu-section">
          <h4>User Interface</h4>
          <ul>
            <li>
              <Icon name="uim:analytics" size="1.2em" class="mr-2" />
              Analytics
            </li>
            <li>
              <Icon name="grommet-icons:analytics" size="1.2em" class="mr-2" />
              CRM
            </li>
            <li>
              <Icon name="line-md:email" size="1.2em" class="mr-2" />
              Почта
            </li>
            <li>
              <Icon name="cil:chart-line" size="1.2em" class="mr-2" />
              Статистика
            </li>
          </ul>
        </div>
        <div class="menu-section">
          <h4>Radio & Tables</h4>
          <ul>
            <li>
              <Icon name="uim:analytics" size="1.2em" class="mr-2" />
              Analytics
            </li>
            <li>
              <Icon name="grommet-icons:analytics" size="1.2em" class="mr-2" />
              CRM
            </li>
            <li>
              <Icon name="line-md:email" size="1.2em" class="mr-2" />
              Почта
            </li>
            <li>
              <Icon name="cil:chart-line" size="1.2em" class="mr-2" />
              Статистика
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      hoverSearchIcon: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    handleKeydown(event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        this.toggleMenu();
      }
      if (event.key === "Escape" && this.menuOpen) {
        this.closeMenu();
      }
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
};
</script>

<style scoped>
.search-icon {
  font-size: 18px;
  transition: background-color 0.3s ease;
  border-radius: 50%;
}
.icon-hover {
  background-color: rgb(140,87,255);
  padding: 5px;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(4px);
  background-color: #ffffff09;
  z-index: 10;
}

.search-menu {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  max-width: 600px;
  background-color: rgb(49, 45, 75);
  padding: 20px;
  border-radius: 8px;
  z-index: 20;
}

.search-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-icon {
  color: #c0c0c0;
}

.search-input {
  width: 100%;
  padding: 8px;
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1rem;
}

.esc-text {
  color: #a0a0a0;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: -5px;
}
.esc-text:hover {
  color: #8c57ff;
}

.close-btn {
  color: #a0a0a0;
  font-size: 1.2rem;
  cursor: pointer;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #4a4a5a;
  margin: 10px 0;
}

.menu-content {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  margin-top: 20px;
  /* padding: 20px; */
}
.menu-section {
  width: 50%;
  padding: 30px;
  /* flex-basis: 100%; */
  /* height: auto; */
}

/* .column {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 40%;
} */

.menu-section h4 {
  color: rgb(231 227 252 / 40%);
  font-size: .8rem;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1rem;
}

.menu-section ul {
  list-style: none;
  padding: 0;
}

.menu-section li {
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 5px;
  cursor: pointer;
}

.menu-section li:hover {
  color: #8c57ff;
}
</style>
