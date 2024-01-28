<template>
  <button
    class="rounded-[5px] p-[10px] w-full bg-brand-green-1 text-white font-sans text-[17px] font-semibold leading-[21px] tracking-{[-0.425px]}">
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  type: String,
  title: String,
});
</script>