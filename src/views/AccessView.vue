<script setup>

import File from "@/components/File.vue";
import {onMounted, ref} from "vue";
import Fetch_api from "../../helpers/Fetch_api.js";
let files = ref({})
onMounted(async () => {
  await getFiles()
})
async function getFiles(){
  files.value = await Fetch_api('shared', null,'get')
}
</script>

<template>
  <File v-for="elem in files" :file="elem" :getFiles="getFiles" :access="true"/>
</template>

<style scoped>

</style>