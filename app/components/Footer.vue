<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const currentRoute = ref(useRouter().currentRoute);
const windowWidth = ref(0);

onMounted(() => {
  windowWidth.value = window.innerWidth;
});
</script>

<template>
  <div
    class="py-6 bg-black"
    :class="{
      'text-white/40':
        currentRoute.path !== '/' && currentRoute.path !== '/progetti',
    },
    {
      'fixed w-full bottom-0': currentRoute.path === '/contatti' && windowWidth > 1024,
    }"
  >
    <section class="max-w-5xl mx-auto text-center">
      <p>© 2025 Giorgio Messore</p>
    </section>
  </div>
</template>
