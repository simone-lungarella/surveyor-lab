import { c as create_ssr_component, b as createEventDispatcher, v as validate_component, d as add_attribute } from "../../chunks/index.js";
const app = "";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: ".item.svelte-11dqts9{@apply flex items-center px-3 py-2 text-xl font-mono gap-1;}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  $$result.css.add(css);
  return `<header class="${"bg-gray-900"}"><div class="${"flex justify-end items-center w-full h-20"}"><nav><ul class="${"gap-2 hidden md:flex mr-10"}" aria-label="${"Navigation"}"><li><div class="${"item svelte-11dqts9"}"><p class="${"text-amber-300"}">01.</p>
                        <a href="${"/about"}" class="${"text-white hover:text-amber-300"}">About</a></div></li>
                <li><div class="${"item svelte-11dqts9"}"><p class="${"text-amber-300"}">02.</p>
                        <a href="${"/experience"}" class="${"text-white hover:text-amber-300"}">Experience</a></div></li>
                <li><div class="${"item svelte-11dqts9"}"><p class="${"text-amber-300"}">03.</p>
                        <a href="${"/projects"}" class="${"text-white hover:text-amber-300"}">Projects</a></div></li></ul></nav>
        <div class="${"md:hidden absolute"}">${`<button class="${"flex items-center rounded top-0 right-0 text-amber-300"}"><svg class="${"w-12 h-12"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg></button>`}</div></div>
    ${``}
</header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  let bodyStyle = "bg-gray-900 text-white p-4";
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<body${add_attribute("class", bodyStyle, 0)}>${slots.default ? slots.default({}) : ``}</body>`;
});
export {
  Layout as default
};
