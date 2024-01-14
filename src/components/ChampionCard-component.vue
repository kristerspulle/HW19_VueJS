<template>
  <router-link :to="'/' + champions.id" class="wrapper">
      <img class="image" :src="champions.image" :alt="champions.name">
      <div class="name">{{ champions.name }}</div>
      <div class="title">{{ champions.title }}</div>
      <div class="details">
        <p>{{ champions.difficulty }}</p>
        <p>|</p>
        <p>{{ champions.role }}</p>
        <p>|</p>
        <p>{{ champions.region }}</p>
      </div>
  </router-link>
</template>

<script setup lang="ts">
  defineProps(['champions'])
</script>

<style>
  .wrapper{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    width: 100%;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #1E282D;
    border-radius: 10px;
    text-decoration: none;
    color: inherit;
    background-color: #1E282D;
    align-items: center;
    width: 100%;
    max-width: 300px;
  }

  .name{
    font-weight: bold;
    font-size: 20px;
  }

  .image{
    border-radius: 10px;
    width: 270px;
    height: 302px;
  }

  .details{
    display: flex;
    gap: 5px;
    justify-content: space-evenly;
    align-items: center;
  }
</style>