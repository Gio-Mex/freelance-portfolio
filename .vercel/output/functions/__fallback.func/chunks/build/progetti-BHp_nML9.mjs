import { _ as __nuxt_component_0 } from './ContentRenderer-KWmIemBB.mjs';
import { I as ImageComponent } from './NuxtImg-CANTPpDH.mjs';
import { _ as __nuxt_component_2 } from './client-only-C0xgo-gd.mjs';
import { _ as __nuxt_component_3 } from './CallToAction-DQHODGiU.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { Icon } from '@iconify/vue';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { u as useSeoMeta } from './composables-3F9Qpb2F.mjs';
import { u as useAsyncData } from './asyncData-BoO3aVI0.mjs';
import { q as queryCollection } from './client-Dl7sMFtg.mjs';
import 'property-information';
import 'minimark/hast';
import 'vue-router';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'perfect-debounce';

const _sfc_main$1 = {
  __name: "CanvasParticles",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CanvasParticles.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CanvasParticles = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-c0029f9d"]]), { __name: "CanvasParticles" });
publicAssetsURL("/img/pc.webp");
const _sfc_main = {
  __name: "progetti",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      title: "Giorgio Messore • Progetti"
    });
    ref(null);
    const windowWidth = ref(0);
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("projects", () => {
      return queryCollection("projects").all();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = __nuxt_component_0;
      const _component_NuxtImg = ImageComponent;
      const _component_ClientOnly = __nuxt_component_2;
      const _component_CallToAction = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(CanvasParticles, null, null, _parent));
      _push(`<section class="h-screen flex flex-col items-center justify-center" data-v-17573e55><p class="text-5xl xl:text-7xl font-semibold z-10" data-v-17573e55>Alcuni dei miei</p><h1 class="h-1/4 animated-gradient bg-clip-text text-transparent font-semibold text-7xl md:text-9xl" data-v-17573e55> progetti </h1></section>`);
      if (unref(projects)) {
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(projects) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="relative min-h-screen text-white" data-v-17573e55><div class="flex flex-row min-h-screen justify-center" data-v-17573e55><div class="lg:w-1/2 md:px-20 lg:px-3 my-10 flex flex-col items-center" data-v-17573e55><!--[-->`);
      ssrRenderList(unref(projects), (project, index) => {
        _push(`<div class="h-screen flex items-center mb-28 opacity-0 transition-opacity duration-700 fade-card" data-v-17573e55><div class="relative max-w-3xl bg-blue-500/5 border border-white/10 rounded-xl p-7 md:px-12 md:py-10 mx-2 lg:mb-0 shadow-md backdrop-blur-sm" data-v-17573e55><span class="absolute flex top-4 right-3 p-2" data-v-17573e55><!--[-->`);
        ssrRenderList(project.meta.bedges, (bedge, i) => {
          _push(ssrRenderComponent(unref(Icon), {
            key: i,
            icon: bedge,
            width: "38",
            height: "38",
            class: "bg-black rounded-full border-s border-indigo-400 py-2 mr-1"
          }, null, _parent));
        });
        _push(`<!--]--></span><h3 class="w-3/4 md:w-full animated-gradient text-2xl font-semibold mb-3" data-v-17573e55>${ssrInterpolate(project.title)}</h3>`);
        if (windowWidth.value < 1024) {
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: project.meta.thumbnail,
            alt: "Project thumbnail",
            class: "mb-3",
            loading: "eager"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="whitespace-pre-line mb-6" data-v-17573e55>${ssrInterpolate(project.description)}</p><p class="text-blue-500 font-bold mb-2" data-v-17573e55>Funzionalità:</p><ul class="list-disc list-inside text-indigo-200 text-sm space-y-3" data-v-17573e55><!--[-->`);
        ssrRenderList(project.meta.features, (feature, i) => {
          _push(`<li data-v-17573e55>${ssrInterpolate(feature)}</li>`);
        });
        _push(`<!--]--></ul><div class="flex flex-col md:flex-row gap-5 md:gap-8 mt-8" data-v-17573e55>`);
        if (project.meta.siteLink) {
          _push(`<div class="btn text-black bg-indigo-500 shadow-md hover:shadow-indigo-500/50 transition-all duration-300" data-v-17573e55> Guarda il sito </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_CallToAction, { class: "mb-10" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/progetti.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const progetti = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-17573e55"]]);

export { progetti as default };
//# sourceMappingURL=progetti-BHp_nML9.mjs.map
