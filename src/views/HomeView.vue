<script setup>
import Navbar from '../components/navigation/Navbar.vue';
import Footer from '../components/navigation/Footer.vue'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="flex flex-col items-center">
    <Navbar/>
    <TheWelcome />
    <Footer />
  </main>
</template>
