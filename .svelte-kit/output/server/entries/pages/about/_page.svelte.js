import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../chunks/index.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isMenuOpen = false } = $$props;
  let footerClass = "p-4 grid place-content-center grid-flow-col gap-4 bottom-0 w-full";
  if ($$props.isMenuOpen === void 0 && $$bindings.isMenuOpen && isMenuOpen !== void 0)
    $$bindings.isMenuOpen(isMenuOpen);
  {
    isMenuOpen ? footerClass += " blur-sm" : footerClass = footerClass.replace(" blur-sm", "");
  }
  return `<footer${add_attribute("class", footerClass, 0)}><a class="${"hover:scale-105 hover:text-amber-300"}" href="${"https://github.com/simone-lungarella"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-github hover:scale-110 hover:text-amber-300"}"><path d="${"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}"></path></svg></a>
    <a class="${"hover:scale-105 hover:text-amber-300"}" href="${"https://www.linkedin.com/in/simone-lungarella"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-linkedin"}"><path d="${"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}"></path><rect x="${"2"}" y="${"9"}" width="${"4"}" height="${"12"}"></rect><circle cx="${"4"}" cy="${"4"}" r="${"2"}"></circle></svg></a></footer>`;
});
const Profile = "/_app/immutable/assets/profile-7aadd0cd.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"grid grid-cols-7 md:grid-cols-8 lg:grid-cols-10 gap-4 -mt-8 md:mt-20"}"><div class="${"md:col-span-1"}"></div>
    <div class="${"prose col-span-7 lg:col-span-8"}"><div class="${"flex gap-6 items-center"}"><h2 class="${"text-white"}"><span class="${"text-amber-300 font-mono"}">01. </span>About Me
            </h2>
            <div class="${"h-0.5 w-1/3 bg-gray-700 mt-7"}"></div></div></div>
    <div class="${"md:col-span-1"}"></div>

    <div class="${"lg:col-span-1"}"></div>

    <div class="${"text-column font-mono prose col-span-7 lg:col-span-4"}"><p class="${"text-gray-200"}">My name is Simone, a 26-year-old resident of Rome. I pride myself on
            maintaining a positive outlook and strive to do so in all aspects of
            my life. When faced with challenges, I approach them with optimism
            and make an effort to learn from every experience.
        </p>
        <p class="${"text-gray-200"}">I have a passion for creating things from the ground up, whether it
            be designing and developing websites or video games. In all of my
            endeavors, I make a point to absorb as much knowledge as possible
            while also having a good time.
        </p>

        <h3 class="${"text-gray-200"}">My favourite technologies are:</h3>
        <ul class="${"text-gray-200"}"><li>Java &amp; SpringBoot</li>
            <li>SvelteJS</li>
            <li>TailwindCSS</li>
            <li>Unreal Engine</li></ul></div>
    <div class="${"col-span-7 lg:col-span-4 mt-10 lg:mt-0"}"><div class="${"grid place-content-center"}"><img${add_attribute("src", Profile, 0)} alt="${"Simone Lungarella profile"}" class="${"bg-center p-4 w-96 hover:scale-110 transition duration-500 ease-in-out hover:ring-2 ring-amber-300"}"></div></div>
    <div class="${"lg:col-span-1"}"></div></div>

<div class="${"mt-10 grid grid-cols-7 place-content-center w-full"}"><div class="${"col-span-1"}"></div>
    <div class="${"h-0.5 bg-gray-700 mb-5 shadow-lg col-span-5"}"></div>
    <div class="${"col-span-1"}"></div>
    <div class="${"col-span-7"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
