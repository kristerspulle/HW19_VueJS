<template>
  <div class="wrapper">
    <div class="singleCard">
      <ChampionCard
        :id="singleChampion?.id"
        :title="singleChampion?.title"
        :name="singleChampion?.name"
        :difficulty="singleChampion?.difficulty"
        :role="singleChampion?.role"
        :region="singleChampion?.region"
        :image="singleChampion?.image"
        :detailImage="singleChampion?.detailImage"
      />
      <div class="buttonWrapper">
        <ButtonComponent text="Delete" type="button" @click="deleteChampion" />
        <router-link :to="`/editchampion/${singleChampion?.id}`" class="button">Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Champion } from '@/App.vue'
import ChampionCard from '@/components/ChampionCard-component.vue'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ButtonComponent from '@/components/Button-component.vue'

const route = useRoute()
const router = useRouter()
const { id } = route.params
const singleChampion = ref<Champion | null>(null)

onMounted((): void => {
  getChampion()
})

const getChampion = async (): Promise<void> => {
  const response = await fetch(`http://localhost:3000/champions/${id}`)
  singleChampion.value = await response.json()
}

const deleteChampion = async (): Promise<void> => {
  await fetch(`http://localhost:3000/champions/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  router.push('/')
}
</script>

<style scoped>
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}
.singleCard{
  display: flex;
  flex-direction: column;
  border: 1px solid #1e282d;
  background-color: #1e282d;
  margin-top: 120px;
  border-radius: 10px;
}
.buttonWrapper{
  display: flex;
  justify-content: center;
}
.button {
  padding: 10px 20px;
  margin: 10px;
  border-radius: 10px;
  background-color: #cdfafa;
  border: 1px solid #cdfafa;
  text-decoration: none;
  color: #1e282d;
}
</style>