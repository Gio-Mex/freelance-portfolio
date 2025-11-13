<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const currentRoute = ref(useRouter().currentRoute);
</script>
<template>
  <div
    class="py-6 bg-black"
    :class="{
      'text-white/40':
        currentRoute.path !== '/' && currentRoute.path !== '/progetti',
    }"
  >
    <section class="max-w-5xl mx-auto text-center">
      <p>© 2025 Giorgio Messore</p>
    </section>
  </div>
</template>
