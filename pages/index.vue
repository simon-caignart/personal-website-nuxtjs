<template>
  <div class="home">
    <client-only>
      <transition appear name="fadelater">
        <div id="switchers" class="absolute top-3 right-3 flex z-10">
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
      </transition>
    </client-only>
    <section
      id="name"
      class="homeNameSection"
      data-aos="zoom-out"
      data-aos-delay="150"
    >
      <h1 class="homeName">SIMON<br />CAIGNART</h1>
    </section>
    <client-only>
      <section
        id="cards"
        class="homeCardSection"
        data-aos="zoom-out"
        data-aos-delay="150"
      >
        <NuxtLink
          to="/skills"
          class="homeCard bg-gradient-to-r from-orange to-skillsYellow"
        >
          <h2 class="homeCardText">{{ $t("home.skills") }}</h2>
        </NuxtLink>

        <NuxtLink
          to="/experiences"
          class="homeCard bg-gradient-to-r from-blue-500 via-blue-400 to-green-300"
        >
          <h2 class="homeCardText">{{ $t("home.experiences") }}</h2>
        </NuxtLink>

        <NuxtLink
          to="/aboutme"
          class="homeCard bg-gradient-to-r from-red-600 via-red-500 to-yellow-400"
        >
          <h2 class="homeCardText">{{ $t("home.about") }}</h2>
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="homeCard bg-gradient-to-r from-purple-600 via-purple-500 to-pink-400"
        >
          <h2 class="homeCardText">{{ $t("home.contact") }}</h2>
        </NuxtLink>
      </section>
    </client-only>
  </div>
</template>

<script>
import LocaleSwitcher from "../components/LocalSwitcher.vue";
import ThemeSwitcher from "../components/ThemeSwitcher.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    LocaleSwitcher,
    ThemeSwitcher
  },
  data() {
    return {
      description:
        "Hi, I'm Simon Caignart, a software engineer student, I like to code things from scratch, bringing ideas to life.",
      metaTitle: "Simon Caignart | Software Engineer Student"
    };
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: this.metaTitle,
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      link: [
        { rel: "canonical", href: "https://simoncaignart.com/" },
        ...i18nHead.link
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1.0" },
        { name: "robots", content: "index,follow" },
        {
          name: "author",
          content: "Simon Caignart"
        },
        {
          name: "description",
          content: this.description
        },
        // OpenGraph
        { property: "og:title", content: this.metaTitle },
        { property: "og:locale", content: "en_US" },
        {
          property: "og:description",
          content: this.description
        },
        { property: "og:url", content: "https://simoncaignart.com" },
        {
          property: "og:image",
          content: "https://simoncaignart.com/favicon.ico"
        },
        // Twitter
        {
          property: "twitter:card",
          content: "summary"
        },
        {
          property: "twitter:site",
          content: "@SimonCaignart"
        },
        {
          property: "twitter:creator",
          content: "@SimonCaignart"
        },
        {
          property: "twitter:title",
          content: this.metaTitle
        },
        {
          property: "twitter:description",
          content: this.description
        },
        {
          property: "twitter:image",
          content: "https://simoncaignart.com/favicon.ico"
        },
        {
          property: "twitter:image:alt",
          content: this.metaTitle
        },
        ...i18nHead.meta
      ]
    };
  }
};
</script>
