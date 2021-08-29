<template>
  <section name="general" class="aboutSection">
    <div class="aboutIllustrationSection" data-aos="zoom-in" data-aos-delay="600">
      <aboutBlob class="aboutBlob"></aboutBlob>
      <div class="aboutWindow">
        <div class="aboutWindowDot" style="left:15px"></div>
        <div class="aboutWindowDot" style="left:38px"></div>
        <div class="aboutWindowDot" style="left:61px"></div>
      </div>
      <img
        class="absolute h-5/6 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10"
        src="../../assets/me coding.png"
        alt="Illustration of me working on my computer"
      />
    </div>
    <div class="aboutTextSection">
      <p class="aboutTitle" data-aos="fade-left" data-aos-delay="600">
        {{ $t("about.hi") }}<br />
        {{ $t("about.imSimonCaignart") }}
      </p>
      <p class="aboutParagraph" data-aos="fade-left" data-aos-delay="750">
        {{ $t("about.presentation_before") }} {{ calculateAge }} {{ $t("about.presentation_after") }}
      </p>
    </div>
  </section>
</template>

<script>
import aboutBlob from "./aboutBlob";

export default {
  computed: {
    calculateAge: function() {
      let currentDate = new Date();
      let birthDate = new Date("2000/04/21");
      let difference = currentDate - birthDate;
      let age = Math.floor(difference / 31557600000);
      return age;
    },
  },
  components: {
    aboutBlob,
  },
};
</script>