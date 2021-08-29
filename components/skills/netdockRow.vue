<template>
  <div class="skillsRow">
    <section name="Containerization" class="skillsInlineRow flex-col-reverse">
      <div
        class="twoLogosCard ml-0"
        data-aos="zoom-in-right"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-offset="-1000"
      >
        <img
          src="../../assets/docker_logo.svg"
          alt="Docker logo"
          height="90px"
          width="90px"
          class="skillLogo svg-shadow-little "
        />
        <el-tooltip content="Kubernetes" placement="bottom">
          <img
            src="../../assets/kubernetes_logo.svg"
            alt="Kubernetes logo"
            height="80px"
            width="80px"
            class="skillLogo svg-shadow-little "
          />
        </el-tooltip>
      </div>
      <div
        class="skillCard md:ml-4"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-offset="-1000"
      >
        <h1 class="skillCardTitle">{{ $t("skills.containerization.title") }}</h1>
        <br />
        <p class="skillCardParagraph">
          {{ $t("skills.containerization.text1") }}<br><br>
          {{ $t("skills.containerization.text2") }}
        </p>
      </div>
    </section>

    <section name="Network" class="skillsInlineRow flex-col mt-4 md:mt-0">
      <div
        class="skillCard md:ml-4"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-offset="-1000"
      >
        <h1 class="skillCardTitle">{{ $t("skills.network.title") }}</h1>
        <br />
        <p class="skillCardParagraph">
          {{ $t("skills.network.text1") }}
          <br><br>
          {{ $t("skills.network.text2") }}
        </p>
      </div>

      <div
        class="twoLogosCard md:ml-4"
        data-aos="zoom-in-left"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-offset="-1000"
      >
        <el-tooltip content="pfSense" placement="top">
          <img
            src="../../assets/pfSense_logo.svg"
            alt="PfSense logo"
            height="70px"
            width="70px"
            class="skillLogo svg-shadow-little "
          />
        </el-tooltip>
        <img
          src="../../assets/active_directory_logo.png"
          alt="Active Directory logo"
          height="85px"
          width="85px"
          class="skillLogo svg-shadow-little "
        />
      </div>
    </section>
  </div>
</template>
