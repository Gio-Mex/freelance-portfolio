// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/icon", "@nuxt/image", "@nuxt/content", "@nuxt/fonts"],
  content: {
    renderer: {
      anchorLinks: false,
    },
  },
  app: {
    head: {
      title: "Crea la tua presenza online con Giorgio Messore | Sviluppatore Web ",
      htmlAttrs: {
        lang: "it",
      },
      meta: [
        // SEO di base
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Realizzo siti web e web-app moderni, veloci e su misura per privati, professionisti e piccole attività. Aiuto persone in tutta Italia, in particolare Lazio e Abruzzo, a dare forma alle proprie idee online.",
        },
        {
          name: "keywords",
          content:
            "svillupatore web, web developer, Vue.js, Nuxt.js, React, Next.js, Astro, Node.js, creazione siti web, siti web su misura, siti web per attività, siti web per professionisti, portfolio professionale, siti moderni e veloci, Lazio, Abruzzo, frontend, backend, fullstack",
        },
        { name: "author", content: "Giorgio Messore" },

        // Open Graph
        {
          property: "og:title",
          content: "Giorgio Messore | Web Developer",
        },
        {
          property: "og:description",
          content:
            "Scopri i miei progetti e le mie skills come sviluppatore web fullstack.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.giorgiomessore.dev" },
        {
          property: "og:image",
          content: "/img/home-preview.webp",
        },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Giorgio Messore | Web Developer" },
        {
          name: "twitter:description",
          content:
            "Scopri i miei progetti e le mie skills come sviluppatore web fullstack.",
        },
        {
          name: "twitter:image",
          content: "/img/home-preview.webp",
        },
      ],
      link: [
        // Favicon + Canonical
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://www.giorgiomessore.it" },

        // Google Fonts
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },
});
