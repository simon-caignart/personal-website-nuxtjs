<template>
  <Nuxt />
</template>

<script>
import { mapGetters } from "vuex";

export default {
  beforeMount() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
    });
    this.$store.dispatch("autoTheme");
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", e => {
        this.$store.dispatch("autoTheme");
      });
  },
  computed: {
    ...mapGetters({ theme: "getTheme" })
  },
  watch: {
    theme(newTheme, oldTheme) {
      if (newTheme === "light") {
        document.querySelector("html").classList.remove("dark");
        document.querySelector("html").classList.remove("bg-gray-800");
        document.querySelector("html").classList.add("bg-white");
      } else {
        document.querySelector("html").classList.add("dark");
        document.querySelector("html").classList.remove("bg-white");
        document.querySelector("html").classList.add("bg-gray-800");
      }
      this.$nextTick(() => {
        this.$nuxt.$loading.finish();
      });
    }
  }
};
</script>
