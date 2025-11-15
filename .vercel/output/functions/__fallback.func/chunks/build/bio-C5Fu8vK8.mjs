import { _ as __nuxt_component_0 } from './ContentRenderer-KWmIemBB.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_3 } from './CallToAction-DQHODGiU.mjs';
import { q as queryCollection } from './client-Dl7sMFtg.mjs';
import { u as useSeoMeta } from './composables-3F9Qpb2F.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'property-information';
import 'minimark/hast';
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
import 'vue-router';
import '@iconify/vue';

const _imports_0 = publicAssetsURL("/img/degree-img.webp");
const myPic = publicAssetsURL("/img/my-pic.webp");
const _sfc_main = {
  __name: "bio",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const windowWidth = ref(0);
    const content = ([__temp, __restore] = withAsyncContext(() => queryCollection("home").path("/bio").first()), __temp = await __temp, __restore(), __temp);
    content.meta.scores;
    const animatedScores = ref([]);
    const flipped = ref(false);
    useSeoMeta({
      title: content.title,
      description: content.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = __nuxt_component_0;
      _push(`<!--[--><div class="bg-black pt-12 mx-auto" data-v-21a9ee20><section class="relative min-h-60 md:min-h-[450px] lg:h-screen xl:h-[600px] w-full overflow-hidden" data-v-21a9ee20><img${ssrRenderAttr("src", unref(myPic))} alt="Giorgio Messore picture" class="absolute top-5 -left-[58%] md:-left-[54%] lg:-left-[51.9%] h-full w-full object-contain opacity-0 animate-fade-slide-in" data-v-21a9ee20><div class="absolute top-0 left-0 h-full w-1/3 bg-linear-to-l from-black to-transparent" data-v-21a9ee20></div><h1 class="absolute w-full md:w-11/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold text-end xl:text-center md:leading-relaxed pe-14 lg:pe-32 text-white rounded-lg animate-fade-slide-in" data-v-21a9ee20> Qualche info `);
      if (windowWidth.value < 1440) {
        _push(`<br data-v-21a9ee20>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="animated-gradient text-7xl md:text-9xl" data-v-21a9ee20>su di me</span></h1></section><section class="max-w-6xl mx-auto my-10 p-6 md:px-10 md:py-8 bg-indigo-500/20 border border-indigo-500/30" data-v-21a9ee20>`);
      _push(ssrRenderComponent(_component_ContentRenderer, {
        value: unref(content),
        class: "w-full max-w-none text-white/90 prose prose-invert prose-p:italic prose-h2:text-center prose-h2:text-xl prose-h2:font-normal"
      }, null, _parent));
      _push(`<section class="group perspective w-full max-w-2xl h-64 md:h-[480px] cursor-pointer mx-auto my-10" data-v-21a9ee20><div class="${ssrRenderClass([{ "rotate-y-180": flipped.value }, "relative w-full h-full transition-transform duration-700 preserve-3d"])}" data-v-21a9ee20><div class="absolute inset-0 rounded-sm overflow-hidden shadow-lg [backface-visibility:hidden]" data-v-21a9ee20><img${ssrRenderAttr("src", _imports_0)} alt="Attestato Start2Impact" class="w-full h-full rounded-sm object-fill" data-v-21a9ee20></div><div class="absolute inset-0 rounded-sm shadow-lg border border-indigo-500/10 bg-black backdrop-blur-md text-white/90 rotate-y-180 flex flex-col items-center justify-center px-4 text-center [backface-visibility:hidden]" data-v-21a9ee20><h2 class="text-lg md:text-2xl font-semibold mb-2 animated-gradient" data-v-21a9ee20> Punteggi finali </h2><section class="w-full grid grid-cols-2 md:grid-cols-1 gap-3 pb-3" data-v-21a9ee20><!--[-->`);
      ssrRenderList(animatedScores.value, (score, index) => {
        _push(`<div class="flex flex-col gap-1 px-1 text-xs" data-v-21a9ee20><div class="flex items-center justify-between" data-v-21a9ee20><div class="flex items-center gap-2" data-v-21a9ee20><span data-v-21a9ee20>${ssrInterpolate(score.title)}</span></div><span class="text-indigo-400" data-v-21a9ee20>${ssrInterpolate((score.progress * score.score / score.max * 100).toFixed(0))}% </span></div><div class="w-full h-2 bg-white/10 rounded-full overflow-hidden" data-v-21a9ee20><div class="h-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-800 rounded-full transition-all duration-75" style="${ssrRenderStyle({
          width: score.progress * score.score / score.max * 100 + "%"
        })}" data-v-21a9ee20></div></div></div>`);
      });
      _push(`<!--]--></section></div></div></section></section></div>`);
      _push(ssrRenderComponent(__nuxt_component_3, { class: "mb-10" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bio = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-21a9ee20"]]);

export { bio as default };
//# sourceMappingURL=bio-C5Fu8vK8.mjs.map
