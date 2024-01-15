<template>
  <div>
    <ChampionCard
      :id="singleChampion?.id"
      :title="singleChampion?.title"
      :name="singleChampion?.name"
      :difficulty="singleChampion?.difficulty"
      :role="singleChampion?.role"
      :region="singleChampion?.region"
      :image="singleChampion?.image"
    />
  </div>
</template>

<script setup lang="ts">
import type { Champion } from '@/App.vue'
import ChampionCard from '@/components/ChampionCard-component.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { id } = route.params
const singleChampion = ref<Champion | null>(null)

onMounted(() => {
  getChampion()
})

const getChampion = async () => {
  const response = await fetch(`http://localhost:3000/champions/${id}`)
  singleChampion.value = await response.json()
}
</script>
