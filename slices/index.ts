// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  documentation: defineAsyncComponent(
    () => import("./Documentation/index.vue"),
  ),
  feature_item: defineAsyncComponent(() => import("./FeatureItem/index.vue")),
  feature_options: defineAsyncComponent(
    () => import("./FeatureOptions/index.vue"),
  ),
  hero_section: defineAsyncComponent(() => import("./HeroSection/index.vue")),
  onboard: defineAsyncComponent(() => import("./Onboard/index.vue")),
  partners: defineAsyncComponent(() => import("./Partners/index.vue")),
  vesicash_features: defineAsyncComponent(
    () => import("./VesicashFeatures/index.vue"),
  ),
  vesicash_options: defineAsyncComponent(
    () => import("./VesicashOptions/index.vue"),
  ),
});
