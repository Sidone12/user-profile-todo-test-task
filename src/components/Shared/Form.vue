<script setup lang="ts">
import CustomInput from '../Shared/CustomInput.vue';
import CustomButton from '../Shared/CustomButton.vue';
import ModalInfo from './ModalInfo.vue';
import { FormData, ModalStatus } from '@/api/types';
import { getUser } from '@/api/getUser';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const router = useRouter();

const modalStatus = ref<ModalStatus>({
  errorMessage: '',
  isModalVisible: false
})
const showModal = () => {
  modalStatus.value.isModalVisible = true;
}
const closeModal = () => {
  modalStatus.value.isModalVisible = false;
}

const formData = ref<FormData>({
  username: 'Karianne',
  phoneNumber: '493-170-9623',
});

const handleInput = (string) => {
  // Залишаємо лише числа і символи
  return string.replace(/[^0-9a-zA-Z-()-*+-=]/g, "");

};

const handleSubmit = async () => {
  if (!formData.value.username.trim()) {
    modalStatus.value.errorMessage = 'Будь ласка, введіть ім\'я';
    showModal()
    return;
  }

  if (!formData.value.phoneNumber.trim()) {
    modalStatus.value.errorMessage = 'Будь ласка, введіть телефон';
    showModal()
    return;
  }

  const data = await getUser();

  formData.value.phoneNumber = handleInput(formData.value.phoneNumber)

  let result = data.find(el => el.username === formData.value.username.trim() && el.phone.split("x")[0].trim() === formData.value.phoneNumber.trim());

  if (result) {
    router.push('/userProfile');
    userStore.addUser(result);
  } else {
    modalStatus.value.errorMessage = 'Будь ласка, коректний username та телефон';
    showModal()
    formData.value.username = '';
    formData.value.phoneNumber = '';
    return;
  }
};

</script>

<template>
  <div class="w-[477px] h-[299px] flex flex-col items-center bg-brand-gray-4 rounded-[5px] sm:w-full">
    <div class="bg-brand-gray-3 h-[51px] py-[21px] w-full flex justify-center items-center rounded-t-[5px] mb-auto">
      description
    </div>
    <div class="h-[51px] py-[21px] w-full flex justify-start items-center rounded-t-[5px] px-[25px]">
      description
    </div>
    <form @submit.prevent="handleSubmit" action="" class="flex flex-col w-full px-[25px]">
      <div class="pb-[20px]">
        <CustomInput :placeholder="'Username'" v-model="formData.username" />
      </div>
      <div class="pb-[25px]">
        <CustomInput :placeholder="'Phone Number'" v-model="formData.phoneNumber" />
      </div>
      <div class="pb-[20px]">
        <CustomButton type="submit" :title="'Register'" />
      </div>
    </form>
    <ModalInfo @close="closeModal" :title="modalStatus.errorMessage" :isModalVisible="modalStatus.isModalVisible" />
  </div>
</template>