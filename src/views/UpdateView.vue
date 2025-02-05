<script setup>

import Error from "@/components/Error.vue";
import {ref} from "vue";
import Fetch_api from "../../helpers/Fetch_api.js";
import router from "@/router/index.js";
import {useRoute, useRouter} from "vue-router";
const form = ref({
  data: {
    name: ''
  },
  errors: {}
})
const route = useRoute()
async function submit(id){
  form.value.errors = {}
  let response = await Fetch_api(`files/${id}`, form.value.data, 'post')
  if(response.error){
    form.value.errors = response.error.errors
  }
  if(response.success){
    await router.replace('/')
  }
}
</script>

<template>
  <form action="" @submit.prevent="submit(route.params.id)">
    <label>name</label>
    <input name="name" type="text" v-model="form.data.name" :class="{'has_error': form.errors.name}" />
    <Error :error="form.errors.name" />
    <input type="submit" value="Submit" />
  </form>
</template>

<style scoped>
form{
  display: flex;
  flex-direction: column;
}
</style>