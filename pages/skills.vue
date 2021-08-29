<template>
  <div
    name="skills"
    class="bg-gradient-to-r from-orange to-yellow-400 min-h-full overflow-hidden"
  >
    <NavBar :nav-bar-title="title" />
    <devRow></devRow>
    <netdockRow></netdockRow>
    <creationRow></creationRow>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import devRow from "../components/skills/devRow.vue";
import creationRow from "../components/skills/creationRow.vue";
import netdockRow from "../components/skills/netdockRow.vue";
export default {
  components: { devRow, creationRow, netdockRow, NavBar },
  data() {
    return {
      title: this.$t("home.skills"),
      metaTitle: "Simon Caignart | Skills",
      description:
        "Development of all kinds of software as well as websites. I am passionate about building excellent software that improves the lives of those around me",
    };
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: this.metaTitle,
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      link: [{ rel: "canonical", href: "https://simoncaignart.com/skills" },...i18nHead.link],
      meta: [
        { charset: "robots", content: "utf-8" },
        { name: "robots", content: "index,follow" },
        {
          name: "author",
          content: "Simon Caignart",
        },
        { name: "description", content: this.description },
        // OpenGraph
        { property: "og:title", content: this.metaTitle },
        { property: "og:locale", content: "en_US" },
        {
          property: "og:description",
          content: this.description,
        },
        { property: "og:url", content: "https://simoncaignart.com/skills" },
        {
          property: "og:image",
          content: "https://simoncaignart.com/favicon.ico",
        },
        // Twitter
        {
          property: "twitter:card",
          content: "summary",
        },
        {
          property: "twitter:site",
          content: "@SimonCaignart",
        },
        {
          property: "twitter:creator",
          content: "@SimonCaignart",
        },
        {
          property: "twitter:title",
          content: this.metaTitle,
        },
        {
          property: "twitter:description",
          content: this.description,
        },
        {
          property: "twitter:image",
          content: "https://simoncaignart.com/favicon.ico",
        },
        {
          property: "twitter:image:alt",
          content: this.metaTitle,
        },
        ...i18nHead.meta
      ],
    };
  },
};
</script>
