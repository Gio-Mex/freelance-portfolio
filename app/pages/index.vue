<script setup>
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";

const windowWidth = ref(0);

// Get home content from content folder
const content = await queryCollection("home").path("/").first();
const softSkills = content.meta.softSkills;
const hardSkills = content.meta.hardSkills;
const features = content.meta.features;
const titleVisible = ref(false);

useSeoMeta({
  title: content.title,
  description: content.description,
});

onMounted(() => {
  windowWidth.value = window.innerWidth;
  setTimeout(() => {
    titleVisible.value = true;
  }, 100);
});
</script>

<template>
  <ClientOnly>
    <CanvasParticles />
  </ClientOnly>
  <div
    class="bg-[url('/img/bg-abstract.webp')] fixed top-0 left-0 h-screen w-full bg-cover bg-no-repeat bg-center -z-20"
  ></div>

  <!-- Hero Section -->
  <section class="relative flex h-screen mt-15 md:mt-40 lg:mt-20">
    <span
      :class="[
        'absolute top-1/2 md:relative md:top-1/7 text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-semibold tracking-wide px-9 lg:ms-18 transition-opacity duration-1000 ease-in-out z-10',
        titleVisible ? 'opacity-100' : 'opacity-0',
      ]"
    >
      <p>
        Ciao 👋 <br />
        Sono Giorgio, il tuo
      </p>
      <h1
        class="animated-gradient bg-clip-text text-transparent text-6xl md:text-9xl text-center scale-105 lg:scale-100 xl:scale-115 tracking-wider font-bold"
      >
        WEB DEV
      </h1></span
    >

    <div
      class="relative h-[300px] md:h-[600px] lg:h-[400px] xl:h-[700px] w-2/3 md:w-full lg:w-1/3 mt-10 ms-auto rounded-es-full rounded-s-full shadow-md overflow-hidden  hover:shadow-blue-500/50 hover:scale-105 transition-transform duration-500"
    >
      <NuxtImg
        class="absolute lg:left-0 h-[300px] md:h-[600px] lg:h-[400px] xl:h-[700px] object-cover z-10 "
        src="/img/my-pic.webp"
        alt="developer"
      />
      <div class="absolute inset-0 bg-blue-800 opacity-10 z-20"></div>
    </div>
  </section>

  <!-- Soft Skills -->
  <section
    class="flex justify-center items-center pb-16 bg-transparent text-white/90"
  >
    <div class="max-w-6xl text-center">
      <section
        class="py-16 backdrop-blur-xs bg-indigo-500/5 border-y border-indigo-500/10 px-3"
      >
        <h2 class="text-3xl md:text-4xl font-normal tracking-wide leading-relaxed mb-8">
          Idee, persone e codice:<br /><span
            class="text-5xl md:text-6xl animated-gradient bg-clip-text text-transparent font-semibold tracking-wider"
            >LA CONNESSIONE PERFETTA</span
          >
        </h2>
        <p class="text-lg md:px-20 italic">
          Credo nei progetti che nascono dal dialogo e crescono con la
          passione.<br />Ogni sito o web-app è un ponte tra la tua visione e il
          mondo digitale.<br />
        </p>
      </section>
      <p class="text-2xl px-2 md:px-20 my-14 tracking-wide">
        Ecco le <span class="text-indigo-400">qualità umane</span> che mi
        guidano nello sviluppo e nella collaborazione:
      </p>

      <div class="grid md:grid-cols-2 gap-6 px-4">
        <div
          v-for="skill in softSkills"
          :key="skill"
          class="flex flex-col items-start backdrop-blur-sm bg-indigo-500/5 border border-indigo-500/10 rounded-sm p-8 shadow-md transition-transform hover:scale-105 duration-300 hover:shadow-blue-500/50"
        >
          <h3
            class="text-indigo-400 text-lg font-semibold tracking-widest mb-2 flex items-center mx-auto"
          >
            {{ skill.icon }} {{ skill.title }}
          </h3>
          <p class="tracking-wide">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Hard Skills -->
  <section class="flex justify-center text-white/90 backdrop-blur-xs">
    <div class="w-full max-w-6xl text-center">
      <section
        class="py-16 mb-10 backdrop-blur-xs bg-indigo-500/5 border-y border-indigo-500/10"
      >
        <h2 class="text-3xl md:text-4xl font-normal tracking-wide leading-relaxed mb-8">
          Logica e design: <br /><span
            class="text-5xl md:text-6xl animated-gradient bg-clip-text text-transparent font-semibold tracking-wider"
            >LE MIE CONOSCENZE SONO TUE</span
          >
        </h2>
        <p class="text-lg md:px-20 italic">
          Sfrutto strumenti moderni e linguaggi performanti per creare progetti
          stabili,<br />
          veloci e ottimizzati per ogni dispositivo.
        </p>
      </section>
      <p class="text-2xl px-3 md:px-20 my-14 tracking-wide">
        Questo è il mio
        <span class="text-indigo-400">stack tecnologico</span> che trasforma le
        tue idee in realtà digitali:
      </p>
      <div
        class="grid grid-cols-2 md:grid-cols-7 gap-8 px-4 pb-14 border-b border-indigo-500/10"
      >
        <section
          v-for="skill in hardSkills"
          :key="skill.name"
          class="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <Icon
            :icon="skill.icon"
            width="40"
            height="40"
            class="text-white/90! hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]"
          />
          <span class="mt-2 text-sm font-medium flex tracking-wide"
            >{{ skill.title }}
            <Icon
              v-if="skill.learning"
              icon="eos-icons:rotating-gear"
              width="17"
              height="17"
              class="text-indigo-400 ms-1 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]"
          /></span>
        </section>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section
    class="max-w-6xl flex flex-col justify-center items-center mx-auto pb-16 bg-transparent text-center text-white/90"
  >
    <h3 class="text-4xl px-2 md:px-20 mt-15 mb-10 tracking-wide">
      Cosa significa tutto questo <span class="text-indigo-400">PER TE</span>?
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      <section
        v-for="feature in features"
        :key="feature.title"
        class="flex flex-col items-center backdrop-blur-sm bg-indigo-500/5 border border-indigo-500/10 rounded-sm p-8 shadow-md transition-transform hover:scale-105 duration-300 hover:shadow-blue-500/50"
      >
        <Icon
          :icon="feature.icon"
          width="50"
          height="50"
          class="text-indigo-500! hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]"
        />
        <span class="mt-4 text-lg text-blue-400 font-semibold tracking-widest">{{ feature.title }}</span>
        <p class="mt-1 tracking-wide">{{ feature.description }}</p>
      </section>
    </div>
  </section>
  <CallToAction class="mb-10" />
</template>
