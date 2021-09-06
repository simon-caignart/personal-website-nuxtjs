<template>
  <div class="skillsRow mb-4">
    <div class="skillCard" data-aos="zoom-in-right" data-aos-delay="500" data-aos-once=true data-aos-offset="-1000">
      <h1 class="skillCardTitle">{{ $t("skills.adobe.title") }}</h1>
      <br />
      <p class="skillCardParagraph">
        {{ $t("skills.adobe.text") }}
      </p>
    </div>

    <div class="fourLogosCard" data-aos="zoom-in-up" data-aos-delay="500" data-aos-once=true data-aos-offset="-1000">
      <img
        src="../../assets/photoshop_logo.svg"
        alt="Adobe Photoshop logo"
        height="75px"
        width="75px"
        class="skillLogo svg-shadow"
      />
      <img
        src="../../assets/in-design_logo.svg"
        alt="Adobe In-design logo"
        height="75px"
        width="75px"
        class="skillLogo svg-shadow"
      />
      <img
        src="../../assets/illustrator_logo.svg"
        alt="Adobe Illustrator logo"
        height="75px"
        width="75px"
        class="skillLogo svg-shadow"
      />
      <img
        src="../../assets/premiere-pro_logo.svg"
        alt="Adobe Premiere Pro logo"
        height="75px"
        width="75px"
        class="skillLogo svg-shadow"
      />
    </div>
    <div class="skillCard md:ml-4" data-aos="zoom-in-up" data-aos-delay="500" data-aos-once=true data-aos-offset="-1000">
      <h1 class="skillCardTitle">{{ $t("skills.office.title") }}</h1>
      <br />
      <p class="skillCardParagraph">
        {{ $t("skills.office.text") }}
      </p>
    </div>

    <div class="fourLogosCard" data-aos="zoom-in-left" data-aos-delay="500" data-aos-once=true data-aos-offset="-1000">
      <img
        src="../../assets/word_logo.svg"
        alt="Word logo"
        height="75px"
        width="75px"
        class="skillLogo svg-shadow"
      />
      <img
        src="../../assets/excel_logo.svg"
        alt="Excel logo"
        height="75px"
        width="75px"
        class="skillLogo svg-shadow"
      />
      <img
        src="../../assets/powerpoint_logo.svg"
        alt="Powerpoint logo"
        height="75px"
        width="75px"
        class="skillLogo svg-shadow"
      />
      <img
        src="../../assets/visio_logo.svg"
        alt="Visio logo"
        height="75px"
        width="75px"
        class="skillLogo svg-shadow"
      />
    </div>
  </div>
</template>