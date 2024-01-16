<template>
   <form @submit.prevent="updateChampion" class="form">
    <h3 class="title">Update Champion</h3>
    <InputComponent
      name="name"
      type="text"
      placeholder="Champion's name"
      text="Update Champion's name"
      v-model="updateChampionValue.name"
    />
    <InputComponent
      name="title"
      type="text"
      placeholder="Champion's title"
      text="Update Champion's title"
      v-model="updateChampionValue.title"
    />
    <InputComponent
      name="role"
      type="text"
      placeholder="Champion's role"
      text="Update Champion's role"
      v-model="updateChampionValue.role"
    />
    <InputComponent
      name="difficulty"
      type="text"
      placeholder="Champion's difficulty"
      text="Update Champion's difficulty"
      v-model="updateChampionValue.difficulty"
    />
    <InputComponent
      name="region"
      type="text"
      placeholder="Champion's region"
      text="Update Champion's region"
      v-model="updateChampionValue.region"
    />
    <ButtonComponent type="submit" text="Update Champion" />
  </form>
</template>

<script lang="ts" setup>
import type { Champion } from '@/App.vue';
import InputComponent from '@/components/Input-component.vue';
import ButtonComponent from '@/components/Button-component.vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const singleChampion = ref<Champion | null>(null)
const route = useRoute()
const router = useRouter()
const { id } = route.params

onMounted((): void => {
  getChampion()
})

const getChampion = async (): Promise<void> => {
  const response = await fetch(`http://localhost:3000/champions/${id}`)
  singleChampion.value = await response.json()

  updateChampionValue.value = {
    name: singleChampion.value?.name || '',
    title: singleChampion.value?.title || '',
    role: singleChampion.value?.role || '',
    difficulty: singleChampion.value?.difficulty || '',
    region: singleChampion.value?.region || '',
    image: singleChampion.value?.image || '',
    detailImage: singleChampion.value?.detailImage || ''
  }
}

const updateChampionValue = ref({
  name: '',
  title: '',
  role: '',
  difficulty: '',
  region: '',
  image: '',
  detailImage: ''
})

const updateChampion = async (): Promise<void> => {
  await fetch(`http://localhost:3000/champions/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateChampionValue.value)
  })
  router.push(`/${id}`)
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #1e282d;
  padding: 20px 30px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 120px;
}
.title {
  font-size: 30px;
  text-align: center;
  margin-bottom: 10px;
}
</style>