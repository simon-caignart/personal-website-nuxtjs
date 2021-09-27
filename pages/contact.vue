<template>
  <div
    name="contact"
    class="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-400"
  >
    <NavBar :nav-bar-title="title" class="absolute" />
    <div
      class="flex flex-col md:flex-row w-full items-center justify-items-center md:min-h-screen md:pt-22"
    >
      <ContactInfo />
      <SectionSeparator
        :width="sectionWidth"
        class="md:h-screen80"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-once="true"
      />
      <ContactForm />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ContactForm from "../components/contact/contact-form";
import ContactInfo from "../components/contact/contact-info";
import SectionSeparator from "../components/sectionSeparator";

export default {
  components: { NavBar, ContactForm, ContactInfo, SectionSeparator },
  data() {
    return {
      title: this.$t("home.contact"),
      sectionWidth: "w-1.5",
      description:
        "Contact me easily via this page's form, I will be happy to answer you questions and propositions!",
      metaTitle: "Simon Caignart | Contact"
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
        { rel: "canonical", href: "https://simoncaignart.com/contact" },
        ...i18nHead.link
      ],
      meta: [
        { name: "googlebot", content: "noindex" },
        { charset: "robots", content: "utf-8" },
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
        { property: "og:url", content: "https://simoncaignart.com/contact" },
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
