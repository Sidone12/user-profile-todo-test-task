<script setup lang="ts">
import CustomButton from '../components/Shared/CustomButton.vue';
import { useTodosStore } from '../stores/todos';
import { useUserStore } from '@/stores/user';
import { ref, computed } from 'vue';
import type { UserStore } from '@/stores/user';
import CustomInput from '../components/Shared/custominput.vue'

const userStore = useUserStore() as UserStore;
const todosStore = useTodosStore();


let tokenFilter = ref<string>('')


const completedFilter = ref<string>('All');


const mytodos = ref<string>('All todos');
const userIdFilter = computed(() => {
  if (mytodos.value === 'All todos') {
    return null;
  }
  return userStore.user.id;
});



</script>

<template>
  <div class="flex justify-between gap-5 w-[600px] sm:w-full sm:px-5 sm:flex-col sm:items-center">
    <CustomInput placeholder="Search ... " v-model="tokenFilter" />
    <div class=" w-3/4 flex gap-5 ">
      <div class="w-full flex">
        <select class="rounded py-2 w-full" v-model="mytodos">
          <option>All todos</option>
          <option>My todos</option>
        </select>
      </div>
      <div class="w-full flex">
        <select class="rounded py-2 w-full" v-model="completedFilter">
          <option >All</option>
          <option>Completed</option>
          <option>Uncompleted</option>
          <option>Favorites</option>
        </select>
      </div>
    </div>
    <div class="w-1/3 sm:w-full flex">
      <CustomButton @click.native="todosStore.filteredTodos(tokenFilter, completedFilter, userIdFilter  )" :title="'Filter'" />
    </div>
  </div>
</template>
