import { c as create_ssr_component, d as each, f as add_attribute } from "./ssr.js";
const css = {
  code: ".carousel.svelte-fgjebk{display:flex;overflow-x:auto;position:relative;width:100%}.carousel__container.svelte-fgjebk{display:flex}",
  map: '{"version":3,"file":"Carousel.svelte","sources":["Carousel.svelte"],"sourcesContent":["<script>\\r\\n\\texport let images;\\r\\n\\texport let imageHeight = 150;\\r\\n\\texport let imageSpacing = 0;\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"carousel\\">\\r\\n\\t<div class=\\"carousel__container\\">\\r\\n\\t\\t{#each images as image (image.id)}\\r\\n\\t\\t\\t<img\\r\\n\\t\\t\\t\\tsrc={image.path}\\r\\n\\t\\t\\t\\talt={image.alt}\\r\\n\\t\\t\\t\\tid={image.id}\\r\\n\\t\\t\\t\\tstyle={`height: ${imageHeight}px; margin-right: ${imageSpacing}px`}\\r\\n\\t\\t\\t/>\\r\\n\\t\\t{/each}\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.carousel {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\toverflow-x: auto;\\r\\n\\t\\tposition: relative;\\r\\n\\t\\twidth: 100%;\\r\\n\\t}\\r\\n\\t.carousel__container {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t}\\r\\n</style>"],"names":[],"mappings":"AAoBC,uBAAU,CACT,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAChB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IACR,CACA,kCAAqB,CACpB,OAAO,CAAE,IACV"}'
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
