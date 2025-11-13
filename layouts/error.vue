<script setup>
defineProps(["error"]);
</script>

<template>
  <h1 v-if="error.statusCode === 404">Pagina non trovata</h1>
  <h1 v-else>C'è stato un errore</h1>
  <nuxt-link to="/">Home page</nuxt-link>
</template>
