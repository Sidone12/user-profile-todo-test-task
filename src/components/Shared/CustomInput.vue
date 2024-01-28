  
<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <input :placeholder="placeholder" :value="modelValue" v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)" class="rounded-[5px] p-[10px] w-full" type="text" />
</template>
