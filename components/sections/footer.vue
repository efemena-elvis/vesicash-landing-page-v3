<template>
  <div class="bg-background pt-12">
    <div class="container relative">
      <NuxtLink
        class="flex items-center gap-x-px text-secondary text-[24px] leading-5"
        to="/"
      >
        <NuxtImg src="/images/vesicash.svg" />
      </NuxtLink>
      <div
        class="flex flex-wrap items-start justify-between gap-y-[80px] gap-x-[20px] [&_>_div]:min-w-[270px] my-10"
      >
        <div class="space-y-6">
          <div class="space-y-2">
            <a
              v-for="(email, index) in supportEmails"
              class="block"
              :key="index"
              :href="`mailto:${email.email_address}`"
              >{{ email.email_address }}</a
            >
          </div>

          <div class="flex items-center gap-x-4">
            <PrismicLink
              v-for="(link, index) in socialLinks"
              :key="index"
              :field="link.link"
              class="size-[48px] hover:bg-muted/50 cursor-pointer transition-colors rounded-full border grid place-items-center"
            >
              <PrismicImage
                :field="link.social_icon"
                class="size-[25px] object-contain"
              />
            </PrismicLink>
          </div>
        </div>
        <div
          class="space-y-6"
          v-for="(links, group) of groupedLinks"
          :key="group"
        >
          <div class="font-bold">{{ group }}</div>
          <PrismicLink
            v-for="(link, i) in links.filter(Boolean)"
            :key="i"
            :field="link.link"
            class="block text-[#171918] cursor-pointer hover:text-primary hover:underline text-muted-foreground"
          >
            <span class="hover:underline"> {{ link.link.text }}</span>
          </PrismicLink>
        </div>
      </div>

      <div
        class="py-20 grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6"
      >
        <div
          class="flex items-start gap-2"
          v-for="(item, index) in addresses"
          :key="index"
        >
          <div class="size-[24px]">
            <PrismicImage
              :field="item.flag"
              class="w-full h-full object-contain"
            />
          </div>
          <p class="text-muted-foreground text-sm">{{ item.address }}</p>
        </div>
        <div class="text-muted-foreground text-s flex gap-x-1 items-center">
          <span>A member of</span>
          <NuxtImg src="/images/stellar.png" class="h-auto w-[55px]" />
          <span class="text-sm">network</span>
        </div>
      </div>
    </div>
    <div
      class="px-6 py-4 flex justify-center items-center text-[#C1C9C8] border-t"
    >
      <div>
        Copyright {{ new Date().getFullYear() }}. Vesicash Innovative
        Technologies.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import StellarIcon from "@/assets/svgs/stellar.svg";
import type {
  FooterDocumentDataFooterLinksItem,
  Simplify,
} from "@/prismicio-types";
const { client } = usePrismic();

const { data } = useAsyncData("footer", () => {
  return client.getSingle("footer");
});

const addresses = computed(() => {
  return data.value?.data?.office_addresses ?? [];
});

const groupedLinks = computed(() => {
  const links = data.value?.data?.footer_links ?? [];
  let currentGroup = "";
  return links.reduce(
    (acc, link) => {
      if (link.link.link_type === "Any") {
        currentGroup = link.link.text ?? "";
      }
      if (link.link.link_type !== "Any" && currentGroup) {
        if (acc[currentGroup]) {
          acc[currentGroup].push(link);
        } else {
          acc[currentGroup] = [link];
        }
      }
      return acc;
    },
    {} as { [key: string]: Simplify<FooterDocumentDataFooterLinksItem>[] }
  );
});

const socialLinks = computed(() => {
  return data.value?.data?.social_links ?? [];
});

const supportEmails = computed(() => {
  return data.value?.data?.support_emails ?? [];
});
</script>
