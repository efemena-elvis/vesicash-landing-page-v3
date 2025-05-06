<template>
  <div>
    <NuxtLoadingIndicator />
    <div class="fixed left-0 right-0 bg-background z-50 border-b">
      <Navigation />
    </div>
    <div class="pt-[70px]">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Footer from "@/components/sections/footer.vue";

useHead({
  link: [
    {
      id: "canonical",
      rel: "canonical",
      href: "https://vesicash.com",
    },
    {
      href: "https://unpkg.com/aos@next/dist/aos.css",
      rel: "stylesheet",
    },
  ],
  script: [
    {
      src: "https://unpkg.com/aos@next/dist/aos.js",
      onload() {
        AOS?.init({
          duration: 800,
        });
      },
    },
  ],
});
</script>
