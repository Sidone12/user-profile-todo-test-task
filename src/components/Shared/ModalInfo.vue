<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

defineProps({
    title: String,
    isModalVisible: Boolean
})
const emit = defineEmits(['close'])
</script>


<template>
    <Transition name="modal">
        <div v-if="isModalVisible" class="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex transition-opacity ease duration-300">
            <div class="w-full h-screen flex flex-col justify-center">
                <div class="w-96 h-32 mx-auto p-5 bg-white rounded-md shadow-md transition-all ease-in-out duration-300">
                    <div class="flex justify-between gap-5">
                        {{ title }}
                        <button class="rounded-[5px] p-[10px]  bg-red-400 text-white font-sans text-[17px] font-semibold leading-[21px] tracking-{[-0.425px]}" @click="emit('close')">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

