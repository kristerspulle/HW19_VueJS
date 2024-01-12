<template>
  <div>{{ data.name }}</div>
  <img :src="data.image" :alt="data.name">
  <div>
    {{ data.title }}
  </div>
</template>

<script setup lang="ts">
  defineProps(['data'])
</script>

<style></style>