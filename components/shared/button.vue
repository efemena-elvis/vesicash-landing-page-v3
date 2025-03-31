<template>
  <button :class="buttonVariants({ variant, size })" :disabled="disabled">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button-styles";

type ButtonProps = VariantProps<typeof buttonVariants>;

withDefaults(
  defineProps<{
    variant?: ButtonProps["variant"];
    size?: ButtonProps["size"];
    disabled?: boolean;
  }>(),
  {
    variant: "primary",
    size: "lg",
    disabled: false,
  }
);
</script>
