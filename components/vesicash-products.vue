<template>
  <div
    class="grid grid-cols-[2fr,_3fr] gap-x-2 p-1 rounded-2xl bg-accent md:w-[600px] lg:w-[700px]"
    @mouseleave="active_product = 'mor'"
  >
    <div class="space-y-1 bg-[#D9F1FD] p-1 rounded-[inherit]">
      <div
        :class="
          cn(
            'space-y-1 p-3 rounded-[inherit] bg-transparent hover:bg-background transition-colors',
            active_product === 'mor' && 'bg-background'
          )
        "
        @mouseenter="active_product = 'mor'"
      >
        <div class="font-semibold font-roobert-semibold text-[#011A27]">
          Merchant of Records
        </div>
        <div class="text-muted-foreground text-sm">
          Secure structure for managing financial transactions.
        </div>
      </div>
      <div
        :class="
          cn(
            'space-y-1 p-3 rounded-[inherit] bg-transparent hover:bg-background transition-colors',
            active_product === 'escrow' && 'bg-background'
          )
        "
        @mouseenter="active_product = 'escrow'"
      >
        <div class="font-semibold font-roobert-semibold text-[#011A27]">
          Escrow
        </div>
        <div class="text-muted-foreground text-sm">
          Escrow technology ensures you get value for B2B and B2C payments.
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] items-start gap-x-px gap-y-1 data-[state=inactive]:hidden p-2 animate-in slide-in-from-left-2"
      :data-state="active_product === 'mor' ? 'active' : 'inactive'"
    >
      <NuxtLink
        class="flex gap-x-4 items-start p-3 rounded-2xl transition-colors hover:bg-[#EEF9FD]"
        to="/collection"
      >
        <div class="shrink-0">
          <MoneyIcon />
        </div>

        <div class="space-y-1">
          <div class="font-semibold font-roobert-semibold text-[#011A27]">
            Collection
          </div>
          <div class="text-muted-foreground text-sm font-medium">
            Collect payments via various channels and provide multiple payment
            options for your customers.
          </div>
        </div>
      </NuxtLink>

      <NuxtLink
        class="flex gap-x-4 items-start p-3 rounded-2xl transition-colors hover:bg-[#EEF9FD]"
        to="/payout"
      >
        <div class="shrink-0">
          <WalletFlowIcon />
        </div>

        <div class="space-y-1">
          <div class="font-semibold font-roobert-semibold text-[#011A27]">
            Payout
          </div>
          <div class="text-muted-foreground text-sm font-medium">
            Our dependable and secure structure for managing financial
            transactions.
          </div>
        </div>
      </NuxtLink>
    </div>

    <div
      class="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] items-start gap-x-px gap-y-1 data-[state=inactive]:hidden p-2 animate-in slide-in-from-left-2"
      :data-state="active_product === 'escrow' ? 'active' : 'inactive'"
    >
      <NuxtLink
        class="flex gap-x-4 items-start p-3 rounded-2xl transition-colors hover:bg-[#EEF9FD]"
        to="/escrow"
      >
        <div class="shrink-0">
          <WalletIcon />
        </div>
        <div class="space-y-1">
          <div class="font-semibold font-roobert-semibold text-[#011A27]">
            Escrow services
          </div>
          <div class="text-muted-foreground text-sm font-medium">
            Escrow service boost payment confidence for B2B & B2C
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MoneyIcon from "@/assets/svgs/money.svg";
import WalletFlowIcon from "@/assets/svgs/wallet-flow.svg";
import WalletIcon from "@/assets/svgs/wallet.svg";
const active_product = ref<"mor" | "escrow">("mor");
import { cn } from "@/lib/utils";
</script>
