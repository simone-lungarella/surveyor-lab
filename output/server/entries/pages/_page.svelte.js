import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"grid md:grid-cols-8 md:mt-32"}"><div class="${"md:col-span-1 lg:col-span-1"}"></div>
    <div class="${"text-column font-mono prose md:col-span-7"}"><h3 class="${"text-amber-300"}">Hello, world! I&#39;m</h3>
        <h1 class="${"text-white"}">Simone Lungarella</h1>
        <h3 class="${"text-gray-300 uppercase"}">software engineer</h3>
        <p class="${"text-gray-400"}">I am a web application specialist, proficient in both design and
            development. In addition to my primary focus, I have a keen interest
            in game development and am currently working on a personal project
            utilizing Unreal Engine 4 and its visual scripting language to
            further cultivate this passion.
        </p></div></div>`;
});
export {
  Page as default
};
