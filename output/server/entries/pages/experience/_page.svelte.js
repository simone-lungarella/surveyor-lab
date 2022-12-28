import { c as create_ssr_component, e as subscribe, h as each, f as escape, d as add_attribute } from "../../../chunks/index.js";
import { W as WorkStore } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $WorkStore, $$unsubscribe_WorkStore;
  $$unsubscribe_WorkStore = subscribe(WorkStore, (value) => $WorkStore = value);
  let selectedWorkplace = 0;
  $$unsubscribe_WorkStore();
  return `<div class="${"grid grid-cols-8 md:grid-cols-9 gap-4 -mt-12 md:mt-20"}"><div class="${"md:col-span-1"}"></div>
    <div class="${"prose col-span-8"}"><div class="${"flex gap-6 items-center"}"><h2 class="${"text-white"}"><span class="${"text-amber-300 font-mono"}">02. </span>Experience
            </h2>
            <div class="${"h-0.5 w-1/4 md:w-1/3 bg-gray-700 mt-7"}"></div></div></div>
    <div class="${"md:col-span-1"}"></div>

    <div class="${"col-span-8 md:col-span-2 grid grid-flow-col md:grid-flow-row place-content-start"}">${each($WorkStore, (work) => {
    return `<div class="${"flex gap-2 flex-col-reverse md:flex-row"}"><div class="${"h-0.5 w-full md:h-full md:w-0.5 bg-gray-500"}"${add_attribute(
      "style",
      selectedWorkplace === work.id - 1 ? "background-color: rgb(252 211 77);" : "background-color: rgb(107 114 128);",
      0
    )}></div>
                <button class="${"text-left p-2 rounded-sm text-md font-mono w-full hover:bg-gray-800 hover:text-amber-300"}"${add_attribute(
      "style",
      selectedWorkplace === work.id - 1 ? "color: rgb(252 211 77);" : "color: rgb(255 255 255);",
      0
    )}>${escape(work.company)}</button>
            </div>`;
  })}</div>
    <div class="${"col-span-8 md:col-span-5 prose font-mono"}"><h3 class="${"text-white"}">${escape($WorkStore[selectedWorkplace].title)} <span class="${"text-amber-300"}">@${escape($WorkStore[selectedWorkplace].company)}</span></h3>
        <h4 class="${"text-gray-500"}">${escape($WorkStore[selectedWorkplace].from)} - ${escape($WorkStore[selectedWorkplace].to)}</h4>
        
        <ul class="${"text-gray-200"}">${each($WorkStore[selectedWorkplace].topics, (topic) => {
    return `<li>${escape(topic)}</li>`;
  })}</ul></div>
    <div class="${"md:col-span-1"}"></div></div>`;
});
export {
  Page as default
};
