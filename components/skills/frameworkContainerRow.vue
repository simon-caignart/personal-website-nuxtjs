<template>
  <div class="skillsRow">
    <el-dialog :visible.sync="dialogDevVisible">
      <dev-modal activeNames=2 ></dev-modal>
    </el-dialog>

      <div
        class="skillCard"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-offset="-1000"
      >
        <h1 class="skillCardTitle">{{ $t("skills.frameworks.title") }}</h1>
        <br>
        <p class="skillCardParagraph">
          {{ $t("skills.frameworks.text1") }}
          <br><br>
          {{ $t("skills.frameworks.text2") }}
        </p>
      </div>

      <div class="fourLogosCard flex-none md:mr-5" data-aos="zoom-in-left" data-aos-delay="500" data-aos-once=true data-aos-offset="-1000">
        <el-tooltip content="React" placement="bottom">
          <img
            src="../../assets/react_logo.svg"
            alt="React logo"
            height="75px"
            width="75px"
            class="skillLogo"
          />
        </el-tooltip>
        <el-tooltip content="Tailwind CSS" placement="bottom">
          <img
            src="../../assets/tailwindcss_logo.svg"
            alt="TailwindCSS logo"
            height="75px"
            width="75px"
            class="skillLogo"
          />
        </el-tooltip>
        <el-tooltip content="Apollo Platform" placement="bottom">
        <img
          src="../../assets/apollo_logo.svg"
          alt="Apollo platform logo"
          height="70px"
          width="70px"
          class="skillLogo"
        />
      </el-tooltip>
      <el-tooltip placement="bottom">
        <p slot="content">{{ $t("skills.languages.clickHere") }}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          @click="dialogDevVisible = true"
          class="cursor-pointer skillLogo w-12 pt-2 fill-current h-16 text-gray-300 dark:text-gray-500"
          xml:space="preserve"
          viewBox="0 170.67 426.67 85.33"
        >
          <g>
            <g>
              <circle cx="42.667" cy="213.333" r="42.667" />
            </g>
          </g>
          <g>
            <g>
              <circle cx="213.333" cy="213.333" r="42.667" />
            </g>
          </g>
          <g>
            <g>
              <circle cx="384" cy="213.333" r="42.667" />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g></svg
      ></el-tooltip>
    </div>
 
      <div
        class="skillCard md:mr-4"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-offset="-1000"
      >
        <h1 class="skillCardTitle">{{ $t("skills.containerization.title") }}</h1>
        <br>
        <p class="skillCardParagraph">
          {{ $t("skills.containerization.text1") }}<br><br>
          {{ $t("skills.containerization.text2") }}
        </p>
      </div>
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
          height="85px"
          width="85px"
          class="skillLogo"
        />
        <el-tooltip content="Kubernetes" placement="bottom">
          <img
            src="../../assets/kubernetes_logo.svg"
            alt="Kubernetes logo"
            height="80px"
            width="80px"
            class="skillLogo"
          />
        </el-tooltip>
      </div>

  </div>
</template>

<script>
import devModal from "./devModal.vue";
export default {
  components: { devModal },
  data() {
    return {
      dialogDevVisible: false,
    };
  },
};
</script>
