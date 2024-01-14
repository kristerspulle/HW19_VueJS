<template>
  <div class="newChampion">
    <h3 class="title">League of Legends Champion list</h3>
    <router-link class="button" to="/newchampion">Add Champion</router-link>
  </div>
  <div class="cards">
    <div v-for="champion in champions" v-bind:key="champion.id">
      <ChampionCard :champions="champion"/>
      <ButtonComponent text="delete" type="button" @click="$emit('deleteChampion', champion.id)"/>
    </div>
    
  </div>
</template>

<script setup lang="ts">
  import ChampionCard from '@/components/ChampionCard-component.vue';
  import ButtonComponent from '@/components/Button-component.vue';
  defineProps(['champions'])
  defineEmits(['deleteChampion'])
</script>

<style scoped>
  .newChampion{
    display: flex;
    justify-content: flex-end;
    padding: 20px 45px;
    align-items: center;
  }
  .title{
    padding-right: 410px;
    font-size: 30px;
    justify-self: center;
  }
  .button{
    padding: 10px 15px;
    background-color: #CDFAFA;
    border: 1px solid #CDFAFA;
    border-radius: 10px;
    text-decoration: none;
    color: #1E282D;
  }
  .cards{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
</style>