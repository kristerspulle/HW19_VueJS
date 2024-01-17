<template>
  <div class="wrapper">
    <FormComponent @add-new-champion="addChampion" />
  </div>
</template>
<script lang="ts" setup>
import type { Champion } from '@/App.vue'
import FormComponent from '@/components/form-component.vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const notification = (): void => {
  toast('New Champion added!', {
    theme: 'dark',
    type: 'default',
    position: 'top-center',
    transition: 'zoom',
    dangerouslyHTMLString: true
  })
}

const addChampion = async (newChampion: Champion) => {
  await fetch('http://localhost:3000/champions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...newChampion,
      detailImage: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${newChampion.name}_0.jpg`
    })
  })
  setTimeout(() => {
    notification()
  })
}
</script>

<style scoped>
.wrapper {
  margin-top: 120px;
  margin-bottom: 79px;
}
</style>
