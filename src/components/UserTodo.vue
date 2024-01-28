<script setup>
import heartFilled from '@/assets/heartFilled.png'
import heartOutline from "@/assets/heartOutline.png"
const props = defineProps({
    todo: Object,
    favored: Boolean
})

const emit = defineEmits(['favor'])

</script>


<template>
    <div  :key="todo.id" class="bg-brand-gray-3 p-4 rounded-md flex gap-2 justify-between">
        <h2 class="text-base">
            {{ todo.title }}
        </h2>
         <img class="w-6 h-6 cursor-pointer" :src="favored ? heartFilled : heartOutline" alt=""
        @click="emit('favor', todo.id)"> 
    </div>
</template>


