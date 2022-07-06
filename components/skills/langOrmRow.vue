<template>
  <div class="skillsRow">
    <el-dialog :visible.sync="dialogDevVisible">
      <dev-modal activeNames="1"></dev-modal>
    </el-dialog>

    <!-- Languages -->
    <div
      class="skillCard"
      data-aos="zoom-in-right"
      data-aos-delay="500"
      data-aos-once="true"
      data-aos-offset="-1000"
    >
      <h1 class="skillCardTitle">{{ $t("skills.languages.title") }}</h1>
      <br />
      <br />
      <p class="skillCardParagraph">
        {{ $t("skills.languages.text1") }} <br /><br />
        {{ $t("skills.languages.text2") }}
      </p>
    </div>

    <div
      class="sixLogosCard"
      data-aos="zoom-in-down"
      data-aos-delay="500"
      data-aos-once="true"
      data-aos-offset="-1000"
    >
      <el-tooltip content="TypeScript" placement="bottom">
        <img
          src="../../assets/typescript_logo.svg"
          alt="TypeScript Logo"
          height="75px"
          width="75px"
          class="skillLogo"
        />
      </el-tooltip>
      <img
        src="../../assets/java_logo.svg"
        alt="Java Logo"
        height="60px"
        width="60px"
        class="skillLogo"
      />
      <img
        src="../../assets/c-sharp_logo.svg"
        alt="C# Logo"
        height="75px"
        width="75px"
        class="skillLogo"
      />
      <el-tooltip content="Python" placement="bottom">
        <img
          src="../../assets/python_logo.svg"
          alt="Python logo"
          height="75px"
          width="75px"
          class="skillLogo"
        />
      </el-tooltip>
      <el-tooltip content="GraphQL" placement="bottom">
        <img
          src="../../assets/graphql_logo.svg"
          alt="JS logo"
          height="75px"
          width="75px"
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

    <!-- ORMs -->
    <div class="flex flex-col md:mb-0 md:w-1/3">
      <div
        class="skillCard mr-0 mb-0"
        data-aos="zoom-in-down"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-offset="-1000"
      >
        <h1 class="skillCardTitle">{{ $t("skills.orms.title") }}</h1>
        <br />
        <p class="skillCardParagraph">
          {{ $t("skills.orms.text") }}
        </p>
      </div>
      <div
        class="twoLogosRowCard"
        data-aos="zoom-in-left"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-offset="-1000"
      >
        <div class="w-full xl:w-1/2">
          <img
            src="../../assets/prisma_logo.svg"
            alt="Prisma logo"
            class="object-contain fill-current h-20 text-gray-300 dark:text-gray-500 xl:pr-12 w-full transform hover:scale-110 transition duration-500"
          />
        </div>
        <div class="w-full xl:w-1/2">
          <img
            src="../../assets/mongoose_logo.svg"
            alt="Mongoose logo"
            class="object-contain h-16 xl:pr-5 w-full transform hover:scale-110 transition duration-500"
          />
        </div>
      </div>
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
