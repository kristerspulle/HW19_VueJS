<template>
  <NavBarComponent/>
  <RouterView/>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBarComponent from './components/NavBar-component.vue'

export type Champion = {
  id: number
  name: string
  title: string
  role: string
  difficulty: string
  region: string
  image: string
  detailImage: string
}

</script>

<style scoped></style>
