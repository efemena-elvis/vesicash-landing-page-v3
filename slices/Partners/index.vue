<script setup lang="ts">
import AutoScrollCarousel from "@/components/auto-scroll-carousel.vue";
import type { Content } from "@prismicio/client";
defineProps(
  getSliceComponentProps<Content.PartnersSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="py-[54px]"
  >
    <div class="container">
      <h2
        class="text-4xl font-roobert-semibold font-semibold text-center"
        data-aos="fade-down"
      >
        {{ slice.primary.title }}
      </h2>
      <p
        class="text-xl text-muted-foreground mt-6 mb-10 text-center max-w-[641px] mx-auto"
        data-aos="fade-up"
      >
        {{ slice.primary.subtitle }}
      </p>
    </div>
    <AutoScrollCarousel wrapper-classes="justify-between">
      <PrismicImage
        v-for="(logo, index) in [
          ...slice.primary.logos,
          ...slice.primary.logos,
        ]"
        :key="logo?.logo?.id ?? '' + index"
        :field="logo.logo"
        class="object-cover px-6"
      />
    </AutoScrollCarousel>
  </section>
</template>
