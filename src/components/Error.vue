<script setup>
defineProps({
  error: Array
})
</script>

<template>
<p v-if="error">{{error}}</p>
</template>

<style scoped>
p{
  color: red;
}
</style>