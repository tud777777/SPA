<script setup>
import {ref} from "vue";
import Fetch_api from "../../helpers/Fetch_api.js";
import Error from "@/components/Error.vue";
import router from "@/router/index.js";


const form = ref({
  data: {
    first_name: '',
    last_name: '',
    patronymic: '',
    email: '',
    password: '',
    birth_date: '',
  },
  errors: {}
})

async function submit(){
  form.value.errors = {}
  let response = await Fetch_api('registration', form.value.data, 'post')
  if(response.error){
    form.value.errors = response.error.errors
  }
  if(response.data.code === 201){
    await router.replace('/authorization')
  }
}
</script>

<template>
  {{form}}
  <form action="" @submit.prevent="submit()">
    <label>first_name</label>
      <input name="first_name" type="text" v-model="form.data.first_name" :class="{'has_error': form.errors.first_name}" />
    <Error :error="form.errors.first_name" />
    <label>last_name</label>
      <input name="last_name" type="text" v-model="form.data.last_name" :class="{'has_error': form.errors.last_name}" />
    <Error :error="form.errors.last_name" />
    <label>patronymic</label>
      <input name="patronymic" type="text" v-model="form.data.patronymic" :class="{'has_error': form.errors.patronymic}" />
    <Error :error="form.errors.patronymic" />
    <label>birth date</label>
      <input name="birth_date" type="date" v-model="form.data.birth_date" :class="{'has_error': form.errors.birth_date}" />
    <Error :error="form.errors.birth_date" />
    <label>email</label>
      <input name="email" type="email" v-model="form.data.email" :class="{'has_error': form.errors.email}" />
    <Error :error="form.errors.email" />
    <label>password</label>
      <input name="password" type="password" v-model="form.data.password" :class="{'has_error': form.errors.password}" />
    <Error :error="form.errors.password" />

    <input type="submit" value="Submit" />
  </form>
</template>

<style scoped>
  form{
    display: flex;
    flex-direction: column;
  }
</style>