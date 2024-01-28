<script setup>
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'

const userStore = useUserStore()

let user = ref({})
user = userStore.user

</script>

<template>
    <div class="flex justify-center w-full sm:px-5">
        <div class="w-[600px] flex flex-col items-center bg-brand-gray-4 rounded-[5px] sm:w-full">
            <div class="bg-brand-gray-3 py-6 px-6 w-full flex flex-col items-start rounded-t-[5px]">
                <h1 class=" text-xl font-medium">{{ user.name }}</h1>
                <p><span class=" text-md font-medium">Email:</span> {{ user.email }}</p>
                <p><span class=" text-md font-medium">Phone:</span> {{ user.phone }}</p>
                <p><span class=" text-md font-medium">Username:</span> {{ user.username }}</p>
                <p><span class=" text-md font-medium">Website:</span> {{ user.website }}</p>
            </div>
            <div class="grid grid-cols-3 gap-4 px-6 py-6 w-full sm:grid-cols-1">
                <div>
                    <h2 class=" text-lg font-medium">Address:</h2>
                    <p><span class=" text-md font-medium">City:</span> {{ user.address.city }}</p>
                    <p><span class=" text-md font-medium">Street:</span> {{ user.address.street }}</p>
                    <p><span class=" text-md font-medium">Suite:</span> {{ user.address.suite }}</p>
                    <p><span class=" text-md font-medium">Zipcode:</span> {{ user.address.zipcode }}</p>
                </div>
                <div class="col-span-2">
                    <h2 class=" text-lg font-medium">Company:</h2>
                    <p><span class=" text-md font-medium">Name:</span> {{ user.company.name }}</p>
                    <p><span class=" text-md font-medium">Type:</span> {{ user.company.catchPhrase }}</p>
                    <p><span class=" text-md font-medium">Spesific:</span> {{ user.company.bs }}</p>
                </div>
            </div>
        </div>
    </div>
</template>



