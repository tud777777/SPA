<script setup>
import {inject, ref} from "vue";
import {useRouter} from "vue-router";
import Fetch_api from "../../helpers/Fetch_api.js";
import Error from "@/components/Error.vue";
import router from "@/router/index.js";

const updateToken = inject("updateToken")
const form = ref({
  data: {
    email: '',
    password: '',
  },
  errors: {}
})
async function submit(){
  form.value.errors = {}
  let response = await Fetch_api('authorization', form.value.data, 'post')
  if(response.error){
    form.value.errors = response.error.errors
  }
  if(response.data.token){
    updateToken(response.data.token)
    await router.replace('/')
  }
}
</script>

<template>
  <form action="" @submit.prevent="submit()">
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