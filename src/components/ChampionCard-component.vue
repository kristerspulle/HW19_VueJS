<template>
  <template v-if="route.fullPath === '/' + id">
    <div class="wrapper">
      <img class="image" :src="image" :alt="name" />
      <div class="name">{{ name }}</div>
      <div class="title">{{ title }}</div>
      <div class="details">
        <p>{{ difficulty }}</p>
        <p>|</p>
        <p>{{ role }}</p>
        <p>|</p>
        <p>{{ region }}</p>
      </div>
    </div>
  </template>
  <template v-else>
    <router-link :to="'/' + id" class="wrapper">
      <img class="image" :src="image" :alt="name" />
      <div class="name">{{ name }}</div>
      <div class="title">{{ title }}</div>
    </router-link>
  </template>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps(['id', 'name', 'title', 'image', 'difficulty', 'role', 'region'])
const route = useRoute()
console.log('route', route.fullPath)
</script>

<style>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 100%;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #1e282d;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  background-color: #1e282d;
  align-items: center;
  width: 100%;
  max-width: 300px;
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

.details {
  display: flex;
  gap: 5px;
  justify-content: space-evenly;
  align-items: center;
}
</style>
