<template>
  <div class="container">
    <div class="space-y-1">
      <div>
        <div
          class="flex items-center justify-between py-6 border-b relative cursor-pointer"
          @click="toggleProducts"
        >
          <div>Products</div>
          <ChevronRight
            :class="
              cn(
                'size-5 relative transition-transform',
                products_opened ? 'rotate-90' : ''
              )
            "
          />
        </div>
        <div
          class="bg-[#D9F1FD] animate-in slide-in-from-top-2"
          v-if="products_opened"
        >
          <div>
            <div
              class="py-4 px-6 hover:bg-[#b5dff3] transition-colors relative cursor-pointer"
              @click="mor_opened = !mor_opened"
            >
              <div class="font-semibold font-roobert-semibold text-[#011A27]">
                Merchant of Records
              </div>
              <div class="text-muted-foreground text-sm">
                Secure structure for managing financial transactions.
              </div>
              <ChevronRight
                :class="
                  cn(
                    'size-5 absolute right-4 top-1/2 -translate-y-1/2',
                    mor_opened ? 'rotate-90' : ''
                  )
                "
              />
            </div>
            <div
              class="bg-accent animate-in slide-in-from-left-2"
              v-if="mor_opened"
            >
              <NuxtLink
                class="flex gap-x-4 items-start p-3 transition-colors hover:bg-[#EEF9FD]"
                to="/collection"
              >
                <div class="shrink-0">
                  <MoneyIcon />
                </div>
                <div class="space-y-1">
                  <div
                    class="font-semibold font-roobert-semibold text-[#011A27]"
                  >
                    Collection
                  </div>
                  <div class="text-muted-foreground text-sm font-medium">
                    Collect payments via various channels and provide multiple
                    payment options for your customers.
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink
                class="flex gap-x-4 items-start p-3 transition-colors hover:bg-[#EEF9FD]"
                to="/payout"
              >
                <div class="shrink-0">
                  <WalletFlowIcon />
                </div>
                <div class="space-y-1">
                  <div
                    class="font-semibold font-roobert-semibold text-[#011A27]"
                  >
                    Payout
                  </div>
                  <div class="text-muted-foreground text-sm font-medium">
                    Our dependable and secure structure for managing financial
                    transactions
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <div>
            <div
              class="py-4 px-6 hover:bg-[#b5dff3] transition-colors relative cursor-pointer"
              @click="escrow_opened = !escrow_opened"
            >
              <div class="font-semibold font-roobert-semibold text-[#011A27]">
                Escrow
              </div>
              <div class="text-muted-foreground text-sm">
                Escrow technology ensures you get value for B2B and B2C
                payments.
              </div>
              <ChevronRight
                :class="
                  cn(
                    'size-5 absolute right-4 top-1/2 -translate-y-1/2 transition-transform',
                    escrow_opened ? 'rotate-90' : ''
                  )
                "
              />
            </div>
            <div
              class="bg-accent animate-in slide-in-from-left-2"
              v-if="escrow_opened"
            >
              <NuxtLink
                class="flex gap-x-4 items-start p-3 transition-colors hover:bg-[#EEF9FD]"
                to="/escrow"
              >
                <div class="shrink-0">
                  <WalletIcon />
                </div>
                <div class="space-y-1">
                  <div
                    class="font-semibold font-roobert-semibold text-[#011A27]"
                  >
                    Escrow services
                  </div>
                  <div class="text-muted-foreground text-sm font-medium">
                    Escrow service boost payment confidence for B2B & B2C
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          class="flex items-center justify-between py-6 border-b cursor-pointer"
          @click="resources_opened = !resources_opened"
        >
          <div>Resources</div>
          <ChevronRight
            :class="
              cn(
                'size-5 relative transition-transform',
                resources_opened ? 'rotate-90' : ''
              )
            "
          />
        </div>
        <div
          class="bg-[#D9F1FD] animate-in slide-in-from-top-2"
          v-if="resources_opened"
        >
          <div>
            <NuxtLink
              class="flex gap-x-4 items-start p-3 transition-colors hover:bg-[#EEF9FD]"
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
          </div>
        </div>
      </div>

      <NuxtLink
        class="flex items-center justify-between py-6 border-b"
        external
        to="https://docs.vesicash.com"
        target="_blank"
      >
        Developers
      </NuxtLink>

      <!-- <div class="flex items-center justify-between py-6 border-b">
        <div>Support</div>
      </div> -->
    </div>

    <div class="space-y-8 mt-10">
      <NuxtLink
        class="w-full block"
        to="https://app.vesicash.com/login"
        external
        target="_blank"
      >
        <Button class="w-full" :variant="'outline'"> Sign in </Button>
      </NuxtLink>
      <!-- <NuxtLink class="w-full block">
        <Button class="w-full"> Contact sales </Button>
      </NuxtLink> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "./shared/button.vue";
import { ChevronRight } from "lucide-vue-next";
import { cn } from "@/lib/utils";
import FilesIcon from "@/assets/svgs/files.svg";
import WalletIcon from "@/assets/svgs/wallet.svg";
import MoneyIcon from "@/assets/svgs/money.svg";
import WalletFlowIcon from "@/assets/svgs/wallet-flow.svg";

const products_opened = ref(false);
const mor_opened = ref(false);
const escrow_opened = ref(false);
const resources_opened = ref(false);

const toggleProducts = () => {
  products_opened.value = !products_opened.value;

  if (!products_opened.value) {
    mor_opened.value = false;
    escrow_opened.value = false;
  }
};
</script>
