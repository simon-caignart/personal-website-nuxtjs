<template>
  <div
    name="aboutme"
    class="min-h-full overflow-hidden"
    style="background: rgb(193,30,68); background: linear-gradient(36deg, rgba(193,30,68,1) 9%, rgba(226,75,32,1) 70%, rgba(247,174,0,1) 100%);"
  >
    <NavBar :nav-bar-title="title" class="absolute" />

    <aboutMe v-loadIllustration data-url="/me coding.png"></aboutMe>
    <aboutMyHobbies v-loadIllustration data-url="/pullups.png"></aboutMyHobbies>

    <!-- Floating Window Illustration -->
    <transition appear name="fadelater">
      <section
        name="floatingIllustration"
        class="hidden xl:block fixed w-1/2 h-screen top-1/2 right-0 transform -translate-y-1/2"
      >
        <div class="absolute top-1/2 w-full transform -translate-y-1/2">
          <!-- Blob -->
          <aboutBlob></aboutBlob>
          <!-- Card -->
          <div
            class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-7/12 h-4/6 rounded-xl bg-white dark:bg-gray-800"
          >
            <div class="aboutWindowDot" style="left:15px"></div>
            <div class="aboutWindowDot" style="left:38px"></div>
            <div class="aboutWindowDot" style="left:61px"></div>
          </div>
        </div>

        <img
          id="meImg"
          alt="Illustration of me working on my computer"
          class="absolute z-0 w-4.5/12 max-h-5/6 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          src="../assets/me coding.png"
        />
        <div
          id="hobbiesImg"
          class="absolute w-4/12 top-1/2 left-1/2 hobbiesImgContainer"
        >
          <img
            class="top"
            src="../assets/pullups-web.png"
            alt="Illustration of me doing pullups"
          />
          <img
            class="bottom"
            src="../assets/handstand.png"
            alt="Illustration of me doing a one arm handstand"
          />
        </div>
      </section>
    </transition>
    <!-- Bottom wave -->
    <bottomWave></bottomWave>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import aboutBlob from "../components/aboutme/aboutBlob";
import bottomWave from "../components/aboutme/aboutBottomWave";
import aboutMe from "../components/aboutme/aboutMe";
import aboutMyHobbies from "../components/aboutme/aboutMyHobbies";

import loadAboutIllustration from "../directives/loadAboutIllustration";

export default {
  components: {
    NavBar,
    aboutBlob,
    bottomWave,
    aboutMe,
    aboutMyHobbies,
  },
  methods: {
    calculateAge() {
      let currentDate = new Date();
      let birthDate = new Date("2000/04/21");
      let difference = currentDate - birthDate;
      let age = Math.floor(difference / 31557600000);
      return age;
    },
  },
  directives: {
    loadIllustration: loadAboutIllustration,
  },
  data() {
    return {
      title: this.$t("home.about"),
      metaTitle: "Simon Caignart | About me",
      description:
        "I am a " +
        this.calculateAge() +
        " years old student passionate about all sort of new technologies and IT stuff, currently in my 4th year of master's degree in IT and Computer Science.",
    };
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: this.metaTitle,
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      link: [{ rel: "canonical", href: "https://simoncaignart.com/aboutme" },...i18nHead.link],
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
        { property: "og:url", content: "https://simoncaignart.com/aboutme" },
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
        },...i18nHead.meta
      ],
    };
  },
};
</script>
