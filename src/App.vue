<template>
  <RouterView
    :allChampions="allChampions"
    @add-new-champion="addChampion"
    @delete-champion="deleteChampion"
  />
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

export type Champion = {
  id: number
  name: string
  title: string
  role: string
  difficulty: string
  region: string
  image: string
}
const route = useRoute()
const { id } = route.params
const allChampions = ref<Champion[]>([])


onMounted(async () => {
  getChampions()
})

const getChampions = async () => {
  const response = await fetch('http://localhost:3000/champions')
  allChampions.value = await response.json()
}

const addChampion = async (newChampion: Champion) => {
  await fetch('http://localhost:3000/champions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newChampion)
  })
  getChampions()
}

const deleteChampion = async (id: number) => {
  await fetch(`http://localhost:3000/champions/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  getChampions()
}

const updateChampion = async (id: number, data: Champion) => {
  await fetch(`http://localhost:3000/champions/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
</script>

<style scoped></style>
