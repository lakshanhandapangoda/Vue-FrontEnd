<script setup>
import Navbar from './components/Navbar.vue';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';
</script>

<template>

<Navbar/>

<RouterView/>

</template>

<style scoped>

</style>