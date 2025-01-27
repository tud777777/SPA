<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/authorization">Authorization</RouterLink>
      <RouterLink to="/registration">Registration</RouterLink>
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