<script setup lang="ts">
import type { Content } from "@prismicio/client";
import { cn } from "@/lib/utils";
defineProps(
  getSliceComponentProps<Content.FeatureItemSlice>([
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
    class="py-[100px] container"
  >
    <div
      :class="
        cn(
          'p-12 rounded-3xl grid lg:grid-cols-[1fr,_auto] gap-6 items-center',
          slice.primary.theme === 'grey' && 'bg-[#F5F6F7]',
          slice.primary.theme === 'green' && 'bg-[#F1FAF3]',
          slice.primary.theme === 'transparent' && 'bg-transparent'
        )
      "
    >
      <div
        :class="
          cn(
            'space-y-8 max-w-[435px]',
            slice.primary.illustration_position === 'left' && 'lg:order-2'
          )
        "
      >
        <h3
          class="font-roobert-semibold font-semibold text-4xl text-center lg:text-left"
        >
          {{ slice.primary.title }}
        </h3>
        <p class="text-muted-foreground text-xl text-center lg:text-left">
          {{ slice.primary.subtitle }}
        </p>
      </div>
      <div
        :class="
          cn(
            'w-full sm:w-[413px] xl:w-[513px] aspect-[1.4] mx-auto',
            slice.primary.illustration_position === 'left' && 'lg:order-1'
          )
        "
      >
        <PrismicImage
          :field="slice.primary.illustration"
          class="object-cover w-full h-full"
        />
      </div>
    </div>
  </section>
</template>
