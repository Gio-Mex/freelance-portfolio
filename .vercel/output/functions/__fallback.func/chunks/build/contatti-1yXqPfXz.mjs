import { I as ImageComponent } from './NuxtImg-CANTPpDH.mjs';
import { withAsyncContext, reactive, ref, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
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
  __name: "contatti",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const content = ([__temp, __restore] = withAsyncContext(() => queryCollection("home").path("/contacts").first()), __temp = await __temp, __restore(), __temp);
    const socials = content.meta.socials;
    useSeoMeta({
      title: content.title,
      description: content.description
    });
    const form = reactive({
      name: "",
      email: "",
      message: ""
    });
    const acceptedPrivacy = ref(false);
    const isLoading = ref(false);
    const status = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = ImageComponent;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/bg-abstract.webp",
        class: "fixed top-0 left-0 h-screen w-full bg-cover bg-no-repeat bg-center -z-20",
        preload: ""
      }, null, _parent));
      _push(`<div class="mt-4 mb-6 pt-22 px-3"><h1 class="text-5xl font-semibold text-center animated-gradient"> Contattami </h1><p class="text-lg text-center mt-5 italic"> Hai un’idea o vuoi dare una nuova immagine alla tua attività?<br> Scrivimi e parliamone: insieme possiamo costruire <span class="text-indigo-400">il tuo spazio digitale</span>. </p></div><section class="flex justify-center"><div class="max-w-xl mb-6 mx-2 flex space-x-12"><!--[-->`);
      ssrRenderList(unref(socials), (social) => {
        _push(`<a${ssrRenderAttr("href", social.link)} target="_blank">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: social.icon,
          width: "40",
          height: "40",
          class: "text-blue-500 hover:scale-110 transition hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]"
        }, null, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></div></section><div class="max-w-xl my-4 mx-2 p-6 flex justify-self-center rounded-lg shadow-lg shadow-blue-500 border border-indigo-300 backdrop-blur-md"><form class="space-y-5"><input type="text"${ssrRenderAttr("value", form.name)} required placeholder="Il tuo nome" class="w-full p-2 border border-indigo-300 rounded"><input type="email"${ssrRenderAttr("value", form.email)} required placeholder="La tua email" class="w-full p-2 border border-indigo-300 rounded"><textarea required placeholder="Scrivi il tuo messaggio" class="w-full p-2 border border-indigo-300 rounded h-32">${ssrInterpolate(form.message)}</textarea><div class="flex items-start justify-center gap-2 text-sm"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(acceptedPrivacy.value) ? ssrLooseContain(acceptedPrivacy.value, null) : acceptedPrivacy.value) ? " checked" : ""} id="privacy" required class="mt-1"><label for="privacy"> Ho letto e accetto la <span href="/privacy-policy" target="_blank" class="text-indigo-500 underline hover:text-blue-600 cursor-pointer"> politica sulla privacy</span>. </label></div><button type="submit"${ssrIncludeBooleanAttr(isLoading.value || !acceptedPrivacy.value) ? " disabled" : ""} class="w-1/3 flex justify-center bg-blue-600 text-white text-sm py-2 mx-auto rounded hover:scale-105 shadow-md hover:shadow-blue-500/50 focus:scale-100 focus:shadow-none transition duration-300 disabled:opacity-50">${ssrInterpolate(isLoading.value ? "Invio..." : "Invia")}</button>`);
      if (status.value === "success") {
        _push(`<p class="text-green-500 text-center"> Messaggio inviato con successo! </p>`);
      } else {
        _push(`<!---->`);
      }
      if (status.value === "error") {
        _push(`<p class="text-red-600 text-center"> Oops! Something went wrong. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="text-xs text-gray-500 text-center mt-2"> I tuoi dati non verranno memorizzati. Sono utilizzati solo per rispondere alla tua richiesta, in conformità con la politica sulla privacy. </p></form></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contatti.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contatti-1yXqPfXz.mjs.map
