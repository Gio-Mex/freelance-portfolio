import { _ as __nuxt_component_2 } from './client-only-C0xgo-gd.mjs';
import { I as ImageComponent } from './NuxtImg-CANTPpDH.mjs';
import { _ as __nuxt_component_3 } from './CallToAction-DQHODGiU.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { q as queryCollection } from './client-Dl7sMFtg.mjs';
import { u as useSeoMeta } from './composables-3F9Qpb2F.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@iconify/utils';
import 'consola';
import 'better-sqlite3';
import './server.mjs';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    ref(0);
    const content = ([__temp, __restore] = withAsyncContext(() => queryCollection("home").path("/").first()), __temp = await __temp, __restore(), __temp);
    const softSkills = content.meta.softSkills;
    const hardSkills = content.meta.hardSkills;
    const features = content.meta.features;
    const titleVisible = ref(false);
    useSeoMeta({
      title: content.title,
      description: content.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      const _component_NuxtImg = ImageComponent;
      const _component_CallToAction = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/bg-abstract.webp",
        class: "fixed top-0 left-0 h-screen w-full bg-cover bg-no-repeat bg-center -z-20",
        preload: ""
      }, null, _parent));
      _push(`<section class="relative flex h-screen mt-15 md:mt-40 lg:mt-20"><span class="${ssrRenderClass([
        "absolute top-1/2 md:relative md:top-1/7 text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-semibold px-9 lg:ms-18 transition-opacity duration-1000 ease-in-out z-10",
        titleVisible.value ? "opacity-100" : "opacity-0"
      ])}"><p> Ciao 👋 <br> Sono Giorgio, il tuo </p><h1 class="animated-gradient bg-clip-text text-transparent text-7xl md:text-9xl lg:text-center lg:scale-107 xl:scale-125 tracking-tight"> web dev </h1></span><div class="relative h-[300px] md:h-[600px] lg:h-[400px] xl:h-[700px] w-2/3 md:w-full lg:w-1/3 mt-10 ms-auto rounded-es-full rounded-s-full shadow-md overflow-hidden hover:shadow-blue-500/50 transition-transform duration-500">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "absolute lg:left-0 h-[300px] md:h-[600px] lg:h-[400px] xl:h-[700px] object-cover z-10 hover:scale-105",
        src: "/img/my-pic.webp",
        alt: "developer",
        preload: ""
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-blue-800 opacity-10 z-20"></div></div></section><section class="flex justify-center items-center pb-16 bg-transparent text-white/90"><div class="max-w-6xl text-center"><section class="py-16 backdrop-blur-xs bg-indigo-500/5 border-y border-indigo-500/10 px-3"><h2 class="text-4xl md:text-5xl font-normal mb-8"> Idee, persone e codice:<br><span class="text-5xl md:text-6xl animated-gradient bg-clip-text text-transparent font-semibold">la connessione perfetta</span></h2><p class="text-lg md:px-20 italic"> Credo nei progetti che nascono dal dialogo e crescono con la passione.<br>Ogni sito o web-app è un ponte tra la tua visione e il mondo digitale.<br></p></section><p class="text-2xl px-2 md:px-20 my-14"> Ecco le <span class="text-indigo-400">qualità umane</span> che mi guidano nello sviluppo e nella collaborazione: </p><div class="grid md:grid-cols-2 gap-6 px-4"><!--[-->`);
      ssrRenderList(unref(softSkills), (skill) => {
        _push(`<div class="flex flex-col items-start backdrop-blur-sm bg-indigo-500/5 border border-indigo-500/10 rounded-sm p-8 shadow-md transition-transform hover:scale-105 duration-300 hover:shadow-blue-500/50"><h3 class="text-indigo-400 text-lg font-semibold mb-2 flex items-center mx-auto">${ssrInterpolate(skill.icon)} ${ssrInterpolate(skill.title)}</h3><p>${ssrInterpolate(skill.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="flex justify-center text-white/90 backdrop-blur-xs"><div class="w-full max-w-6xl text-center"><section class="py-16 mb-10 backdrop-blur-xs bg-indigo-500/5 border-y border-indigo-500/10"><h2 class="text-4xl md:text-5xl font-normal mb-8"> Logica e design: <br><span class="text-5xl md:text-6xl animated-gradient bg-clip-text text-transparent font-semibold">le mie conoscenze sono tue</span></h2><p class="text-lg md:px-20 italic"> Sfrutto strumenti moderni e linguaggi performanti per creare progetti stabili,<br> veloci e ottimizzati per ogni dispositivo. </p></section><p class="text-2xl px-3 md:px-20 my-14"> Questo è il mio <span class="text-indigo-400">stack tecnologico</span> che trasforma le tue idee in realtà digitali: </p><div class="grid grid-cols-2 md:grid-cols-7 gap-8 px-4 pb-14 border-b border-indigo-500/10"><!--[-->`);
      ssrRenderList(unref(hardSkills), (skill) => {
        _push(`<section class="flex flex-col items-center hover:scale-105 transition-transform">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: skill.icon,
          width: "40",
          height: "40",
          class: "text-white/90! hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]"
        }, null, _parent));
        _push(`<span class="mt-2 text-sm font-medium flex">${ssrInterpolate(skill.title)} `);
        if (skill.learning) {
          _push(ssrRenderComponent(unref(Icon), {
            icon: "eos-icons:rotating-gear",
            width: "17",
            height: "17",
            class: "text-indigo-400 ms-1 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</span></section>`);
      });
      _push(`<!--]--></div></div></section><section class="max-w-6xl flex flex-col justify-center items-center mx-auto pb-16 bg-transparent text-center text-white/90"><h3 class="text-4xl px-2 md:px-20 mt-15 mb-10"> Cosa significa tutto questo <span class="text-indigo-400">per te</span>? </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4"><!--[-->`);
      ssrRenderList(unref(features), (feature) => {
        _push(`<section class="flex flex-col items-center backdrop-blur-sm bg-indigo-500/5 border border-indigo-500/10 rounded-sm p-8 shadow-md transition-transform hover:scale-105 duration-300 hover:shadow-blue-500/50">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: feature.icon,
          width: "50",
          height: "50",
          class: "text-indigo-500! hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]"
        }, null, _parent));
        _push(`<span class="mt-4 text-lg">${ssrInterpolate(feature.title)}</span></section>`);
      });
      _push(`<!--]--></div></section>`);
      _push(ssrRenderComponent(_component_CallToAction, { class: "mb-10" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BZIbZKrB.mjs.map
