<template>
  <nav class="flex w-full items-center p-5 z-50">
    <!-- Go Back Arrow  -->
    <nuxt-link to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="place-self-center min-w-navBarArrow h-7 w-7 md:h-10 md:w-10 fill-current text-white dark:text-gray-800 cursor-pointer left-5 top-5"
        viewBox="0 0 492 492"
      >
        <path
          d="M464.344 207.418l.768.168H135.888l103.496-103.724c5.068-5.064 7.848-11.924 7.848-19.124 0-7.2-2.78-14.012-7.848-19.088L223.28 49.538c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844L7.844 226.914C2.76 231.998-.02 238.77 0 245.974c-.02 7.244 2.76 14.02 7.844 19.096l177.412 177.412c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652L134.72 284.406h329.992c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z"
        />
      </svg>
    </nuxt-link>

    <!-- Title of the page -->
    <h1
      class="text-white dark:text-gray-800 text-4xl xl:text-5xl font-semibold self-start flex-1 text-center pr-7 xl:pr-10"
    >
      {{ $t(navBarTitle) }}
    </h1>

    <no-ssr>
      <div id="switchers" class="flex absolute right-5">
        <LocaleSwitcher :invertDarkThemeColors="false" />
        <ThemeSwitcher :invertDarkThemeColors="false" /></div
    ></no-ssr>
  </nav>
</template>

<script>
import LocaleSwitcher from "../components/LocalSwitcher.vue";
import ThemeSwitcher from "../components/ThemeSwitcher.vue";

export default {
  components: {
    LocaleSwitcher,
    ThemeSwitcher,
  },
  props: {
    navBarTitle: {
      type: String,
      required: true,
      default: "Default Title",
    },
  },
};
</script>
