<script setup>

</script>

<template>
  <form action="">
    <label>first_name</label>
      <input name="first_name" type="text" v-model="name" />

    <label>last_name</label>
      <input name="last_name" type="text" v-model="name" />

    <label>patronymic</label>
      <input name="patronymic" type="text" v-model="name" />

    <label>birth date</label>
      <input name="birth_date" type="date" v-model="name" />

    <label>email</label>
      <input name="email" type="email" v-model="name" />

    <label>password</label>
      <input name="password" type="password" v-model="name" />

    <label>repeat password</label>
      <input name="repeat_password" type="password" v-model="name" />

    <input type="submit" value="Submit" />
  </form>
</template>

<style scoped>
  form{
    display: flex;
    flex-direction: column;
  }
</style>