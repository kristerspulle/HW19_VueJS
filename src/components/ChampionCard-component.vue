<template>
  <template v-if="route.fullPath === `/${id}`">
    <div class="wrapper">
      <img class="detailImage" :src="detailImage" :alt="name" />
      <div class="name">{{ name }}</div>
      <div class="title">{{ title }}</div>
      <div class="details">
        <p><b>Difficulty: </b>{{ difficulty }}</p>
        <p><b>Role: </b>{{ role }}</p>
        <p><b>Region: </b>{{ region }}</p>
      </div>
    </div>
  </template>
  <template v-else>
    <router-link :to="'/' + id" class="listWrapper">
      <img class="image" :src="image" :alt="name" />
      <div class="name">{{ name }}</div>
      <div class="title">{{ title }}</div>
    </router-link>
  </template>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps(['id', 'name', 'title', 'image', 'difficulty', 'role', 'region', 'detailImage'])

const route = useRoute()
</script>

<style scoped>
.listWrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 100%;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #1e282d;
  background-color: #1e282d;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  align-items: center;
  width: 100%;
  max-width: 300px;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 100%;
  flex-direction: column;
  padding: 20px 20px 0 20px;
  border: 1px solid #1e282d;
  background-color: #1e282d;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  align-items: center;
  width: 100%;
}
.name {
  font-weight: bold;
  font-size: 20px;
}
.image {
  border-radius: 10px;
  width: 270px;
  height: 302px;
}
.detailImage {
  border-radius: 10px;
  aspect-ratio: 1.69;
  height: 600px;
}
.details {
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
}
</style>
