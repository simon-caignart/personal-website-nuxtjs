<template>
  <el-collapse v-model="activeNames">
    <!-- LANGUAGES -->
    <el-collapse-item name="1">
      <template slot="title">
        {{ $t("skills.modal.languages") }}
      </template>
      <!-- Javascript -->
      <div class="devModalRow">
        <img
          src="../../assets/javascript_logo.svg"
          alt="JavaScript logo"
          class="w-12 p-1"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.js") }}
        </p>
      </div>
      <!-- TypeScript -->
      <div class="devModalRow">
        <img
          src="../../assets/typescript_logo.svg"
          alt="TypeScript logo"
          class="w-12 p-1"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.ts") }}
        </p>
      </div>
      <!-- Java -->
      <div class="devModalRow">
        <img
          src="../../assets/java_logo.svg"
          alt="Java logo"
          class="w-12 p-1"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.java") }}
        </p>
      </div>
      <!-- C# -->
      <div class="devModalRow">
        <img
          src="../../assets/c-sharp_logo.svg"
          alt="C# logo"
          class="object-contain w-12"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.c#") }}
        </p>
      </div>
      <!-- GraphQL -->
      <div class="devModalRow">
        <img
          src="../../assets/graphql_logo.svg"
          alt="GraphQL logo"
          class="w-12 p-1"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.graphql") }}
        </p>
      </div>
      <!-- Python -->
      <div class="devModalRow">
        <img
          src="../../assets/python_logo.svg"
          alt="Python logo"
          class="w-12 p-1"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.python") }}
        </p>
      </div>
      <!-- Arduino -->
      <div class="devModalRow">
        <img
          src="../../assets/arduino_logo_2.svg"
          alt="Arduino logo"
          class="w-12 p-1"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.arduino") }}
        </p>
      </div>
      <!-- Swift -->
      <div class="devModalRow">
        <img
          src="../../assets/swift_logo.svg"
          alt="Swift logo"
          class="w-12 p-1"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.swift") }}
        </p>
      </div>
      <!-- Language C -->
      <div class="devModalRow">
        <img src="../../assets/c_logo.svg" alt="C logo" class="w-12 p-1" />
        <p class="devModalRowText">
          {{ $t("skills.modal.c") }}
        </p>
      </div>
    </el-collapse-item>
    <!-- Frameworks and libraries -->
    <el-collapse-item title="Frameworks and libraries" name="2">
      <template slot="title">
        {{ $t("skills.modal.frameworksAndLibraries") }}
      </template>
      <!-- React -->
      <div class="devModalRow">
        <img
          src="../../assets/react_logo.svg"
          alt="React logo"
          class="w-12 p-1"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.react") }}
        </p>
      </div>
      <!-- Next.JS -->
      <div class="devModalRow">
        <img
          src="../../assets/nextjs_logo.svg"
          alt="Next.js logo"
          class="w-12 p-1"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.nextjs") }}
        </p>
      </div>
      <!-- Vue.Js -->
      <div class="devModalRow">
        <img src="../../assets/vue_logo.svg" alt="Vue logo" class="w-12 p-1" />
        <p class="devModalRowText">
          {{ $t("skills.modal.vuejs") }}
        </p>
      </div>
      <!-- Nuxt.Js -->
      <div class="devModalRow">
        <img
          src="../../assets/nuxt_logo.svg"
          alt="Nuxt logo"
          class="w-12 p-1"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.nuxtjs") }}
        </p>
      </div>
      <!-- Angular -->
      <div class="devModalRow">
        <img
          src="../../assets/angular_logo.svg"
          alt="Angular logo"
          class="w-12"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.angular") }}
        </p>
      </div>
      <!-- Laravel -->
      <div class="devModalRow">
        <img
          src="../../assets/laravel_logo.svg"
          alt="Laravel logo"
          class="w-12 p-1"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.laravel") }}
        </p>
      </div>
      <!-- Tailwind CSS -->
      <div class="devModalRow">
        <img
          src="../../assets/tailwindcss_logo.svg"
          alt="TailwindCSS logo"
          class="w-12 p-1"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.tailwind") }}
        </p>
      </div>
      <!-- Apollo -->
      <div class="devModalRow">
        <img
          src="../../assets/apollo_logo.svg"
          alt="Apollo logo"
          class="w-12 p-1"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.apollo") }}
        </p>
      </div>
    </el-collapse-item>
    <!-- ORMS -->
    <el-collapse-item name="3">
      <template slot="title">
        {{ $t("skills.modal.orms") }}
      </template>
      <!-- Prisma -->
      <div class="devModalRow">
        <img
          src="../../assets/prisma_logo2.svg"
          alt="Prisma logo"
          class="w-12 p-1.5"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.prisma") }}
        </p>
      </div>
      <!-- Mongoose -->
      <div class="devModalRow">
        <img
          src="../../assets/mongoose_logo.svg"
          alt="Mongoose logo"
          class="w-12 p-1"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.mongoose") }}
        </p>
      </div>
    </el-collapse-item>
    <!-- UI Frameworks -->
    <el-collapse-item name="4">
      <template slot="title">
        {{ $t("skills.modal.UIFrameworks") }}
      </template>
      <!-- JavaFx -->
      <div class="devModalRow">
        <img
          src="../../assets/javafx_logo.svg"
          alt="JavaFx logo"
          class="w-12"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.javafx") }}
        </p>
      </div>
      <!-- WPF -->
      <div class="devModalRow">
        <img src="../../assets/wpf_logo.png" alt="WPF logo" class="w-12 p-1" />
        <p class="devModalRowText">
          {{ $t("skills.modal.wpf") }}
        </p>
      </div>
    </el-collapse-item>
    <!-- CI/CD -->
    <el-collapse-item title="CI/CD" name="5">
      <template slot="title">
        {{ $t("skills.modal.CI/CD") }}
      </template>
      <!-- GitHub Actions -->
      <div class="devModalRow">
        <img
          src="../../assets/githubactions_logo.svg"
          alt="GitHub Actions logo"
          class="w-12 p-1.5"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.githubActions") }}
        </p>
      </div>
      <!-- Google Cloud Build -->
      <div class="devModalRow">
        <img
          src="../../assets/google_cloud_build_logo.svg"
          alt="Google Cloud Build logo"
          class="w-12 p-1.5"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.googleCloudBuild") }}
        </p>
      </div>
      <!-- ArgoCD -->
      <div class="devModalRow">
        <img
          src="../../assets/argocd_logo.svg"
          alt="Argo CD logo"
          class="w-12 p-1.5"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.argocd") }}
        </p>
      </div>
      <!-- Azure Pipeline -->
      <div class="devModalRow">
        <img
          src="../../assets/azure_logo.svg"
          alt="Azure logo"
          class="w-12 p-1.5"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.azure") }}
        </p>
      </div>
      <!-- Jenkins -->
      <div class="devModalRow">
        <img
          src="../../assets/jenkins_logo.svg"
          alt="Jenkins logo"
          class="w-12 p-1.5"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.jenkins") }}
        </p>
      </div>
      <!-- TeamCity -->
      <div class="devModalRow">
        <img
          src="../../assets/teamcity_logo.svg"
          alt="TeamCity logo"
          class="w-12 p-0.5"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.teamcity") }}
        </p>
      </div>
    </el-collapse-item>
    <!-- CONTAINERIZATION -->
    <el-collapse-item title="Containerization" name="6">
      <template slot="title">
        {{ $t("skills.modal.containerization") }}
      </template>
      <!-- Docker -->
      <div class="devModalRow">
        <img
          src="../../assets/docker_logo.svg"
          alt="Docker logo"
          class="w-12"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.docker") }}
        </p>
      </div>
      <!-- Docker Compose -->
      <div class="devModalRow">
        <img
          src="../../assets/dockerCompose_logo.png"
          alt="Docker Compose logo"
          class="w-12"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.dockerCompose") }}
        </p>
      </div>
      <!-- Kubernetes -->
      <div class="devModalRow">
        <img
          src="../../assets/kubernetes_logo.svg"
          alt="Kubernetes logo"
          class="w-12"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.kubernetes") }}
        </p>
      </div>
    </el-collapse-item>
    <!-- Cloud platforms -->
    <el-collapse-item name="7">
      <template slot="title">
        {{ $t("skills.modal.cloudPlatforms") }}
      </template>
      <!-- Google Cloud Platform -->
      <div class="devModalRow">
        <img
          src="../../assets/googlecloud_logo2.svg"
          alt="Google Cloud logo"
          class="w-12 p-1"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.googleCloudPlatform") }}
        </p>
      </div>
    </el-collapse-item>
    <!-- DEVELOPMENT TOOLS -->
    <el-collapse-item title="Development tools" name="8">
      <template slot="title">
        {{ $t("skills.modal.developmentTools") }}
      </template>
      <!-- VS CODE -->
      <div class="devModalRow">
        <img
          src="../../assets/vs_code_logo.png"
          alt="VS Code logo"
          class="w-12"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.vscode") }}
        </p>
      </div>
      <!-- VS Studio 2019 -->
      <div class="devModalRow">
        <img
          src="../../assets/vs_logo.png"
          alt="VS Studio 2019 logo"
          class="w-12"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.vs") }}
        </p>
      </div>
      <!-- Intellij -->
      <div class="devModalRow">
        <img
          src="../../assets/intellij_logo.png"
          alt="Intellij logo"
          class="w-12"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.intellij") }}
        </p>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  props: {
    activeNames: {
      type: Number,
      default: () => 1,
    },
  },
};
</script>
