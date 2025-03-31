<template>
  <div class="rounded-2xl bg-accent p-2 min-w-[350px]">
    <NuxtLink
      class="flex gap-x-4 items-start p-3 rounded-2xl transition-colors hover:bg-[#EEF9FD]"
      to="https://blog.vesicash.com"
      external
      target="_blank"
    >
      <div class="shrink-0">
        <FilesIcon />
      </div>
      <div class="space-y-1">
        <div class="font-semibold font-roobert-semibold text-[#011A27]">
          Blog
        </div>
        <div class="text-muted-foreground text-sm font-medium">
          Curated educational contents to help you get started.
        </div>
      </div>
    </NuxtLink>
    <!-- <NuxtLink
      class="flex gap-x-4 items-start p-3 rounded-2xl transition-colors hover:bg-[#EEF9FD]"
      to="/"
    >
      <div class="shrink-0">
        <MicIcon/>
      </div>
      <div class="space-y-1">
        <div class="font-semibold font-roobert-semibold text-[#011A27]">
          Help and Support
        </div>
        <div class="text-muted-foreground text-sm font-medium">
          Readily available customer support
        </div>
      </div>
    </NuxtLink>
    <NuxtLink
      class="flex gap-x-4 items-start p-3 rounded-2xl transition-colors hover:bg-[#EEF9FD]"
      to="/"
    >
      <div class="size-6 border shrink-0"></div>
      <div class="space-y-1">
        <div class="font-semibold font-roobert-semibold text-[#011A27]">
          Collection
        </div>
        <div class="text-muted-foreground text-sm font-medium">
          Collect payments via various channels and provide multiple payment
          options for your customers.
        </div>
      </div>
    </NuxtLink> -->
  </div>
</template>

<script lang="ts" setup>
import FilesIcon from "@/assets/svgs/files.svg";
import MicIcon from "@/assets/svgs/mic.svg";
import InfoIcon from "@/assets/svgs/info.svg";
</script>
