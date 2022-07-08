<template>
  <transition appear name="fadelater">
    <div name="Mankyan">
      <h1 class="bigExpCardTitle">
        {{ $t("experiences.personalProjects.mankyan.title") }}
      </h1>
      <div name="dates" class="bigExpCardDates">
        {{ $t("experiences.personalProjects.mankyan.dates") }}
      </div>

      <div class="bigExpCardFlexBox">
        <section class="bigExpCardTextSection">
          <p class="bigExpCardParagraph">
            {{ $t("experiences.personalProjects.mankyan.detailedText1")
            }}<br /><br />
            {{ $t("experiences.personalProjects.mankyan.detailedText2") }}
            <br /><br />
            <span class="font-medium">
              {{
                $t("experiences.personalProjects.mankyan.detailedText3")
              }}</span
            >
          </p>
          <h2 class="bigExpCardSubTitle">
            {{ $t("experiences.technicalDetails") }}
          </h2>
          <p class="bigExpCardParagraph">
            {{ $t("experiences.personalProjects.mankyan.technicalDetails1")
            }}<br /><br />
            {{ $t("experiences.personalProjects.mankyan.technicalDetails2") }}
            <br /><br />
            {{ $t("experiences.personalProjects.mankyan.technicalDetails3") }}
            <br /><br />
            {{ $t("experiences.personalProjects.mankyan.technicalDetails4") }}
            <br /><br />
            {{ $t("experiences.personalProjects.mankyan.technicalDetails5") }}
          </p>
          <h2 class="bigExpCardSubTitle">
            {{ $t("experiences.techUsed") }}
          </h2>
          <div class="grid grid-cols-5 gap-4 xl:w-104 mt-5">
            <el-tooltip content="TypeScript" placement="top">
              <img
                src="../../assets/typescript_logo.svg"
                alt="TypeScript logo"
                height="75px"
                width="75px"
                class="self-center place-self-center svg-shadow-little p-1"
              />
            </el-tooltip>
            <el-tooltip content="GraphQL" placement="top">
              <img
                src="../../assets/graphql_logo.svg"
                alt="GraphQL logo"
                height="75px"
                width="75px"
                class="self-center place-self-center svg-shadow-little p-1"
              />
            </el-tooltip>
            <el-tooltip content="Apollo Platform" placement="top">
              <img
                src="../../assets/apollo_logo.svg"
                alt="Apollo Platform logo"
                height="75px"
                width="75px"
                class="self-center place-self-center svg-shadow-little p-1"
              />
            </el-tooltip>
            <el-tooltip content="Prisma" placement="top">
              <img
                src="../../assets/prisma_logo2.svg"
                alt="Prisma logo"
                width="70px"
                class="self-center place-self-center p-1"
              />
            </el-tooltip>
            <el-tooltip content="Next.JS" placement="top">
              <img
                src="../../assets/nextjs_logo.svg"
                alt="Next.JS logo"
                height="75px"
                width="75px"
                class="self-center place-self-center svg-shadow-little p-1"
              />
            </el-tooltip>
            <el-tooltip content="Tailwind CSS" placement="bottom">
              <img
                src="../../assets/tailwindcss_logo.svg"
                alt="Tailwind CSS logo"
                height="75px"
                width="75px"
                class="self-center place-self-center svg-shadow-little p-1"
              />
            </el-tooltip>
            <el-tooltip content="Argo CD" placement="bottom">
              <img
                src="../../assets/argocd_logo.svg"
                alt="Argo CD logo"
                width="75px"
                class="self-center place-self-center svg-shadow-little p-1"
              />
            </el-tooltip>
            <el-tooltip content="Kubernetes" placement="bottom">
              <img
                src="../../assets/kubernetes_logo.svg"
                alt="Kubernetes logo"
                width="75px"
                class="self-center place-self-center svg-shadow-little"
              />
            </el-tooltip>
            <el-tooltip
              content="Google Cloud Platform"
              placement="bottom"
              class="col-span-2"
            >
              <img
                src="../../assets/googlecloud_logo.svg"
                alt="Tailwind CSS logo"
                width="150px"
                class="self-center place-self-center svg-shadow-little"
              />
            </el-tooltip>
          </div>
        </section>

        <section
          class="bigExpCardLogoSection"
          style="place-self: start !important; align-items: center"
        >
          <el-tooltip effect="dark" placement="bottom">
            <p slot="content">
              {{ $t("experiences.personalProjects.mankyan.clickMe") }}
            </p>
            <el-image
              :src="previewImage"
              :preview-src-list="otherImages"
              z-index="3000"
              class="w-2/6 mt-4 max-w-xs xl:w-1/2 transform hover:scale-105 transition duration-500"
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
      previewImage: require("../../assets/mankyan_logo.png"),
      otherImages: [
        require("../../assets/mankyan/backoffice_list_mangas.png"),
        require("../../assets/mankyan/backoffice_edit_manga.png"),
        require("../../assets/mankyan/backoffice_edit_manga_thumbnails.png"),
        require("../../assets/mankyan/backoffice_list_manga_volumes.png"),
        require("../../assets/mankyan/backoffice_edit_volume.png"),
        require("../../assets/mankyan/backoffice_list_manga_chapters.png"),
        require("../../assets/mankyan/backoffice_edit_chapter.png"),
        require("../../assets/mankyan/backoffice_list_authors.png"),
        require("../../assets/mankyan/backoffice_edit_author.png"),
        require("../../assets/mankyan/backoffice_list_publishers.png"),
        require("../../assets/mankyan/backoffice_edit_publisher.png"),
        require("../../assets/mankyan/backoffice_list_categories.png"),
        require("../../assets/mankyan/backoffice_list_plans.png"),
        require("../../assets/mankyan/backoffice_list_countries.png"),
        require("../../assets/mankyan/backoffice_list_languages.png"),
        require("../../assets/mankyan/backoffice_search.png"),
        require("../../assets/mankyan/toasts.png"),
        require("../../assets/mankyan/backoffice_themeChanger.png"),
        require("../../assets/mankyan/backoffice_dark_theme.png"),
        require("../../assets/mankyan/webapp_login_register_mobile_screens.png"),
        require("../../assets/mankyan/webapp_home.png"),
        require("../../assets/mankyan/webapp_manga_details_page.png"),
        require("../../assets/mankyan/reader_1.png"),
        require("../../assets/mankyan/reader_2.png"),
        require("../../assets/mankyan/reader_3.png"),
        require("../../assets/mankyan/reader_4.png"),
        require("../../assets/mankyan/reader_5.png"),
        require("../../assets/mankyan/services_diagram.png"),
        require("../../assets/mankyan/cicd_workflow.png"),
        require("../../assets/mankyan/argocd_login.png"),
        require("../../assets/mankyan/argocd_service.png"),
      ],
    };
  },
};
</script>

<style>
.el-image__preview {
  @apply max-w-xxs mx-auto xl:max-w-none;
}
</style>
