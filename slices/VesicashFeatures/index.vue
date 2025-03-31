<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.VesicashFeaturesSlice>([
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
      class="container flex gap-6 justify-center md:justify-between items-start"
    >
      <div class="w-[342px] hidden md:block">
        <PrismicImage
          :field="slice.primary.illustration"
          class="object-cover"
        />
      </div>
      <div class="space-y-[150px]">
        <div
          class="w-full max-w-[545px]"
          v-for="(feature, index) in slice.primary.features"
          :key="index"
        >
          <div
            :class="
              cn(
                'flex rounded-l-xl justify-end relative bg-gradient-to-r',
                feature.theme === 'blue' &&
                  'from-[#F5F6F7] via-[#EBF5FF] to-[#FFFFFF]',
                feature.theme === 'bluish' &&
                  'from-[#F1FAF3] via-[#E3F6FF] to-[#FFFFFF]',
                feature.theme === 'green' &&
                  'from-[#EEF9FD] via-[#E4F2E6] to-[#FFFFFF]'
              )
            "
          >
            <div class="w-[217px] h-[209px] relative rotate-[-9deg] right-12">
              <PrismicImage
                :field="feature.illustration"
                class="object-contain w-full h-full"
              />
            </div>
          </div>
          <div class="pt-6 space-y-2">
            <h4 class="font-roobert-semibold font-semibold text-3xl">
              {{ feature.title }}
            </h4>
            <p class="text-muted-foreground text-xl">{{ feature.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
