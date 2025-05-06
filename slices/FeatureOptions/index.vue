<script setup lang="ts">
import type { Content } from "@prismicio/client";
import { cn } from "@/lib/utils";

defineProps(
  getSliceComponentProps<Content.FeatureOptionsSlice>([
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
          ' p-12 rounded-3xl',
          slice.primary.theme === 'grey' && 'bg-[#F5F6F7]',
          slice.primary.theme === 'green' && 'bg-[#F1FAF3]',
          slice.primary.theme === 'transparent' && 'bg-transparent'
        )
      "
    >
      <div class="space-y-6 max-w-[835px]" data-aos="fade-left">
        <h4 class="font-roobert-semibold font-semibold text-4xl">
          {{ slice.primary.title }}
        </h4>
        <p class="text-xl text-[#696F6E]">
          {{ slice.primary.subtitle }}
        </p>
      </div>
      <div
        class="mt-[70px] grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-[50px]"
      >
        <div
          class="space-y-[30px]"
          v-for="option in slice.primary.options ?? []"
          :key="option.title ?? 'key'"
        >
          <div
            class="grid place-items-center size-[70px] rounded-full bg-background ring ring-muted"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <PrismicImage
              :field="option.icon"
              class="size-[40px] object-contain"
            />
          </div>
          <div class="space-y-2">
            <h3
              class="font-roobert-semibold font-semibold text-2xl"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              {{ option.title }}
            </h3>
            <p class="text-xl text-[#696F6E]" data-aos="fade-up">
              {{ option.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
