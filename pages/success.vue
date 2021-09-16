<template>
  <div
    class="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-800 z-20"
  >
    <h1
      class=" mb-8 px-4 text-center dark:text-gray-300 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold"
      data-aos="zoom-out"
      data-aos-delay="300"
    >
      {{ $t("contact.thankYou") }}
    </h1>
    <client-only>
      <nuxt-link
        class="focus:outline-none transform hover:scale-105 transition duration-700 ease-in-out cursor-pointer border-b-3 border-purple-600 font-semibold text-2xl md:text-3xl xl:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-pink-400"
        to="/contact"
        id="backContactBtn"
        data-aos="zoom-out"
        data-aos-delay="700"
      >
        {{ $t("contact.goBack") }}
      </nuxt-link>
    </client-only>
  </div>
</template>

<script>
export default {
  mounted: function() {
    this.$nextTick().then(() => this.changeButtonFont());
  },
  head() {
    return {
      title: "Simon Caignart | Success"
    };
  },
  methods: {
    changeButtonFont() {
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      var backContactBtn = document.getElementById("backContactBtn");
      if (isSafari) {
        backContactBtn.classList.add("text-purple-600");
      } else {
        backContactBtn.classList.add(
          "text-transparent",
          "bg-clip-text",
          "bg-gradient-to-r",
          "from-purple-600",
          "via-purple-500",
          "to-pink-400"
        );
      }
    }
  }
};
</script>
