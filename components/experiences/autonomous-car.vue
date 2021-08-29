<template>
  <transition appear name="fadelater">
    <div name="Student Association Website">
      <h1 class="bigExpCardTitle">
        {{ $t("experiences.schoolProjects.autonomousCar.title") }}
      </h1>
      <div name="dates" class="bigExpCardDates">
        {{ $t("experiences.schoolProjects.autonomousCar.dates") }}
      </div>

      <div class="bigExpCardFlexBox">
        <section class="bigExpCardTextSection">
          <p class="bigExpCardParagraph">
            {{ $t("experiences.schoolProjects.autonomousCar.detailedText1")
            }}<br />{{
              $t("experiences.schoolProjects.autonomousCar.detailedText2")
            }}<a
              class="underline"
              target="_blank"
              href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"
              >{{ $t("experiences.schoolProjects.autonomousCar.dijkstra") }}</a
            >{{ $t("experiences.schoolProjects.autonomousCar.detailedText3") }}
          </p>
          <h2 class="bigExpCardSubTitle">
            {{ $t("experiences.techUsed") }}
          </h2>
          <div class="grid grid-cols-2 gap-3 xl:w-72 mt-5">
            <el-tooltip content="Arduino" placement="top">
              <img
                src="../../assets/arduino_logo_2.svg"
                alt="Arduino logo"
                height="70px"
                width="70px"
                class="self-center place-self-center svg-shadow-little"
              />
            </el-tooltip>
            <el-tooltip content="Java" placement="top">
              <img
                src="../../assets/java_logo.svg"
                alt="Arduino logo"
                height="50px"
                width="50px"
                class="self-center place-self-center svg-shadow-little"
              />
            </el-tooltip>
          </div>
        </section>
        <iframe
          height="300"
          src="https://www.youtube.com/embed/1cSbPpQQ--Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="bigExpIntegration"
        ></iframe>
      </div>
    </div>
  </transition>
</template>
