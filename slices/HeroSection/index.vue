<script setup lang="ts">
import { buttonVariants } from "@/components/shared/button-styles";
import type { Content } from "@prismicio/client";
defineProps(
  getSliceComponentProps<Content.HeroSectionSlice>([
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
    class="py-[80px]"
  >
    <div class="container md:min-h-[600px] relative overflow-hidden">
      <div class="space-y-[24px] max-w-[765px] relative z-10">
        <div
          class="px-4 py-1.5 rounded-full text-center text-sm inline-flex bg-primary/50"
          v-if="slice.variation === 'tagged'"
        >
          {{ slice.primary.hero_tag }}
        </div>
        <h1
          class="text-[40px] leading-[48px] md:text-[64px] md:leading-[72px] font-roobert-semibold font-semibold"
          data-aos="fade-up"
        >
          {{ slice.primary.title }}
        </h1>
        <p
          class="text-[#525857] text-xl md:text-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {{ slice.primary.subtitle }}
        </p>

        <PrismicLink
          :class="buttonVariants()"
          v-if="slice.variation === 'default'"
          :field="slice.primary.get_started_link"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {{ slice.primary.get_started_link.text }}
        </PrismicLink>
      </div>

      <div
        class="w-full mt-10 md:mt-0 md:absolute md:bottom-4 md:right-[2%] hidden md:block"
        :style="{
          transform: `translate(-55px, ${slice.primary.position_offset ?? 0}px)`,
        }"
      >
        <PrismicImage
          :field="slice.primary.hero_illustration"
          class="object-cover md:object-contain md:object-right md:ml-auto w-full max-h-[250px] lg:max-h-[300px]"
          data-aos="fade-left"
          data-aos-delay="20"
        />
      </div>

      <div
        class="w-full md:hidden mt-10 md:mt-0 md:absolute md:bottom-4 md:right-[2%] !translate-y-0 md:!translate-y-[auto]"
      >
        <PrismicImage
          :field="slice.primary.hero_illustration"
          class="object-cover md:object-contain md:object-right md:ml-auto w-full max-h-[250px] lg:max-h-[300px]"
          data-aos="fade-left"
          data-aos-delay="200"
        />
      </div>
    </div>
  </section>
</template>
