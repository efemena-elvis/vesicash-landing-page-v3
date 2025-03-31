<script setup lang="ts">
import type { Content } from "@prismicio/client";
import CaretRight from "@/assets/svgs/caret-right.svg";
import Spearhead from "@/assets/svgs/spear-head.svg";

defineProps(
  getSliceComponentProps<Content.DocumentationSlice>([
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
      class="container grid lg:grid-cols-[1fr,_auto,_auto] gap-10 items-center"
    >
      <div
        class="bg-[#F5F6F7] rounded-3xl grid place-items-center min-h-[358px] p-6"
      >
        <div>
          <h3 class="text-4xl font-roobert-semibold font-semibold">
            {{ slice.primary.title }}
          </h3>
          <p class="text-muted-foreground text-xl mt-4 mb-10">
            {{ slice.primary.subtitle }}
          </p>
          <PrismicLink
            :field="slice.primary.documentation_link"
            class="text-primary hover:underline inline-flex items-center gap-2"
          >
            <div class="size-6 rounded-full bg-primary grid place-items-center">
              <CaretRight />
            </div>
            <span> {{ slice.primary.documentation_link.text }}</span>
          </PrismicLink>
        </div>
      </div>

      <Spearhead class="block mx-auto relative rotate-90 lg:rotate-0" />

      <div>
        <PrismicImage
          :field="slice.primary.documentation_illustration"
          class="object-center object-contain mx-auto"
        />
      </div>
    </div>
  </section>
</template>
