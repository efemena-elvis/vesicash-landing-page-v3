<template>
  <div class="min-h-screen">
    <SliceZone
      v-if="data?.data.slices?.length"
      :components="components"
      :slices="data?.data.slices"
    />
  </div>
</template>

<script lang="ts" setup>
import { components } from "~/slices";
const { client } = usePrismic();

const { data, status } = useAsyncData("homepage", () => {
  return client.getByUID("landing_pages", "homepage");
});

useSeoMeta({
  title: () => data.value?.data?.meta_title ?? "",
  description: () => data.value?.data?.meta_description ?? "",
  ogTitle: () => data.value?.data?.meta_title ?? "",
  ogDescription: () => data.value?.data?.meta_description ?? "",
  keywords: () => data.value?.data?.meta_keywords ?? "",
  ogSiteName: "Vesicash",
  ogUrl: () => "https://vesicash.com",
  ogImage: () => data.value?.data?.meta_image.url ?? "",
  ogImageSecureUrl: () => data.value?.data?.meta_image?.url ?? "",
  ogImageAlt: "Vesicash",
  ogImageWidth: 300,
  ogImageHeight: 300,
  ogImageType: "image/png",
  twitterImage: () => data.value?.data?.meta_image?.url ?? "",
  twitterImageAlt: "Vesicash",
  twitterCard: "summary",
});
</script>
