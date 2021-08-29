<template>
  <Nuxt />
</template>

<script>
import { mapGetters } from "vuex";

export default {
  beforeMount() {
    this.$store.dispatch("autoTheme");
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", e => {
        this.$store.dispatch("autoTheme");
      });
  },
  mounted: function() {
    //this.switchLocale(this.getUserSupportedLocale());
  },
  methods: {
/*     switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        this.setI18nLocaleInServices(locale);
      }
    },
    getUserSupportedLocale() {
      const userPreferredLocale = this.getUserLocale();

      if (this.isLocaleSupported(userPreferredLocale.locale)) {
        return userPreferredLocale.locale;
      }

      if (this.isLocaleSupported(userPreferredLocale.localeNoISO)) {
        return userPreferredLocale.localeNoISO;
      }
      return this.defaultlocale;
    },
    isLocaleSupported(locale) {
      return this.supportedLocales.includes(locale);
    },
    getUserLocale() {
      const locale =
        window.navigator.language ||
        window.navigator.userLanguage ||
        this.defaultLocale;
      return {
        locale: locale,
        localeNoISO: locale.split("-")[0],
      };
    },
    setI18nLocaleInServices(locale) {
      this.currentLocale = locale;
      axios.defaults.headers.common["Accept-Language"] = locale;
      document.querySelector("html").setAttribute("lang", locale);
      return locale;
    }, */
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
    }
  }
};
</script>
