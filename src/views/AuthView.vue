<script setup>

</script>

<template>
  <form action="">
    <label>email</label>
    <input name="email" type="email" v-model="name" />

    <label>password</label>
    <input name="password" type="password" v-model="name" />

    <input type="submit" value="Submit" />
  </form>
</template>

<style scoped>
form{
  display: flex;
  flex-direction: column;
}
</style>