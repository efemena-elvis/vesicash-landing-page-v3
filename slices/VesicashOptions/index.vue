<script setup lang="ts">
import type { Content } from "@prismicio/client";
defineProps(
  getSliceComponentProps<Content.VesicashOptionsSlice>([
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
    class="py-[100px]"
  >
    <div
      class="container grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-6 md:gap-14"
    >
      <div
        class="bg-[#F5F6F7] rounded-3xl"
        v-for="(option, index) in slice.primary.options"
        :key="option?.title ?? '' + index"
        :data-aos="index % 2 == 0 ? 'fade-right' : 'fade-left'"
      >
        <div class="aspect-video max-h-[350px]">
          <PrismicImage
            :field="option.illustration"
            class="object-cover ml-auto w-[75%] h-full"
          />
        </div>
        <div class="p-6 md:p-8 space-y-6 mt-6">
          <h4 class="font-roobert-semibold font-semibold text-2xl md:text-3xl">
            {{ option.title }}
          </h4>
          <p class="text-muted-foreground text-lg md:text-xl">
            {{ option.subtitle }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
