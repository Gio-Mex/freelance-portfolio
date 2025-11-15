import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex justify-center" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contatti",
    class: "w-full md:max-w-1/3 mx-4 md:mx-auto flex justify-center items-center bg-indigo-600 text-white text-2xl font-semibold text-center py-6 rounded hover:scale-105 shadow-md hover:shadow-blue-500/50 focus:scale-100 focus:shadow-none transition duration-300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Ok iniziamo 🚀 `);
      } else {
        return [
          createTextVNode("Ok iniziamo 🚀 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CallToAction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "CallToAction" });

export { __nuxt_component_3 as _ };
//# sourceMappingURL=CallToAction-DQHODGiU.mjs.map
