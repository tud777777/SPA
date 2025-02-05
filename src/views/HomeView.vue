<script setup>
import {inject, onBeforeMount, onMounted, ref} from "vue";
import Fetch_api from "../../helpers/Fetch_api.js";
import File from "@/components/File.vue";
let files = ref({})
onMounted(async () => {
  await getFiles()
})
async function getFiles(){
  files.value = await Fetch_api('files/disk', null,'get')
}
</script>

<template>
<File v-for="elem in files" :file="elem" :getFiles="getFiles" />
</template>

<style scoped>

</style>