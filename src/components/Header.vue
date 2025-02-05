<script setup>

import {RouterLink} from "vue-router";
import {inject} from "vue";
import Fetch_api from "../../helpers/Fetch_api.js";
import router from "@/router/index.js";

const token = inject('token')
const updateToken = inject('updateToken')

async function logout(){
  await Fetch_api('logout', null, 'post')
  updateToken(null)
  await router.replace('/authorization')
}
</script>

<template>
  <header>
    <nav>
      <RouterLink v-if="token" to="/">Home</RouterLink>
      <RouterLink v-if="token" to="/access">Access</RouterLink>
      <a v-if="token" href="#" @click.prevent="logout">Logout</a>
      <RouterLink v-if="!token" to="/authorization">Authorization</RouterLink>
      <RouterLink v-if="!token" to="/registration">Registration</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #000;
}
nav{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: left;
  align-items: center;
}
a{
  text-decoration: none;
  color: white;
  padding: 10px;
}
</style>