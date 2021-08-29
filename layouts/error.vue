<template>
  <div
    class="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-800 z-20"
  >
    <h1
      v-if="error.statusCode === 404"
      class="px-4 text-center dark:text-gray-300 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold"
      data-aos="zoom-out"
      data-aos-delay="300"
    >
      {{ $t("notFound.sorry") }}
    </h1>
    <h1
      v-else
      class="px-4 text-center dark:text-gray-300 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold"
      data-aos="zoom-out"
      data-aos-delay="300"
    >
      {{ $t("notFound.error") }} {{ error.statusCode }}
    </h1>
    <client-only>
      <nuxt-link
        class="focus:outline-none mt-8 transform hover:scale-105 ease-in-out transition duration-500 cursor-pointer border-b-3 border-red-600 font-semibold text-2xl md:text-3xl xl:text-4xl "
        to="/"
        id="backHomeBtn"
        data-aos="zoom-out"
        data-aos-delay="700"
      >
        {{ $t("notFound.goBack") }}
      </nuxt-link>
    </client-only>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
  mounted: function() {
    //this.changeButtonFont();
  },
  head() {
    return {
      title: "Simon Caignart | Error"
    };
  },
  methods: {
    changeButtonFont() {
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      var backHomeBtn = document.getElementById("backHomeBtn");
      if (isSafari) {
        backHomeBtn.classList.add("text-red-600");
      } else {
        backHomeBtn.classList.add(
          "text-transparent",
          "bg-clip-text",
          "bg-gradient-to-r",
          "from-red-600",
          "via-red-500",
          "to-yellow-400"
        );
      }
    }
  }
};
</script>
