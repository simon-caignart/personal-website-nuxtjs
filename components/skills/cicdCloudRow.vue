<template>
  <div class="skillsRow mb-4">
    <el-dialog :visible.sync="dialogDevVisible">
      <dev-modal activeNames=5 ></dev-modal>
    </el-dialog>

    <div class="skillCard" data-aos="zoom-in-right" data-aos-delay="500" data-aos-once=true data-aos-offset="-1000">
      <h1 class="skillCardTitle">{{ $t("skills.ci/cd.title") }}</h1>
      <br>
      <p class="skillCardParagraph">
        {{ $t("skills.ci/cd.text") }}
      </p>
    </div>

    <div class="fourLogosCard" data-aos="zoom-in-up" data-aos-delay="500" data-aos-once=true data-aos-offset="-1000">
      <el-tooltip content="GitHub Actions" placement="bottom">
        <img
          src="../../assets/githubactions_logo.svg"
          alt="GitHub Actions logo"
          height="75px"
          width="75px"
          class="skillLogo"
        />
      </el-tooltip>
      <el-tooltip content="Argo CD" placement="bottom">
        <img
          src="../../assets/argocd_logo.svg"
          alt="Argo CD logo"
          height="70px"
          width="70px"
          class="skillLogo"
        />
      </el-tooltip>
      <el-tooltip content="Google Cloud Build" placement="bottom">
        <img
          src="../../assets/google_cloud_build_logo.svg"
          alt="Google Cloud Build logo"
          height="80px"
          width="80px"
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

    <div class="skillCard md:ml-4" data-aos="zoom-in-up" data-aos-delay="500" data-aos-once=true data-aos-offset="-1000">
      <h1 class="skillCardTitle">{{ $t("skills.cloud.title") }}</h1>
      <br>
      <p class="skillCardParagraph">
        {{ $t("skills.cloud.text") }}
      </p>
    </div>

    <div class="oneLogoCard md:ml-4" data-aos="zoom-in-left" data-aos-delay="500" data-aos-once=true data-aos-offset="-1000">
      <img
        src="../../assets/googlecloud_logo.svg"
        alt="Google Cloud Platform logo"
        class="skillLogo"
      />
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
