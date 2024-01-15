<template>
   <form @submit.prevent="" class="form">
    <h3 class="title">Add a new Champion</h3>
    <InputComponent
      name="name"
      type="text"
      placeholder="Champion's name"
      text="Enter Champion's name"
      v-model="updateChampion.name"
    />
    <InputComponent
      name="title"
      type="text"
      placeholder="Champion's title"
      text="Enter Champion's title"
      v-model="updateChampion.title"
    />
    <InputComponent
      name="role"
      type="text"
      placeholder="Champion's role"
      text="Enter Champion's role"
      v-model="updateChampion.role"
    />
    <InputComponent
      name="difficulty"
      type="text"
      placeholder="Champion's difficulty"
      text="Enter Champion's difficulty"
      v-model="updateChampion.difficulty"
    />
    <InputComponent
      name="region"
      type="text"
      placeholder="Champion's region"
      text="Enter Champion's region"
      v-model="updateChampion.region"
    />
    <ButtonComponent type="submit" text="Update Champion" />
  </form>
</template>

<script lang="ts" setup>
import type { Champion } from '@/App.vue';
import InputComponent from '@/components/Input-component.vue';
import ButtonComponent from '@/components/Button-component.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const singleChampion = ref(null)
const route = useRoute()
const { id } = route.params

onMounted(() => {
  getChampion()
})

const getChampion = async () => {
  const response = await fetch(`http://localhost:3000/champions/${id}`)
  singleChampion.value = await response.json()

  updateChampion.value = {
  name: singleChampion.value?.name || '',
  title: singleChampion.value?.title || '',
  role: singleChampion.value?.role || '',
  difficulty: singleChampion.value?.difficulty || '',
  region: singleChampion.value?.region || '',
  image: singleChampion.value?.image || ''
}
}

const updateChampion = ref({
  name: '',
  title: '',
  role: '',
  difficulty: '',
  region: '',
  image: ''
})
</script>

<style>
</style>