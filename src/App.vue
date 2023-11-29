<script setup>
import HeaderComponent from './components/Header/HeaderComponent.vue';
import HomeComponent from './components/HomeComponent.vue';

</script>

<template>
  <div>
    <HeaderComponent />
    <router-view></router-view>
  </div>
</template>
