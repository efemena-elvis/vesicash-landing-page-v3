<template>
  <div class="overflow-hidden" ref="emblaRef">
    <slot name="container">
      <div
        :class="
          cn(
            'flex flex-row [&_>_*]:shrink-0 h-full items-center',
            wrapperClasses
          )
        "
      >
        <slot />
      </div>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import AutoScroll from "embla-carousel-auto-scroll";
import emblaCarouselVue from "embla-carousel-vue";
import { cn } from "@/lib/utils";
const [emblaRef] = emblaCarouselVue({ loop: true }, [
  AutoScroll({
    stopOnInteraction: false,
    stopOnFocusIn: false,
    stopOnMouseEnter: false,
    startDelay: 10,
    speed: 1.2,
  }),
]);

defineProps<{ wrapperClasses?: string }>();
</script>
