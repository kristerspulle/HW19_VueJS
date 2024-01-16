<template>
  <nav class="nav">
    <router-link class="logo" to="/"/>
    <h3 class="title">League of Legends Champion list</h3>
    <router-link class="button" to="/newchampion">Add Champion</router-link>
  </nav>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.nav{
  display: flex;
  background-color: #1E282D;
  width: 100%;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
}
.logo{
  width: 50px;
  height: 50px;
  background-image: url(https://preview.redd.it/xxeelg0amua51.png?width=256&format=png&auto=webp&s=1025c1abe85a536dbe72e99c90685031649999f8);
  background-size: 50px 50px;
}
.title {
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
</style>