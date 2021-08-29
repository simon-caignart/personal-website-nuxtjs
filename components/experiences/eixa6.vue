<template>
  <transition appear name="fadelater">
    <div name="Eixa6">
      <h1 class="bigExpCardTitle">
        {{ $t("experiences.internships.eixa6.title") }}
      </h1>
      <div name="dates" class="bigExpCardDates">
        {{ $t("experiences.internships.eixa6.detailedDates") }}
      </div>

      <div class="bigExpCardFlexBox">
        <section class="bigExpCardTextSection">
          <p class="bigExpCardParagraph">
            {{ $t("experiences.internships.eixa6.detailedText") }}
          </p>
          <h2 class="bigExpCardSubTitle">
            {{ $t("experiences.techUsed") }}
          </h2>
          <div class="grid grid-cols-3 gap-4 xl:w-72 mt-5">
            <el-tooltip content="Docker" placement="top">
              <img
                src="../../assets/docker_logo.svg"
                alt="Docker logo"
                height="75px"
                width="75px"
                class="self-center place-self-center svg-shadow-little"
              />
            </el-tooltip>
            <el-tooltip content="Kubernetes" placement="top">
              <img
                src="../../assets/kubernetes_logo.svg"
                alt="Kubernetes logo"
                height="75px"
                width="75px"
                class="self-center place-self-center svg-shadow-little"
              />
            </el-tooltip>
            <el-tooltip content="Angular" placement="top">
              <img
                src="../../assets/angular_logo.svg"
                alt="Angular logo"
                height="75px"
                width="75px"
                class="self-center place-self-center svg-shadow-little"
              />
            </el-tooltip>
            <el-tooltip content="Jenkins" placement="bottom">
              <img
                src="../../assets/jenkins_logo.svg"
                alt="Jenkins logo"
                height="55px"
                width="55px"
                class="self-center place-self-center svg-shadow-little"
              />
            </el-tooltip>
            <el-tooltip content="MongoDB" placement="bottom">
              <img
                src="../../assets/mongo_logo_2.png"
                alt="MongoDB logo"
                height="55px"
                width="55px"
                class="self-center place-self-center svg-shadow-little"
              />
            </el-tooltip>
            <el-tooltip content="JavaFx" placement="bottom">
              <img
                src="../../assets/javafx_logo.svg"
                alt="JavaFX logo"
                height="75px"
                width="75px"
                class="self-center place-self-center svg-shadow-little"
              />
            </el-tooltip>
          </div>
        </section>
        <section class="bigExpCardLogoSection">
          <img
            src="../../assets/eixa6_logo.svg"
            alt="Eixa6 logo"
            class="bigExpCardLogo svg-shadow-little"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d44490.16790081784!2d-1.108576!3d45.818558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x73a17e0e649f37de!2sEixa6%20Informatique!5e0!3m2!1sen!2sfr!4v1628073459844!5m2!1sen!2sfr"
            width="400"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            class="bigExpCardMap"
          ></iframe>
        </section>
      </div>
    </div>
  </transition>
</template>
