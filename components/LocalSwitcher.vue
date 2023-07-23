<template>
  <div>
    <button
      @click="isOpen = !isOpen"
      class="relative z-10 block h-5 w-8 mt-0.5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        class="h-full w-full object-cover fill-current"
        :class="{
          'text-gray-800 dark:text-gray-300': invertDarkThemeColors,
          'text-white dark:text-gray-800': !invertDarkThemeColors,
        }"
        data-name="Layer 1"
        viewBox="-0.01 0 305.84 280.22"
      >
        <path
          d="M207.8,94.9c-19.3,0-38.7-.1-58,.1-3.7,0-5.2-.6-5.1-4.8.4-8.8.4-17.7,0-26.5-.1-4.4,1.5-5.1,5.4-5,22,.1,44-.1,66,.1,3.9.1,5.2-.9,4.9-4.9s0-10.3-.1-15.5c-.1-2.6.5-3.8,3.5-3.8,9.6.2,19.3.2,29,0,2.7,0,3.8.7,3.7,3.7-.2,5.4.1,10.9-.2,16.4-.1,3.4,1.1,4.1,4.2,4.1h67c3.7-.1,5.2.6,5.1,4.8-.4,9.2-.3,18.3-.1,27.5.1,3-.7,4.1-3.8,4-6-.3-12,0-18-.2-2.8,0-4,.5-4.5,3.7-10.6,72.6-63.4,127-135.6,139.7-7.4,1.3-14.9,1.3-22.4,2.2-3.5.4-4.1-1.2-4-4.2.2-9.2.4-18.4-.1-27.5-.2-4.5,1.9-4.6,5.3-4.8,42.7-2.3,76.2-21.3,100.6-56.3,10.2-14.7,16.5-31.1,19.7-48.7.7-3.6-.4-4.1-3.6-4.1Z"
          transform="translate(-144.7 -34.6)"
        />
        <path
          d="M232.8,231.8c10.4-6.2,19.7-12.5,28.2-20.1,2.6-2.4,3.8,0,5.3,1.2a130.2,130.2,0,0,0,55.4,26.2c17.2,3.7,34.7,2.3,53.1,2.6L344.5,193c-2,0-2.2,1.6-2.8,2.6-5.4,8.6-10.9,17.2-16.1,25.9-1.4,2.4-2.8,2.9-5.6,2.2a127.6,127.6,0,0,1-27.3-10.6c-2.2-1.2-3.3-2.1-1.6-4.9q25.5-40.6,50.9-81.7c2.4-3.8,3.2-.8,4.2.8l45.4,72.8c19.2,30.8,38.3,61.6,57.6,92.3,2.1,3.3,1.8,4.8-1.5,6.7-7.9,4.6-15.7,9.5-23.3,14.5-2.8,1.8-4,1.4-5.6-1.4-6.3-10.4-12.9-20.6-19.2-31a6.5,6.5,0,0,0-6.3-3.5c-14.5.2-29,0-43.5.1C304.9,278.1,266.3,262.2,232.8,231.8Z"
          transform="translate(-144.7 -34.6)"
        />
        <path
          d="M206.5,107.8c2.6-.8,3.3.6,3.6,3a156.4,156.4,0,0,0,12.1,43.5c.9,2.1,1.1,3.5-.8,5.2A130.6,130.6,0,0,1,196.6,177c-2.8,1.4-3.6.5-4.7-1.9a209,209,0,0,1-17.8-58.9c-.5-3.1-.1-4.7,3.6-5.1C187.3,110.2,196.8,108.9,206.5,107.8Z"
          transform="translate(-144.7 -34.6)"
        />
        <path
          d="M255.4,267.1l2.7,1.5a161.8,161.8,0,0,0,25.6,12.1c3,1,4,1.9,1.9,5-5.8,8.9-11.4,17.9-16.9,27-1.4,2.4-2.5,2.7-4.8,1.2q-12.1-7.9-24.6-15.3c-2.5-1.5-3.1-2.6-1.3-5.3,5.2-7.9,10.1-16,15.1-24C253.7,268.4,254,267.1,255.4,267.1Z"
          transform="translate(-144.7 -34.6)"
        />
      </svg>
    </button>

    <button
      v-if="isOpen"
      @click="isOpen = false"
      tabindex="-1"
      class="fixed inset-0 w-full h-full cursor-default z-40"
    ></button>

    <transition name="fade">
      <div
        v-if="isOpen"
        class="absolute z-50 right-7 top-5 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-tooltip"
      >
        <a
          class="cursor-pointer block px-3 pt-2 pb-1 text-sm rounded-t-lg"
          :class="{
            'text-black dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700':
              invertDarkThemeColors,
            'text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700':
              !invertDarkThemeColors,
          }"
          @click="
            switchLocale('en');
            isOpen = false;
          "
          >English</a
        >
        <a
          class="cursor-pointer block px-3 pt-1 pb-2 text-sm rounded-b-lg"
          :class="{
            'text-black dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700':
              invertDarkThemeColors,
            'text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700':
              !invertDarkThemeColors,
          }"
          @click="
            switchLocale('fr');
            isOpen = false;
          "
          >Français</a
        >
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["invertDarkThemeColors"],
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    },
  },
  data() {
    return {
      locales: ["en", "fr"],
      isOpen: false,
    };
  },
  mounted() {
    const handleEscape = (e) => {
      if (e.key === "Esc" || e.key === "Escape") {
        this.isOpen = false;
      }
    };
    document.addEventListener("keydown", handleEscape);
    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", handleEscape);
    });
  },
};
</script>
