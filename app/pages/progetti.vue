<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import CanvasParticles from "~/components/CanvasParticles.vue";
import { Icon } from "@iconify/vue";
import pcImage from "/img/pc.webp";

useSeoMeta({
  title: "Giorgio Messore • Progetti",
});

const activeThumbnail = ref(null);
const cardRefs = [];
const windowWidth = ref(0);
let observer;

// Get projects data from content folder
const { data: projects } = await useAsyncData("projects", () => {
  return queryCollection("projects").all();
})

const openLink = (url) => window.open(url, "_blank");



onMounted(() => {
  windowWidth.value = window.innerWidth;
  activeThumbnail.value = projects.value[0].meta.thumbnail;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const idx = cardRefs.indexOf(entry.target);
        if (idx === -1) return;
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          if (windowWidth.value >= 1024) {
            activeThumbnail.value = projects.value[idx].meta.thumbnail;
          }
        } else {
          entry.target.classList.remove("opacity-100");
        }
      });
    },
    { threshold: 0.5 }
  );

  cardRefs.forEach((card) => {
    if (card) observer.observe(card);
  });

  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
});

onBeforeUnmount(() => {
  if (observer) {
    cardRefs.forEach((card) => card && observer.unobserve(card));
  }
});
</script>

<template>
  <CanvasParticles />

  <!-- Hero -->
  <div class="h-screen flex flex-col items-center justify-center">
    <p class="text-5xl xl:text-7xl font-semibold tracking-wide z-10">Alcuni dei miei</p>
    <h1
      class="h-1/4 animated-gradient bg-clip-text text-transparent font-semibold tracking-wider text-7xl md:text-9xl"
    >
      PROGETTI
    </h1>
  </div>

  <!-- Projects -->
   <ContentRenderer v-if="projects" :value="projects" />
  <section class="relative min-h-screen text-white">
    <div class="flex flex-row min-h-screen justify-center">
      <!-- Left column -->
      <div class="lg:w-1/2 md:px-20 lg:px-3 my-10 flex flex-col items-center">
        <!-- Cards -->
        <div
          v-for="(project, index) in projects"
          :key="project.path"
          :ref="(el) => (cardRefs[index] = el)"
          class="h-screen flex items-center mb-28 opacity-0 transition-opacity duration-700 fade-card"
        >
          <div
            class="relative max-w-3xl bg-blue-500/5 border border-white/10 rounded-xl p-7 md:px-12 md:py-10 mx-2 lg:mb-0 shadow-md backdrop-blur-sm"
          >
            <span class="absolute flex top-4 right-3 p-2">
              <Icon
                v-for="(badge, i) in project.meta.badges"
                :key="i"
                :icon="badge"
                width="38"
                height="38"
                class="bg-black rounded-full border-s border-indigo-400 py-2 mr-1"
              />
            </span>

            <h3 class="w-3/4 md:w-full animated-gradient text-xl font-semibold tracking-wider mb-3">
              {{ project.title }}
            </h3>

            <NuxtImg
              v-if="windowWidth < 1024"
              :src="project.meta.thumbnail"
              alt="Project thumbnail"
              class="mb-3"
              loading="eager"
            />

            <p class="tracking-wide mb-6 ">{{ project.description }}</p>

            <p class="text-blue-500 font-bold mb-2">Funzionalità:</p>
            <ul class="list-disc list-inside text-indigo-200 text-sm space-y-3">
              <li v-for="(feature, i) in project.meta.features" :key="i">{{ feature }}</li>
            </ul>

            <div class="flex flex-col md:flex-row gap-5 md:gap-8 mt-8">
              <div
                v-if="project.meta.siteLink"
                class="btn text-black bg-indigo-500 shadow-md hover:shadow-indigo-500/50 transition-all duration-300"
                @click="openLink(project.meta.siteLink)"
              >
                Guarda il sito
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right column (PC preview) -->
      <ClientOnly>
        <div
          v-if="windowWidth >= 1024"
          class="w-1/2 h-screen sticky top-0 flex items-center justify-center px-3"
        >
          <div class="relative w-[500px] h-[400px] xl:scale-150 rounded-lg">
            <NuxtImg
              :src="pcImage"
              class="w-full h-full object-cover rounded-xl"
              alt="PC frame"
              loading="eager"
            />
            <div
              class="absolute top-[10%] left-[12.5%] w-[73.8%] h-[58%] overflow-hidden rounded-t"
            >
              <transition name="fade-slide" mode="out-in">
                <NuxtImg
                  :key="activeThumbnail"
                  :src="activeThumbnail"
                  class="w-full h-full object-cover"
                  alt="Project thumbnail"
                />
              </transition>
            </div>
          </div>
        </div>
      </ClientOnly>
    </div>
  </section>
  <CallToAction class="mb-10" />
</template>

<style scoped>
.fade-card {
  transition: opacity 0.6s ease-in-out;
}
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
}
.btn {
  width: 100%;
  text-align: center;
  font-size: small;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.btn:hover {
  scale: 1.05;
}
.btn:active {
  scale: 1;
}
</style>
