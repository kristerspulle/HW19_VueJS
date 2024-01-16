<template>
  <div class="cards">
    <div v-for="champion in allChampions" v-bind:key="champion.id">
      <ChampionCard
        :id="champion.id"
        :title="champion.title"
        :name="champion.name"
        :difficulty="champion.difficulty"
        :role="champion.role"
        :region="champion.region"
        :image="champion.image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChampionCard from '@/components/ChampionCard-component.vue'
import type { Champion } from '@/App.vue';
import { onMounted, ref} from 'vue'

const allChampions = ref<Champion[]>([])

onMounted(async (): Promise<void> => {
  getChampions()
})

const getChampions = async (): Promise<void> => {
  const response = await fetch('http://localhost:3000/champions')
  allChampions.value = await response.json()
}
</script>

<style scoped>

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 0 100px;
  padding: 120px 0;
  
}
</style>
