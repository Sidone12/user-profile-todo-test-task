<script setup>
import CustomInput from '../Shared/custominput.vue'
import CustomButton from '../Shared/CustomButton.vue';
import { ref } from 'vue'
import { useTodosStore } from '@/stores/todos';

const todosStore = useTodosStore();

let token = ref('')

const delSearch = () => {
    todosStore.setSearchtoken('')
    token.value = ''
}

</script>

<template>
    <div class="flex w-[600px] py-5 gap-5 sm:w-full sm:px-5">
        
        <div class="w-1/2 flex gap-2">
            <CustomButton @click.native="todosStore.setSearchtoken(token)" :title="'Search'" />
            <CustomButton class=" bg-red-400" v-if="todosStore.searchtoken?.length > 0"
                @click.native="delSearch" :title="'X'" />
        </div>
    </div>
</template>