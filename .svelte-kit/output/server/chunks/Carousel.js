import { c as create_ssr_component, d as each, f as add_attribute } from "./ssr.js";
const css = {
  code: ".carousel.svelte-fgjebk{display:flex;overflow-x:auto;position:relative;width:100%}.carousel__container.svelte-fgjebk{display:flex}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  let { imageHeight = 150 } = $$props;
  let { imageSpacing = 0 } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.imageHeight === void 0 && $$bindings.imageHeight && imageHeight !== void 0)
    $$bindings.imageHeight(imageHeight);
  if ($$props.imageSpacing === void 0 && $$bindings.imageSpacing && imageSpacing !== void 0)
    $$bindings.imageSpacing(imageSpacing);
  $$result.css.add(css);
  return `<div class="carousel svelte-fgjebk"><div class="carousel__container svelte-fgjebk">${each(images, (image) => {
    return `<img${add_attribute("src", image.path, 0)}${add_attribute("alt", image.alt, 0)}${add_attribute("id", image.id, 0)}${add_attribute("style", `height: ${imageHeight}px; margin-right: ${imageSpacing}px`, 0)}>`;
  })}</div> </div>`;
});
export {
  Carousel as C
};
