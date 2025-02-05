<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import {provide, ref} from "vue";
const token = ref(localStorage.getItem('token'));
function updateToken(newToken){
  if (!newToken){
    localStorage.removeItem('token');
  }
  else{
    localStorage.setItem('token',newToken);
  }
  token.value = newToken;
}
provide('token',token)
provide('updateToken', updateToken)

</script>

<template>
  <Header/>
  <RouterView />
</template>

<style>
.has_error{
  border: 1px solid red !important;
}
</style>
