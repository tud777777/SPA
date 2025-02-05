<script setup>
import {onMounted, ref} from "vue";
import Fetch_api from "../../helpers/Fetch_api.js";
import {useRoute} from "vue-router";
import Error from "@/components/Error.vue";
import router from "@/router/index.js";
let route = useRoute()

const form = ref({
  data: {
    email: '',
  },
  errors: {}
})
async function submit(id){
  form.value.errors = {}
  let response = await Fetch_api(`files/${id}/access`, form.value.data, 'post')
  if(response.error){
    form.value.errors = response.error.errors
  }
  else{
    await router.replace('/')
  }
}
</script>

<template>
  <form action="" @submit.prevent="submit(route.params.id)">
    <label>email</label>
    <input name="email" type="email" v-model="form.data.email" :class="{'has_error': form.errors.email}" />
    <Error :error="form.errors.email" />
    <input type="submit" value="Submit" />
  </form>
</template>

<style scoped>
form{
  display: flex;
  flex-direction: column;
}
</style>