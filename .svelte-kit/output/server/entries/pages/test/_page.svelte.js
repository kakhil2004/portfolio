import { c as create_ssr_component, d as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
const css = {
  code: ".box-container.svelte-k40lg{display:flex;margin-bottom:50px auto;flex-wrap:wrap;justify-content:center;gap:10px;max-height:80%;padding:30px;overflow:auto}.box.svelte-k40lg{flex:0 0 calc(90% - 20px);border:3px solid #4A4A4A;border-radius:10px ;padding:20px;font-size:1.5vh;cursor:default}.box-image.svelte-k40lg{top:0;left:0;width:100%;height:100%;background:url('https://cdn.nextgov.com/media/img/cd/2017/05/03/050317sharkNG/860x394.jpg') no-repeat center center/cover;opacity:0.3}@media(max-width: 768px){.box.svelte-k40lg{flex-basis:calc(100% - 20px)}}.box.svelte-k40lg:hover{cursor:pointer}",
  map: null
};
const ImageContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="box-container svelte-k40lg" style="margin-bottom:40px;">${each(data, (item) => {
    return `${"redirect" in item ? `<div onclick="${"window.location.href = '" + escape(item["redirect"] ? item["redirect"] : "", true) + "'"}" onmouseover="${"this.style.backgroundColor = '" + escape(item["color"] ? item["color"] : "", true) + "'"}" onmouseout="this.style.backgroundColor =''" class="box svelte-k40lg"><div class="box-image svelte-k40lg"></div> <div>${"onlyH2" in item ? `<h4 style="margin:0px;">${escape(item["header"])}</h4>` : `<h2>${escape(item["header"])}</h2>`} ${"smallHead" in item ? `<p style="margin:0px;"><b>${escape(item["smallHead"])}</b></p>` : ``} ${"para" in item ? `<p>${escape(item["para"])}</p>` : ``}</div> </div>` : `<div onmouseover="${"this.style.backgroundColor = '" + escape(item["color"] ? item["color"] : "", true) + "'"}" onmouseout="this.style.backgroundColor =''" class="box svelte-k40lg">${"onlyH2" in item ? `<h4 style="margin:0px;">${escape(item["header"])}</h4>` : `<h2>${escape(item["header"])}</h2>`} ${"smallHead" in item ? `<p style="margin:0px;"><b>${escape(item["smallHead"])}</b></p>` : ``} ${"para" in item ? `<p>${escape(item["para"])}</p>` : ``} </div>`}`;
  })} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let proj = [
    {
      "header": "Undergraduate Researcher",
      "smallHead": "Active Safety for Autonomous and Semi-Autonomous Vehicles",
      "para": "I spend several hours every week working on a cool car that has LIDAR, vision, an NVidia Jetson Nano etc. and I need to make it fully autonmous so it can race in F1Tenth. Will add a page for this soon!",
      "redirect": "/exp/aevip",
      "image": "https://cdn.nextgov.com/media/img/cd/2017/05/03/050317sharkNG/860x394.jpg"
    },
    {
      "header": "Undergraduate Researcher",
      "smallHead": "Active Safety for Autonomous and Semi-Autonomous Vehicles",
      "para": "I spend several hours every week working on a cool car that has LIDAR, vision, an NVidia Jetson Nano etc. and I need to make it fully autonmous so it can race in F1Tenth. Will add a page for this soon!",
      "redirect": "/exp/aevip",
      "image": "https://cdn.nextgov.com/media/img/cd/2017/05/03/050317sharkNG/860x394.jpg"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-up86il_START -->${$$result.title = `<title>About this Website</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-up86il_END -->`, ""} <div class="text-column">${validate_component(ImageContainer, "ImageContainer").$$render($$result, { data: proj }, {}, {})}</div>`;
});
export {
  Page as default
};
