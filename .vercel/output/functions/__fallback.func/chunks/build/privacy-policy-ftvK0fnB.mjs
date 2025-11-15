import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import 'vue-router';
import '@iconify/vue';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl mx-auto my-15 p-8 text-white/80" }, _attrs))}><h1 class="text-3xl animated-gradient font-semibold mb-6">Privacy Policy</h1><p class="mb-4"> This website is operated by Giorgio Messore. Your privacy is important, and this page explains how your personal data is collected and used when you contact me through the contact form. </p><h2 class="text-xl font-semibold text-indigo-400 mt-6 mb-2">What data is collected</h2><p class="mb-4"> When you submit the contact form, the following information is collected: </p><ul class="list-disc list-inside mb-4"><li>Your name</li><li>Your email address</li><li>Your message</li></ul><h2 class="text-xl font-semibold text-indigo-400 mt-6 mb-2">How your data is used</h2><p class="mb-4"> Your data is used exclusively to respond to your message or inquiry. It will not be used for marketing purposes or shared with third parties. </p><h2 class="text-xl font-semibold text-indigo-400 mt-6 mb-2">Data storage and third-party services</h2><p class="mb-4"> The contact form uses <strong>Formspree</strong> to process and deliver your message. Formspree stores submitted data securely and complies with the General Data Protection Regulation (GDPR). </p><p class="mb-4"> For more information, you can review Formspree’s privacy policy at: <a href="https://formspree.io/legal/privacy-policy" target="_blank" class="text-blue-500 underline">https://formspree.io/legal/privacy-policy</a></p><h2 class="text-xl font-semibold text-indigo-400 mt-6 mb-2">Your rights</h2><p class="mb-4"> You have the right to access, correct, or delete your personal data at any time. To make a request, please contact me at: <span class="font-medium">giorgio.messore@live.com</span>. </p><h2 class="text-xl font-semibold text-indigo-400 mt-6 mb-2">Consent</h2><p> By using the contact form, you agree to the collection and use of your personal data as described in this policy. </p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { privacyPolicy as default };
//# sourceMappingURL=privacy-policy-ftvK0fnB.mjs.map
