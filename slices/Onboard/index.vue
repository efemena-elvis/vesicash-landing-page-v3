<script setup lang="ts">
import type { Content } from "@prismicio/client";
import { buttonVariants } from "@/components/shared/button-styles";
defineProps(
  getSliceComponentProps<Content.OnboardSlice>([
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
    class="py-[100px] bg-[#011A27] relative"
  >
    <NuxtImg
      src="/images/africa.png"
      class="absolute left-0 top-0"
      data-aos="zoom-in"
    />
    <NuxtImg
      src="/images/globe.png"
      class="absolute right-0 bottom-0"
      data-aos="zoom-in"
    />
    <div class="container">
      <div class="space-y-8 max-w-[559px] mx-auto text-center">
        <h1
          class="text-4xl md:text-[64px] md:leading-[72px] font-roobert-semibold font-semibold text-white"
          data-aos="fade-up"
        >
          {{ slice.primary.title }}
        </h1>
        <p class="text-[#D5DDDC] text-2xl" data-aos="fade-up">
          {{ slice.primary.subtitle }}
        </p>
        <NuxtLink
          to="/contact"
          :class="buttonVariants({ variant: 'outline' })"
          data-aos="fade-up"
        >
          {{ slice.primary.booking_link.text }}
        </NuxtLink>
        <!-- <PrismicLink
          :field="slice.primary.booking_link"
          :class="buttonVariants({ variant: 'outline' })"
        >
          {{ slice.primary.booking_link.text }}
        </PrismicLink> -->
      </div>
    </div>
  </section>
</template>
