<template>
  <el-collapse v-model="activeNames">
    <!-- PROGRAMMING LANGUAGES -->
    <el-collapse-item title="Programming Languages" name="1">
      <!-- C# -->
      <div class="devModalRow">
        <img
          src="../../assets/c-sharp_logo.svg"
          alt="C# logo"
          class="object-contain w-12 svg-shadow-little"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.c#") }}
        </p>
      </div>
      <!-- Java -->
      <div class="devModalRow">
        <img
          src="../../assets/java_logo.svg"
          alt="Java logo"
          class="w-12 p-1 svg-shadow-little"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.java") }}
        </p>
      </div>
      <!-- Language C -->
      <div class="devModalRow">
        <img
          src="../../assets/c_logo.svg"
          alt="C logo"
          class="w-12 p-1 svg-shadow-little"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.c") }}
        </p>
      </div>
      <!-- Python -->
      <div class="devModalRow">
        <img
          src="../../assets/python_logo.svg"
          alt="Python logo"
          class="w-12 p-1 svg-shadow-little"
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
          class="w-12 p-1 svg-shadow-little"
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
          class="w-12 p-1 svg-shadow-little"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.swift") }}
        </p>
      </div>
    </el-collapse-item>
    <!-- UI Frameworks -->
    <el-collapse-item title="UI Frameworks" name="2">
      <!-- JavaFx -->
      <div class="devModalRow">
        <img
          src="../../assets/javafx_logo.svg"
          alt="VS Code logo"
          class="w-12 svg-shadow-little"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.javafx") }}
        </p>
      </div>
      <!-- WPF -->
      <div class="devModalRow">
        <img
          src="../../assets/wpf_logo.png"
          alt="WPF logo"
          class="w-12 p-1 svg-shadow-little"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.wpf") }}
        </p>
      </div>
    </el-collapse-item>
    <!-- WEB DEVELOPMENT -->
    <el-collapse-item title="Web Development" name="3">
      <!-- HTML -->
      <div class="devModalRow">
        <img
          src="../../assets/html_logo.svg"
          alt="HTML logo"
          class="w-12 svg-shadow-little"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.html") }}
        </p>
      </div>
      <!-- CSS -->
      <div class="devModalRow">
        <img
          src="../../assets/css_logo.svg"
          alt="CSS logo"
          class="w-12 p-1.5 svg-shadow-little"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.css") }}
        </p>
      </div>
      <!-- Javascript -->
      <div class="devModalRow">
        <img
          src="../../assets/javascript_logo.svg"
          alt="JS logo"
          class="w-12 p-1 svg-shadow-little"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.js") }}
        </p>
      </div>
      <!-- Vue.Js -->
      <div class="devModalRow">
        <img
          src="../../assets/vue_logo.svg"
          alt="JS logo"
          class="w-12 p-1 svg-shadow-little"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.vuejs") }}
        </p>
      </div>
      <!-- Angular -->
      <div class="devModalRow">
        <img
          src="../../assets/angular_logo.svg"
          alt="JS logo"
          class="w-12 svg-shadow-little"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.angular") }}
        </p>
      </div>
      <!-- Laravel -->
      <div class="devModalRow">
        <img
          src="../../assets/laravel_logo.svg"
          alt="JS logo"
          class="w-12 p-1 svg-shadow-little"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.laravel") }}
        </p>
      </div>
      <!-- Tailwind CSS -->
      <div class="devModalRow">
        <img
          src="../../assets/tailwindcss_logo.svg"
          alt="JS logo"
          class="w-12 p-1 svg-shadow-little"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.tailwind") }}
        </p>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Development tools" name="4">
      <!-- VS CODE -->
      <div class="devModalRow">
        <img
          src="../../assets/vs_code_logo.png"
          alt="VS Code logo"
          class="w-12 svg-shadow-little"
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
          class="w-12 svg-shadow-little"
        />
        <p class="devModalRowText">
          {{ $t("skills.modal.vs") }}
        </p>
      </div>
      <!-- Intellij -->
      <div class="devModalRow">
        <img
          src="../../assets/intellij_logo.png"
          alt="VS Studio 2019 logo"
          class="w-12 svg-shadow-little"
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
  data() {
    return {
      activeNames: ["1"],
    };
  },
};
</script>
