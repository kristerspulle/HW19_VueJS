<template>
  <div class="newChampion">
    <h3 class="title">League of Legends Champion list</h3>
    <router-link class="button" to="/newchampion">Add Champion</router-link>
  </div>
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
      <ButtonComponent text="delete" type="button" @click="$emit('deleteChampion', champion.id)" />
      <router-link :to="'/editchampion/' + champion.id" class="button"
        ><span @click.prevent="$emit('championId', champion.id)"></span>Edit</router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import ChampionCard from '@/components/ChampionCard-component.vue'
import ButtonComponent from '@/components/Button-component.vue'
defineProps(['allChampions'])
defineEmits(['deleteChampion', 'championId'])
</script>

<style scoped>
.newChampion {
  display: flex;
  justify-content: flex-end;
  padding: 20px 45px;
  align-items: center;
}
.title {
  padding-right: 410px;
  font-size: 30px;
  justify-self: center;
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
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
