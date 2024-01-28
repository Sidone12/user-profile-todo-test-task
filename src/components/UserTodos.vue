
<script setup>

import UserTodo from './UserTodo.vue';
import { onMounted, computed, ref } from 'vue'
import { useTodosStore } from '@/stores/todos';
const todosStore = useTodosStore();
onMounted(todosStore.getTodos)


</script>

<template>
    <div class="w-full px-20 py-20 md:px-5">
        <div class="grid grid-cols-2 gap-4 text-brand-grey-1 md:grid-cols-1">
            <UserTodo @favor="todosStore.addFavorite(todo.id)" v-for="todo in todosStore.todos" :key="todo.id" :todo="todo"
                :favored="todosStore.favoriteIds.includes(todo.id)" :class="todo.completed ? 'bg-brand-green-1' : ''" />
        </div>
        <div class="flex justify-center w-full" v-if="todosStore.todos.length < 1">
            <h1 class="text-white text-xl">
                No such todos
            </h1>
        </div>
    </div>
</template>
