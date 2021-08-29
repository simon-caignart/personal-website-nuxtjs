<template>
  <transition appear name="fadelater">
    <div name="Student Association Website">
      <h1 class="bigExpCardTitle">
        {{ $t("experiences.schoolProjects.studentAssociationWebsite.title") }}
      </h1>
      <div name="dates" class="bigExpCardDates">
        {{ $t("experiences.schoolProjects.studentAssociationWebsite.dates") }}
      </div>

      <div class="bigExpCardFlexBox">
        <section class="bigExpCardTextSection">
          <p class="bigExpCardParagraph">
            {{ $t("experiences.schoolProjects.studentAssociationWebsite.detailedText_before") }}<br><br>
            {{ $t("experiences.schoolProjects.studentAssociationWebsite.detailedText_after") }}
          </p>
          <h2 class="bigExpCardSubTitle">
            {{ $t("experiences.techUsed") }}
          </h2>
          <div class="grid grid-cols-2 xl:w-72 mt-5">
            <el-tooltip content="Laravel" placement="top">
              <img
                src="../../assets/laravel_logo.svg"
                alt="Laravel logo"
                height="75px"
                width="75px"
                class="self-center place-self-center svg-shadow-little p-2"
              />
            </el-tooltip>
            <el-tooltip content="MySQL" placement="top">
              <img
                src="../../assets/mysql_logo.svg"
                alt="MySQL logo"
                width="110px"
                class="self-center place-self-center svg-shadow-little"
              />
            </el-tooltip>
          </div>
        </section>

        <section class="bigExpCardLogoSection">
          <el-tooltip
            class="item"
            effect="dark"
            placement="bottom"
          >
                  <p slot="content">{{ $t("experiences.schoolProjects.studentAssociationWebsite.clickMe") }}</p>
            <el-image
              :src="previewImage"
              :preview-src-list="otherImages"
              z-index=3000
              fit="scale-down"
              class="w-4/6 mt-4 max-w-xs mx-auto xl:max-w-none xl:w-full xl:transform xl:-translate-y-16 hover:scale-105 transition duration-500"
            >
            </el-image
          ></el-tooltip>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      previewImage: require("../../assets/cesi-bde_logo.png"),
      otherImages: [
        require("../../assets/student-website-home.png"),
        require("../../assets/student-website-products.png"),
        require("../../assets/student-website-product-page.png"),
        require("../../assets/student-website-register.png"),
        require("../../assets/student-website-connect.png"),
        require("../../assets/student-website-admin.png"),
      ],
    };
  },
};
</script>
