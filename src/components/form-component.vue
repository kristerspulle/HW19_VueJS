<template>
  <form @submit.prevent="handleSubmit" class="form">
    <h3 class="title">Add a new Champion</h3>
    <InputComponent
      name="name"
      type="text"
      placeholder="Champion's name"
      text="Enter Champion's name"
      v-model="newChampion.name"
    />
    <InputComponent
      name="title"
      type="text"
      placeholder="Champion's title"
      text="Enter Champion's title"
      v-model="newChampion.title"
    />
    <InputComponent
      name="role"
      type="text"
      placeholder="Champion's role"
      text="Enter Champion's role"
      v-model="newChampion.role"
    />
    <InputComponent
      name="difficulty"
      type="text"
      placeholder="Champion's difficulty"
      text="Enter Champion's difficulty"
      v-model="newChampion.difficulty"
    />
    <InputComponent
      name="region"
      type="text"
      placeholder="Champion's region"
      text="Enter Champion's region"
      v-model="newChampion.region"
    />
    <InputComponent
      name="image"
      type="text"
      placeholder="Champion's image URL"
      text="Enter Champion's image URL"
      v-model="newChampion.image"
    />
    <ButtonComponent type="submit" text="Add Champion" />
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ButtonComponent from './Button-component.vue'
import InputComponent from './Input-component.vue'

const newChampion = ref({
  name: '',
  title: '',
  role: '',
  difficulty: '',
  region: '',
  image: ''
})
import { useRouter } from 'vue-router'

const route = useRouter()
const handleSubmit = () => {
  emit('addNewChampion', newChampion.value)
  newChampion.value = {
    name: '',
    title: '',
    role: '',
    difficulty: '',
    region: '',
    image: ''
  }
  route.push('/')
}

const emit = defineEmits(['addNewChampion'])
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
}

.title {
  font-size: 30px;
  text-align: center;
  margin-bottom: 10px;
}
</style>
