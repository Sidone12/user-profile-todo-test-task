<script setup lang="ts">
import { ref } from 'vue';
import CustomButton from './CustomButton.vue';
import CustomInput from './CustomInput.vue';
import { useTodosStore } from '../../stores/todos';
import type { Todo } from '../../api/types'; 

const todosStore = useTodosStore();

let todo = ref<string>(''); 

const handleSubmit = () => {
  const todoId = new Date().getTime();
  const newTodo: Todo = { 
    id: todoId,
    title: todo.value,
    userId: 1,
    completed: false,
  };
  todosStore.addNewTodo(newTodo);
  todo.value = '';
};
</script>

<template>
  <div class="flex justify-center  w-[600px] py-6 sm:w-full sm:px-5">
    <form @submit.prevent="handleSubmit" class="w-full flex justify-center gap-8 sm:flex-col">
      <CustomInput :placeholder="'Add new...'" v-model="todo" />
      <div class="w-1/3 sm:w-full">
        <CustomButton type="submit" :title="'Add Todo'" />
      </div>
    </form>
  </div>
</template>