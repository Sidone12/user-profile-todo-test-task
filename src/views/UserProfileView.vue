<script setup>
import UserProfile from '@/components/UserProfile.vue';
import UserTodos from '@/components/UserTodos.vue';
import FormTodos from '@/components/Shared/FormTodos.vue';
import FilterComponent from '@/components/FilterComponent.vue';
import Navbar from '@/components/navigation/Navbar.vue'
import CustomButton from '../components/Shared/CustomButton.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="pb-10 flex flex-col items-center w-full">
    <Navbar>
     <div class="flex justify-end  px-8 py-2">
      <div >
        <CustomButton @click.native="router.push('/');" :title="'Go Back'"/>
      </div>
     </div>
    </Navbar>
    <UserProfile />
    <FormTodos />
    <FilterComponent />
    <UserTodos />
  </div>
</template>

