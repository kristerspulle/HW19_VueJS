<template>
  <RouterView :champions="allChampions"/>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue';

export type Champion = {
  id: number,
  name: string,
  title: string,
  role: string,
  difficulty: string,
  region: string,
  image: string
}

const allChampions = ref<Champion[]>([]);
const route = useRoute()

onMounted(async () => {
  const response = await fetch('http://localhost:3000/champions');
  allChampions.value = await response.json();
});

// onMounted(async () => {
//   const id = route.params.id
//   const response = await fetch(`http://localhost:3000/champions/${id}`);
//   champions.value = await response.json();
// });

</script>


<style scoped>
 
</style>
