import { c as create_ssr_component, d as each, f as add_attribute } from "./ssr.js";
const css = {
  code: ".carousel.svelte-fgjebk{display:flex;overflow-x:auto;position:relative;width:100%}.carousel__container.svelte-fgjebk{display:flex}",
  map: '{"version":3,"file":"Carousel.svelte","sources":["Carousel.svelte"],"sourcesContent":["<script>\\n\\texport let images;\\n\\texport let imageHeight = 150;\\n\\texport let imageSpacing = 0;\\n<\/script>\\n\\n<div class=\\"carousel\\">\\n\\t<div class=\\"carousel__container\\">\\n\\t\\t{#each images as image (image.id)}\\n\\t\\t\\t<img\\n\\t\\t\\t\\tsrc={image.path}\\n\\t\\t\\t\\talt={image.alt}\\n\\t\\t\\t\\tid={image.id}\\n\\t\\t\\t\\tstyle={`height: ${imageHeight}px; margin-right: ${imageSpacing}px`}\\n\\t\\t\\t/>\\n\\t\\t{/each}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.carousel {\\n\\t\\tdisplay: flex;\\n\\t\\toverflow-x: auto;\\n\\t\\tposition: relative;\\n\\t\\twidth: 100%;\\n\\t}\\n\\t.carousel__container {\\n\\t\\tdisplay: flex;\\n\\t}\\n</style>"],"names":[],"mappings":"AAoBC,uBAAU,CACT,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAChB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IACR,CACA,kCAAqB,CACpB,OAAO,CAAE,IACV"}'
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  let { imageHeight = 150 } = $$props;
  let { imageSpacing = 0 } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
  if ($$props.imageHeight === void 0 && $$bindings.imageHeight && imageHeight !== void 0) $$bindings.imageHeight(imageHeight);
  if ($$props.imageSpacing === void 0 && $$bindings.imageSpacing && imageSpacing !== void 0) $$bindings.imageSpacing(imageSpacing);
  $$result.css.add(css);
  return `<div class="carousel svelte-fgjebk"><div class="carousel__container svelte-fgjebk">${each(images, (image) => {
    return `<img${add_attribute("src", image.path, 0)}${add_attribute("alt", image.alt, 0)}${add_attribute("id", image.id, 0)}${add_attribute("style", `height: ${imageHeight}px; margin-right: ${imageSpacing}px`, 0)}>`;
  })}</div> </div>`;
});
export {
  Carousel as C
};
