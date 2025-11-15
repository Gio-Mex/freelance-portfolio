<script setup>
import { ref, onMounted } from "vue";
import myPic from "/img/my-pic.webp";
import CallToAction from "~/components/CallToAction.vue";

const windowWidth = ref(0);

// Get bio content from content folder
const content = await queryCollection("home").path("/bio").first();

const rawScores = content.meta.scores;
const animatedScores = ref([]);
const flipped = ref(false);

useSeoMeta({
  title: content.title,
  description: content.description,
})

const startAnimation = () => {
  if (flipped.value) return;

  flipped.value = true;

  animatedScores.value = rawScores.map((s) => ({
    ...s,
    animated: 0,
    progress: 0,
  }));

  animatedScores.value.forEach((score, i) => {
    const duration = 2000;
    const steps = 60;
    const increment = 1 / steps;
    let current = 0;

    const animate = () => {
      current += increment;
      if (current <= 1) {
        score.progress = current;
        score.animated = Math.round(score.score * current);
        setTimeout(animate, duration / steps);
      } else {
        score.progress = 1;
        score.animated = score.score;
      }
    };

    animate();
  });
};

onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>

<template>
  <div class="bg-black pt-12 mx-auto">
    <!-- Hero section -->
    <section
      class="relative min-h-60 md:min-h-[450px] lg:h-screen xl:h-[600px] w-full overflow-hidden"
    >
      <!-- Background image -->
      <img
        :src="myPic"
        alt="Giorgio Messore picture"
        class="absolute top-5 -left-[58%] md:-left-[54%] lg:-left-[51.9%] h-full w-full object-contain opacity-0 animate-fade-slide-in"
      />

      <!-- Right side black gradient overlay -->
      <div
        class="absolute top-0 left-0 h-full w-1/3 bg-linear-to-l from-black to-transparent"
      ></div>

      <!-- Text -->
      <h1
        class="absolute w-full md:w-11/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold text-end xl:text-center md:leading-relaxed pe-14 lg:pe-32 text-white rounded-lg animate-fade-slide-in"
      >
        Qualche info <br v-if="windowWidth < 1440"/>
        <span class="animated-gradient text-7xl md:text-9xl">su di me</span>
      </h1>
    </section>

    <!--Bio section-->
    <section
      class="max-w-6xl mx-auto my-10 p-6 md:px-10 md:py-8 bg-indigo-500/20 border border-indigo-500/30"
    >
      <ContentRenderer
        :value="content"
        class="w-full max-w-none text-white/90 prose prose-invert prose-p:italic prose-h2:text-center prose-h2:text-xl prose-h2:font-normal"
      />
      <!-- Degree section -->
      <section
        class="group perspective w-full max-w-2xl h-64 md:h-[480px] cursor-pointer mx-auto my-10"
      >
        <div
          class="relative w-full h-full transition-transform duration-700 preserve-3d"
          @mouseenter="startAnimation"
          @touchstart="startAnimation"
          :class="{ 'rotate-y-180': flipped }"
        >
          <!-- Front -->
          <div
            class="absolute inset-0 rounded-sm overflow-hidden shadow-lg [backface-visibility:hidden]"
          >
            <img
              src="/img/degree-img.webp"
              alt="Attestato Start2Impact"
              class="w-full h-full rounded-sm object-fill"
            />
          </div>

          <!-- Back -->
          <div
            class="absolute inset-0 rounded-sm shadow-lg border border-indigo-500/10 bg-black backdrop-blur-md text-white/90 rotate-y-180 flex flex-col items-center justify-center px-4 text-center [backface-visibility:hidden]"
          >
            <h2
              class="text-lg md:text-2xl font-semibold mb-2 animated-gradient"
            >
              Punteggi finali
            </h2>
            <section class="w-full grid grid-cols-2 md:grid-cols-1 gap-3 pb-3">
              <div
                v-for="(score, index) in animatedScores"
                :key="score.title"
                class="flex flex-col gap-1 px-1 text-xs"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span>{{ score.title }}</span>
                  </div>
                  <span class="text-indigo-400">
                    {{
                      (
                        ((score.progress * score.score) / score.max) *
                        100
                      ).toFixed(0)
                    }}%
                  </span>
                </div>

                <!-- Bar -->
                <div
                  class="w-full h-2 bg-white/10 rounded-full overflow-hidden"
                >
                  <div
                    class="h-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-800 rounded-full transition-all duration-75"
                    :style="{
                      width:
                        ((score.progress * score.score) / score.max) * 100 +
                        '%',
                    }"
                  ></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </section>
  </div>

  <CallToAction class="mb-10" />
</template>
<style scoped>
@keyframes fade-slide-in {
  0% {
    transform: translateX(0);
  }
  100% {
    opacity: 0.9;
    transform: translateX(2.5rem);
  }
}

.animate-fade-slide-in {
  animation: fade-slide-in 1s ease-out 0.8s forwards;
}

.perspective {
  perspective: 1000px;
}

.preserve-3d {
  transform-style: preserve-3d;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.group-hover\:rotate-y-180:hover {
  transform: rotateY(180deg);
}
</style>
