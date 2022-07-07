<template>
  <div
    name="experiences"
    class="bg-gradient-to-r from-blue-500 via-blue-400 to-green-300 min-h-full overflow-hidden m-auto max-w-screen-3xl"
  >
    <NavBar :nav-bar-title="title" />

    <el-dialog :visible.sync="dialogEixaVisible">
      <eixa6 />
    </el-dialog>

    <el-dialog :visible.sync="dialogCgrVisible">
      <CGRCINEMAS />
    </el-dialog>

    <el-dialog :visible.sync="dialogStudentAssociationVisible">
      <StudentAssociationWebsite />
    </el-dialog>

    <el-dialog :visible.sync="dialogAutonomousCarVisible">
      <AutonomousCar />
    </el-dialog>

    <el-dialog :visible.sync="dialogMankyanVisible">
      <Mankyan />
    </el-dialog>

    <!-- Formations and Interships section -->
    <section
      name="Formations and Interships section"
      class="flex flex-col m-auto mt-16 xl:flex-row"
    >
      <!-- Formations -->
      <div
        class="w-full xl:w-1/2 xl:pb-10"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-offset="100"
      >
        <h1 class="expSectionTitle">
          {{ $t("experiences.formations.title") }}
        </h1>

        <!-- CESI -->
        <div class="expCard">
          <h2 class="expCardTitle">
            {{ $t("experiences.formations.cesi.title") }}
          </h2>
          <h3 class="expCardDates">
            {{ $t("experiences.formations.cesi.dates") }}
          </h3>
          <div class="expCardInlineRow">
            <p class="expCardParagraph">
              {{ $t("experiences.formations.cesi.text_before") }} <br />
              {{ $t("experiences.formations.cesi.text_after") }}
            </p>
            <span class="expCardImage">
              <img
                class="max-h-24 mt-3 xl:mt-0 transition duration-500 transform hover:scale-110"
                src="../assets/cesi_logo.png"
                alt="CESI's logo"
              />
            </span>
          </div>
        </div>

        <!-- Up Arrow -->
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="transform mt-2 mb-2 m-auto rotate-90 h-6 w-6 xl:h-9 xl:w-9 fill-current text-white dark:text-gray-800"
            viewBox="0 0 492 492"
          >
            <path
              d="M464.344 207.418l.768.168H135.888l103.496-103.724c5.068-5.064 7.848-11.924 7.848-19.124 0-7.2-2.78-14.012-7.848-19.088L223.28 49.538c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844L7.844 226.914C2.76 231.998-.02 238.77 0 245.974c-.02 7.244 2.76 14.02 7.844 19.096l177.412 177.412c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652L134.72 284.406h329.992c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z"
            />
          </svg>
        </div>

        <!-- Lycée -->
        <div class="expCard">
          <h2 class="expCardTitle">
            {{ $t("experiences.formations.merleau.title") }}
          </h2>
          <h3 class="expCardDates">
            {{ $t("experiences.formations.merleau.dates") }}
          </h3>
          <div class="expCardInlineRow">
            <p class="expCardParagraph pt-4">
              {{ $t("experiences.formations.merleau.text") }}
            </p>
            <span
              class="w-1/3 sm:w-4/12 p-0 place-self-center inline-flex justify-center"
            >
              <img
                class="max-h-24 mt-3 xl:mt-0 transition duration-500 transform hover:scale-110"
                src="../assets/merleau_logo.svg"
                alt="Merleau Ponty's logo"
              />
            </span>
          </div>
        </div>
      </div>

      <!-- Line separator -->
      <SectionSeparator
        :width="sectionWidth"
        class="mt-10"
        data-aos="zoom-in"
        data-aos-delay="500"
      />

      <!-- Internships -->
      <div
        class="w-full xl:w-1/2 xl:pb-10"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-offset="100"
      >
        <h1 class="expSectionTitle">
          {{ $t("experiences.internships.title") }}
        </h1>

        <!-- Eixa6 Informatique -->
        <div class="expCard">
          <h2 class="expCardTitle">
            {{ $t("experiences.internships.eixa6.title") }}
          </h2>
          <h3 class="expCardDates">
            {{ $t("experiences.internships.eixa6.dates") }}
          </h3>
          <div class="expCardInlineRow">
            <p class="expCardParagraph">
              {{ $t("experiences.internships.eixa6.text") }}
            </p>
            <span class="expCardImage">
              <img
                class="max-h-24 transition duration-500 transform hover:scale-110"
                src="../assets/eixa6_logo.svg"
                alt="Eixa6's logo"
              />
            </span>
          </div>
          <a class="expCardLink" @click="dialogEixaVisible = true">{{
            $t("experiences.moreInfo")
          }}</a>
        </div>

        <!-- Up Arrow -->
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="transform mt-2 mb-2 m-auto rotate-90 h-6 w-6 xl:h-9 xl:w-9 fill-current text-white dark:text-gray-800"
            viewBox="0 0 492 492"
          >
            <path
              d="M464.344 207.418l.768.168H135.888l103.496-103.724c5.068-5.064 7.848-11.924 7.848-19.124 0-7.2-2.78-14.012-7.848-19.088L223.28 49.538c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844L7.844 226.914C2.76 231.998-.02 238.77 0 245.974c-.02 7.244 2.76 14.02 7.844 19.096l177.412 177.412c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652L134.72 284.406h329.992c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z"
            />
          </svg>
        </div>

        <!-- CGR Cinémas -->
        <div class="expCard">
          <h2 class="expCardTitle">
            {{ $t("experiences.internships.cgr.title") }}
          </h2>
          <h3 class="expCardDates">
            {{ $t("experiences.internships.cgr.dates") }}
          </h3>
          <div class="expCardInlineRow">
            <p class="expCardParagraph">
              {{ $t("experiences.internships.cgr.text") }}
            </p>
            <span class="expCardImage">
              <img
                class="max-h-24 transition duration-500 transform hover:scale-110"
                src="../assets/CGR_logo.png"
                alt="CGR Cinémas's logo"
              />
            </span>
          </div>
          <a class="expCardLink" @click="dialogCgrVisible = true">{{
            $t("experiences.moreInfo")
          }}</a>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section
      name="Projects Section"
      class="relative flex flex-col mt-60 pb-10 bg-white dark:bg-gray-800 xl:transform xl:flex-row"
    >
      <!-- Wave Separator -->
      <svg
        name="Wave Separator"
        class="absolute -top-20 sm:-top-36 md:-top-44 xl:-top-72 fill-current text-white dark:text-gray-800 transform xl:translate-y-22 z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 396"
      >
        <path
          d="M0,96l40,16c40,16,120,48,200,37.3C320,139,400,85,480,69.3,560,53,640,75,720,106.7,800,139,880,181,960,176s160-59,240-96,160-59,200-69.3L1440,0V396H0Z"
        />
      </svg>

      <!-- School Projects -->
      <div class="w-full xl:w-1/2 z-10">
        <h1 class="expSectionTitleProjects">
          {{ $t("experiences.schoolProjects.title") }}
        </h1>

        <!-- Autonomous Car -->
        <div class="expCardProjects" data-aos="zoom-in-up">
          <h2 class="expCardTitle">
            {{ $t("experiences.schoolProjects.autonomousCar.title") }}
          </h2>
          <h3 class="expCardDates">
            {{ $t("experiences.schoolProjects.autonomousCar.dates") }}
          </h3>
          <p class="pt-4 w-full dark:text-gray-300 pb-4">
            {{ $t("experiences.schoolProjects.autonomousCar.text") }}
          </p>
          <a
            class="no-underline hover:underline cursor-pointer text-indigo-400 pt-5 xl:absolute xl:bottom-4 xl:left-4"
            @click="dialogAutonomousCarVisible = true"
            >{{ $t("experiences.moreInfo") }}</a
          >
        </div>

        <!-- Student Association WebSite -->
        <div class="expCardProjects" data-aos="zoom-in-up">
          <h2 class="expCardTitle">
            {{
              $t("experiences.schoolProjects.studentAssociationWebsite.title")
            }}
          </h2>
          <h3 class="expCardDates">
            {{
              $t("experiences.schoolProjects.studentAssociationWebsite.dates")
            }}
          </h3>
          <div class="expCardInlineRow">
            <p class="expCardParagraph">
              {{
                $t("experiences.schoolProjects.studentAssociationWebsite.text")
              }}
            </p>
            <span class="expCardImage">
              <img
                class="max-h-24 p-2 pb-0 xl:pb-0 xl:p-4 transition duration-500 transform hover:scale-110"
                src="../assets/laravel_logo.svg"
                alt="Laravel's logo"
              />
            </span>
          </div>
          <a
            class="expCardLink"
            @click="dialogStudentAssociationVisible = true"
            >{{ $t("experiences.moreInfo") }}</a
          >
        </div>
      </div>

      <!-- Personal Projects -->
      <div class="w-full mt-20 xl:mt-0 xl:w-1/2 z-10">
        <h1 class="expSectionTitleProjects">
          {{ $t("experiences.personalProjects.title") }}
        </h1>

        <!-- Mankyan -->
        <div class="expCardProjects" data-aos="zoom-in-up">
          <h2 class="expCardTitle">
            {{ $t("experiences.personalProjects.mankyan.title") }}
          </h2>
          <h3 class="expCardDates">
            {{ $t("experiences.personalProjects.mankyan.dates") }}
          </h3>
          <div class="expCardInlineRow">
            <p class="pt-4 w-full dark:text-gray-300 pb-4">
              {{ $t("experiences.personalProjects.mankyan.text") }}
            </p>
            <span class="expCardImage">
              <img
                class="inline object-fill p-3 pb-0 xl:pb-5 xl:p-0 transition duration-500 transform hover:scale-110"
                src="../assets/mankyan_logo.svg"
                alt="Mankyan Logo"
              />
            </span>
          </div>
          <a class="expCardLink" @click="dialogMankyanVisible = true">{{
            $t("experiences.moreInfo")
          }}</a>
        </div>

        <!-- Personal Website -->
        <div class="expCardProjects" data-aos="zoom-in-up">
          <h2 class="expCardTitle">
            {{ $t("experiences.personalProjects.personalWebsite.title") }}
          </h2>
          <h3 class="expCardDates">
            {{ $t("experiences.personalProjects.personalWebsite.dates") }}
          </h3>
          <div class="expCardInlineRow">
            <p class="expCardParagraph pt-4">
              {{ $t("experiences.personalProjects.personalWebsite.text") }}
            </p>
            <span class="expCardImage">
              <img
                class="inline object-fill p-2 pb-0 xl:pb-5 xl:p-3 xl:pr-0 xl:pl-5 transition duration-500 transform hover:scale-110"
                src="../assets/nuxt_logo.svg"
                alt="Nuxt.js logo"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Eixa6 from "../components/experiences/eixa6";
import CGRCINEMAS from "../components/experiences/cgr-cinemas";
import Mankyan from "../components/experiences/mankyan";
import StudentAssociationWebsite from "../components/experiences/student-association-website";
import AutonomousCar from "../components/experiences/autonomous-car.vue";
import SectionSeparator from "../components/sectionSeparator";

export default {
  components: {
    NavBar,
    CGRCINEMAS,
    Eixa6,
    AutonomousCar,
    Mankyan,
    StudentAssociationWebsite,
    SectionSeparator,
  },
  data() {
    return {
      title: this.$t("home.experiences"),
      sectionWidth: "w-2",
      dialogEixaVisible: false,
      dialogCgrVisible: false,
      dialogStudentAssociationVisible: false,
      dialogAutonomousCarVisible: false,
      dialogMankyanVisible: false,

      metaTitle: "Simon Caignart | Experiences",
      description:
        "Discover the different experiences I had until today, my internships, my studies, my projects.",
    };
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: this.metaTitle,
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      link: [
        { rel: "canonical", href: "https://simoncaignart.com/experiences" },
        ...i18nHead.link,
      ],
      meta: [
        { charset: "robots", content: "utf-8" },
        { name: "robots", content: "index,follow" },
        {
          name: "author",
          content: "Simon Caignart",
        },
        { name: "description", content: this.description },
        // OpenGraph
        { property: "og:title", content: this.metaTitle },
        { property: "og:locale", content: "en_US" },
        {
          property: "og:description",
          content: this.description,
        },
        {
          property: "og:url",
          content: "https://simoncaignart.com/experiences",
        },
        {
          property: "og:image",
          content: "https://simoncaignart.com/social_card.png",
        },
        // Twitter
        {
          property: "twitter:card",
          content: "summary",
        },
        {
          property: "twitter:site",
          content: "@SimonCaignart",
        },
        {
          property: "twitter:creator",
          content: "@SimonCaignart",
        },
        {
          property: "twitter:title",
          content: this.metaTitle,
        },
        {
          property: "twitter:description",
          content: this.description,
        },
        {
          property: "twitter:image",
          content: "https://simoncaignart.com/social_card.png",
        },
        {
          property: "twitter:image:alt",
          content: this.metaTitle,
        },
        ...i18nHead.meta,
      ],
    };
  },
};
</script>
