<script setup>
import Fetch_api from "../../helpers/Fetch_api.js";

const props = defineProps({
  file: {
    type: Object,
  },
  getFiles:{
    type: Function,
  },
  access: {
    type: Boolean
  }
})
async function deleteFile(id){
  await Fetch_api(`files/${id}`, null,'delete')
  await props.getFiles()
}
async function downloadFile(id){
  await Fetch_api(`files/${id}`, null,'get', true)
}
</script>

<template>
  <div>
    <div>
      <p>id: {{file.file_id}}</p>
      <p>Name: {{file.name}}</p>
    </div>
    <div>
      <a href="#" v-if="!access" @click.prevent="deleteFile(file.file_id)">delete</a><br>
      <RouterLink v-if="!access" :to="`/update/${file.file_id}`">update</RouterLink><br>
      <RouterLink v-if="!access" :to="`/chaccess/${file.file_id}`">change access</RouterLink><br>
      <a href="#" @click.prevent="downloadFile(file.file_id)">download</a>
    </div>
  </div>
</template>

<style scoped>

</style>