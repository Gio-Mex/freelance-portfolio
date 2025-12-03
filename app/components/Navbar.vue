<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const currentRoute = ref(router.currentRoute);
const { links, menuOpen, selectLink } = useNavigation();

const windowWidth = ref(0);

onMounted(() => {
  windowWidth.value = window.innerWidth;
  
  // Scroll block
  watch(
    () => menuOpen,
    (isOpen) => {
      const body = document.body;
      if (isOpen) {
        body.classList.add("scroll-lock");
      } else {
        body.classList.remove("scroll-lock");
      }
    }
  );
});
</script>

<template>
  <nav class="fixed top-0 w-full flex items-center p-6 bg-black z-50">
    <section class="cursor-pointer" @click="selectLink(links[0].name)">
      <span class="text-2xl font-semibold text-blue-500">G</span
      ><span class="me-2 font-semibold">iorgio</span>
      <span class="text-2xl font-semibold text-indigo-500">M</span
      ><span class="font-semibold">essore</span>
    </section>

    <section
      v-if="windowWidth > 768"
      class="w-1/2 flex ml-auto justify-end gap-12"
    >
      <NuxtLink
        class="link"
        :class="
          link.selected || link.path === currentRoute.path ? 'animated-gradient decoration-transparent!' : ''
        "
        v-for="link in links"
        :key="link.name"
        :to="link.path"
        @click="selectLink(link)"
        >{{ link.name }}</NuxtLink
      >
    </section>
    <!-- Hamburger -->
    <section
      v-else
      class="flex flex-col ml-auto gap-1"
      @click="menuOpen = !menuOpen"
    >
      <span
        class="hamburger-line bg-indigo-700 z-10"
        :class="menuOpen ? 'rotate-45 translate-y-2' : ''"
      ></span>
      <span
        class="hamburger-line bg-indigo-500 z-10"
        :class="menuOpen ? 'opacity-0' : ''"
      ></span>
      <span
        class="hamburger-line bg-blue-500 z-10"
        :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"
      ></span>
    </section>
  </nav>
  <!-- Mobile menu -->
  <div
    class="fixed top-0 -right-full w-full h-full z-40 opacity-0 transition-opacity duration-300 ease-in-out"
    @click="menuOpen = false"
    :class="{ 'right-0 opacity-100 backdrop-blur-sm bg-blue-500/10': menuOpen }"
  >
    <section
      class="fixed top-0 -right-full w-1/2 h-full bg-black z-50 flex flex-col items-center justify-start pt-26 gap-10 transition-all duration-300 ease-in-out"
      :class="{
        'right-0': menuOpen,
      }"
      @click.stop
    >
      <NuxtLink
        class="link"
        :class="
          link.selected || link.path === currentRoute.path ? 'animated-gradient decoration-transparent!' : ''
        "
        v-for="link in links"
        :key="link.name"
        :to="link.path"
        @click="selectLink(link)"
        >{{ link.name }}</NuxtLink
      >
    </section>
  </div>
</template>

<style scoped>
.link {
  transition: all 0.2s;
  text-decoration-color: transparent;
  letter-spacing: 0.1rem;
}
.link:hover {
  text-decoration: underline;
  text-decoration-color: oklch(62.3% 0.214 259.815);
  text-underline-offset: 0.4rem;
  text-decoration-thickness: 1px;
}
.hamburger-line {
  width: 30px;
  height: 4px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}
.scroll-lock {
  position: fixed !important;
  overflow: hidden !important;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  touch-action: none;
}
</style>
