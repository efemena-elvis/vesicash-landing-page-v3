<script setup lang="ts">
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
      <h2 class="text-4xl font-roobert-semibold font-semibold text-center">
        {{ slice.primary.title }}
      </h2>
      <p
        class="text-xl text-muted-foreground mt-6 mb-10 text-center max-w-[641px] mx-auto"
      >
        {{ slice.primary.subtitle }}
      </p>
      <div class="flex flex-wrap gap-6 justify-center">
        <PrismicImage
          v-for="(logo, index) in slice.primary.logos"
          :key="logo?.logo?.id ?? '' + index"
          :field="logo.logo"
          class="object-contain"
        />
      </div>
    </div>
  </section>
</template>
