<template>
  <transition appear name="fadelater">
    <div name="cgr-cinemas">
      <h1 class="bigExpCardTitle">
        {{ $t("experiences.internships.cgr.title") }}
      </h1>
      <div name="dates" class="bigExpCardDates">
        {{ $t("experiences.internships.cgr.detailedDates") }}
      </div>

      <div class="bigExpCardFlexBox">
        <section class="bigExpCardTextSection">
          <p class="bigExpCardParagraph">
            {{ $t("experiences.internships.cgr.detailedText") }}
          </p>
        </section>

        <section class="bigExpCardLogoSection">
          <img
            src="../../assets/CGR_logo.png"
            alt="CGR CINEMAS logo"
            class="bigExpCardLogo"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11053.843039712823!2d-1.108092!3d46.161483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x52d203b8c9ea2e16!2sCGR%20Cin%C3%A9mas%20Si%C3%A8ge%20Social!5e0!3m2!1sen!2sfr!4v1621967216627!5m2!1sen!2sfr"
            height="300"
            allowfullscreen=""
            class="bigExpCardMap"
          ></iframe>
        </section>
      </div>
    </div>
  </transition>
</template>
