<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number
    message?: string
  }
}>()
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center p-6">
    <h1 class="text-9xl font-bold text-blue-500">
      {{ error.statusCode }}
    </h1>

    <p
      v-if="error.statusCode === 404"
      class="mt-4 text-xl"
    >
      Pagina non trovata
    </p>

    <p
      v-else
      class="mt-4 text-xl"
    >
      Errore {{ error.statusCode }}
    </p>

    <NuxtLink to="/" class="mt-6 text-indigo-400">
      Torna alla home
    </NuxtLink>
  </div>
</template>