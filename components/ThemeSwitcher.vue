<template>
  <button @click="toggleTheme">
    <svg
      v-if="!isDark"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="stroke-current"
      :class="{
        'text-gray-800 dark:text-gray-300': invertDarkThemeColors,
        'text-white dark:text-gray-800': !invertDarkThemeColors,
      }"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
    <svg
      v-if="isDark"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="fill-current"
      :class="{
        'text-gray-800 dark:text-gray-300': invertDarkThemeColors,
        'text-white dark:text-gray-800': !invertDarkThemeColors,
      }"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      ></path>
    </svg>
  </button>
</template>

<script>
export default {
  props: ["invertDarkThemeColors"],
  mounted: function () {
    this.changeIcon();
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        this.changeIcon();
      });
  },
  methods: {
    changeIcon() {
      if (this.$store.getters.getTheme === "dark") {
        this.isDark = true;
      } else {
        this.isDark = false;
      }
    },
    toggleTheme() {
      this.$store.dispatch("flipTheme");
      this.changeIcon();
    },
  },
  data() {
    return {
      isDark: false,
    };
  },
};
</script>
