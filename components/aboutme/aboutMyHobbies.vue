<template>
  <section name="hobbies" class="aboutSection mt-1/2">
    <div
      class="aboutIllustrationSection"
      data-aos="zoom-in"
      data-aos-delay="150"
    >
      <aboutBlob class="aboutBlob"></aboutBlob>

      <div class="aboutWindow">
        <div class="aboutWindowDot" style="left:15px"></div>
        <div class="aboutWindowDot" style="left:38px"></div>
        <div class="aboutWindowDot" style="left:61px"></div>
      </div>
      <div class="absolute w-4/12 top-1/2 left-1/2 hobbiesImgContainer max-w-hobbiesImg">
        <img
          class="top"
          src="../../assets/pullups.png"
          alt="Illustration of Simon Caignart doing pullups"
        />
        <img
          class="bottom"
          src="../../assets/handstand.png"
          alt="Illustration of Simon Caignart doing one arm handstand"
        />
      </div>
    </div>
    <div class="aboutTextSection">
      <p class="aboutTitle" data-aos="fade-left" data-aos-delay="150">
        {{ $t("about.myHobbies") }}
      </p>
      <p class="aboutParagraph" data-aos="fade-left" data-aos-delay="300">
        {{ $t("about.hobbies_presentation_before") }}"<a
          class="underline"
          href="https://schoolofcalisthenics.com/learn-calisthenics/what-is-calisthenics/"
          target="_blank"
          rel="noopener noreferrer"
          >Calisthenics</a
        >"{{ $t("about.hobbies_presentation_after") }}
      </p>
    </div>
  </section>
</template>

<script>
import aboutBlob from "./aboutBlob";
import loadAboutIllustration from "../../directives/loadAboutIllustration";

export default {
  directives: {
    loadIllustration: loadAboutIllustration,
  },
  components: {
    aboutBlob,
  },
};
</script>
