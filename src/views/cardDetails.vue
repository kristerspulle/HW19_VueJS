<template>
  <div>
    <ChampionCard :champions="selectedChampion"/>
  </div>
</template>

<script setup lang="ts">
import type { Champion } from '@/App.vue';
import ChampionCard from '@/components/ChampionCard-component.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

let selectedChampion = ref<Champion | null>(null)


onMounted(async () => {
  const id = route.params.id
  const response = await fetch(`http://localhost:3000/champions/${id}`);
  return selectedChampion.value = await response.json();
 
})


watch(selectedChampion, (newChampion) => {
  console.log(selectedChampion.value);
});

</script>