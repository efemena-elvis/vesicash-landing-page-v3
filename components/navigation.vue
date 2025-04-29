<template>
  <header class="h-[70px] flex items-center justify-between container">
    <NuxtLink
      class="flex items-center gap-x-px text-secondary text-[24px] leading-5"
      to="/"
    >
      <NuxtImg src="/images/vesicash.svg" />
    </NuxtLink>
    <nav class="hidden lg:flex justify-end gap-x-[32px] items-center">
      <div
        class="text-[16px] leading-[20px] text-[#525857] transition-colors [&:hover_.caret]:rotate-180 [&:hover_>_.products]:block relative cursor-pointer"
      >
        <div class="flex gap-x-1 items-center">
          <span class="hover:text-primary">Products</span>
          <ChevronDown class="size-4 relative caret transition-transform" />
        </div>
        <div
          class="products hidden absolute pt-6 xl:left-1/2 xl:-translate-x-1/2"
        >
          <div class="animate-in slide-in-from-top-4 zoom-in-95">
            <VesicashProducts />
          </div>
        </div>
      </div>
      <div
        class="text-[16px] leading-[20px] text-[#525857] transition-colors [&:hover_.caret]:rotate-180 [&:hover_>_.resources]:block relative cursor-pointer"
      >
        <div class="flex gap-x-1 items-center">
          <span class="hover:text-primary">Resources</span>
          <ChevronDown class="size-4 relative caret transition-transform" />
        </div>
        <div
          class="resources hidden absolute pt-6 md:left-1/2 md:-translate-x-1/2"
        >
          <div class="animate-in slide-in-from-top-4 zoom-in-95">
            <VesicashResources />
          </div>
        </div>
      </div>
      <NuxtLink
        to="https://docs.vesicash.com"
        external
        target="_blank"
        class="text-[16px] leading-[20px] text-[#525857] hover:text-primary transition-colors"
      >
        Developers
      </NuxtLink>
      <!-- <NuxtLink
        to="/support"
        class="text-[16px] leading-[20px] text-[#525857] hover:text-primary transition-colors"
      >
        Support
      </NuxtLink> -->

      <div class="flex gap-x-3">
        <NuxtLink to="/contact">
          <Button
            class="hidden md:inline-flex"
            :variant="'outline'"
            :size="'lg'"
          >
            Contact Support
          </Button>
        </NuxtLink>
        <!-- <NuxtLink>
          <Button class="hidden md:inline-flex" :size="'md'">
            Contact sales
          </Button>
        </NuxtLink> -->
      </div>
    </nav>
    <Button
      :variant="'ghost'"
      :size="'icon'"
      class="lg:hidden"
      @click="opened = !opened"
    >
      <X v-if="opened" />
      <MenuIcon v-else />
    </Button>
    <div
      class="fixed top-[70px] inset-0 border bg-background lg:hidden animate-in slide-in-from-top-2 fade-in-0 !duration-500"
      v-if="opened"
    >
      <MobileNavigation @close="opened = false" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import Button from "@/components/shared/button.vue";
import MenuIcon from "@/assets/svgs/menu.svg";
import VesicashProducts from "./vesicash-products.vue";
import VesicashResources from "./vesicash-resources.vue";
import { ChevronDown, X } from "lucide-vue-next";
import MobileNavigation from "./mobile-navigation.vue";

const opened = ref(false);
const route = useRoute();
watch(
  () => route.path,
  () => {
    opened.value = false;
  }
);
</script>
