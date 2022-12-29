import { c as create_ssr_component, e as subscribe, h as each, f as escape, d as add_attribute } from "../../../chunks/index.js";
import { P as ProjectStore } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ProjectStore, $$unsubscribe_ProjectStore;
  $$unsubscribe_ProjectStore = subscribe(ProjectStore, (value) => $ProjectStore = value);
  $$unsubscribe_ProjectStore();
  return `<div class="${"grid grid-cols-8 md:grid-cols-9 gap-4 -mt-12 md:mt-12 space-y-4"}"><div class="${"md:col-span-1"}"></div>

    <div class="${"prose col-span-8"}"><div class="${"flex gap-6 items-center"}"><h2 class="${"text-white"}"><span class="${"text-amber-300 font-mono"}">03. </span>Projects
            </h2>
            <div class="${"h-0.5 w-1/4 md:w-1/3 bg-gray-700 mt-7"}"></div></div></div>

    ${each($ProjectStore, (project) => {
    return `<div class="${"md:col-span-1"}"></div>

        
        <div class="${"col-span-8 md-col-span-7 prose font-mono"}"><h2 class="${"text-white"}">${escape(project.title)}</h2></div>

        <div class="${"md:col-span-1"}"></div>

        
        <div class="${"col-span-8 md:col-span-7 grid grid-flow-row gap-4 place-content-center"}">
            <div class="${"col-span-8 md:col-span-4 object-center object-fill hover:scale-105 transition duration-500 ease-in-out"}"><img${add_attribute("src", project.cover, 0)} alt="${"Project"}"></div>

            
            <div class="${"col-span-8 md:col-span-3 bg-contain prose font-mono"}"><span class="${"text-amber-300"}">${escape(project.techs.join(" - "))}</span>
                <p class="${"text-gray-400"}">${escape(project.description)}</p>
                <a class="${"text-white"}"${add_attribute("href", project.page, 0)}>More about ${escape(project.title)}</a></div>

            
            <div class="${"col-span-8 md:col-span-7 grid grid-flow-col place-content-start gap-4"}">${project.github ? `<a${add_attribute("href", project.github, 0)}><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-github hover:scale-110 hover:text-amber-300"}"><path d="${"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}"></path></svg>
                    </a>` : ``}
                ${project.website ? `<a${add_attribute("href", project.website, 0)}><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-external-link hover:scale-110 hover:text-amber-300"}"><path d="${"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}"></path><polyline points="${"15 3 21 3 21 9"}"></polyline><line x1="${"10"}" y1="${"14"}" x2="${"21"}" y2="${"3"}"></line></svg>
                    </a>` : ``}</div>

            ${project.id !== $ProjectStore.length ? `<div class="${"col-span-8 md:col-span-7 h-0.5 w-full bg-gray-700 mb-7"}"></div>` : ``}</div>

        <div class="${"md:col-span-1"}"></div>`;
  })}</div>`;
});
export {
  Page as default
};
