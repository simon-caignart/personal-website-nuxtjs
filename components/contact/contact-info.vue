<template>
  <section
    class="h-screen flex justify-center items-center md:h-full md:w-1/2 px-5 sm:px-10 md:px-20"
    data-aos="zoom-in"
    data-aos-delay="500"
  >
    <div class="flex flex-col">
      <h1 class="contactInfoText font-semibold text-3xl pt-22 md:pt-0">
        {{ $t("contact.workWithMe") }}
      </h1>
      <h2 class="contactInfoText font-medium text-xl pt-5">
        {{ $t("contact.contactMe") }}
        <a
          href="#contact-form"
          @click="makeContactFormBounce"
          class="underline cursor-pointer"
          >{{ $t("contact.here") }}</a
        >
      </h2>
      <h2 class="contactInfoText font-medium text-xl pt-10">
        {{ $t("contact.myLinks") }}
      </h2>
      <div class="text-center mt-3">
        <!-- Linkedin Icon -->
        <a
          href="https://linkedin.com/in/simon-caignart-49768a189"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            class="contactInfoSocialIcon mr-2"
            enable-background="new 0 0 24 24"
            height="512"
            viewBox="0 0 24 24"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="linkedinTitle"
            role="img"
          >
            <title id="linkedinTitle">
              {{ $t("contact.goToLinkedin") }}
            </title>
            <path
              d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"
            />
            <path d="m.396 7.977h4.976v16.023h-4.976z" />
            <path
              d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"
            /></svg
        ></a>

        <!-- GitHub Icon -->
        <a
          href="https://github.com/SimonCaignart"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            class="contactInfoSocialIcon ml-2 "
            enable-background="new 0 0 24 24"
            height="512"
            viewBox="0 0 24 24"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="githubTitle"
            role="img"
          >
            <title id="githubTitle">
              {{ $t("contact.goToGithub") }}
            </title>
            <path
              d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"
            /></svg
        ></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    makeContactFormBounce() {
      var contactForm = document.getElementById("contact-form");
      contactForm.classList.add("animate-bouncePulseOnce");
      setTimeout(() => {
        contactForm.classList.replace(
          "animate-bouncePulseOnce",
          "animate-none"
        );
      }, 1000);
    },
  },
};
</script>
