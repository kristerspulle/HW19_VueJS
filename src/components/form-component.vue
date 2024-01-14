<template>
  <form action="submit" class="form">
    <h3 class="title">Add a new Champion</h3>
    <InputComponent
      name="name"
      type="text"
      placeholder="Champion's name"
      text="Enter Champion's name"
    />
    <InputComponent
      name="title"
      type="text"
      placeholder="Champion's title"
      text="Enter Champion's title"
    />
    <InputComponent
      name="role"
      type="text"
      placeholder="Champion's role"
      text="Enter Champion's role"
    />
    <InputComponent
      name="difficulty"
      type="text"
      placeholder="Champion's difficulty"
      text="Enter Champion's difficulty"
    />
    <InputComponent
      name="region"
      type="text"
      placeholder="Champion's region"
      text="Enter Champion's region"
    />
    <InputComponent
      name="image"
      type="text"
      placeholder="Champion's image URL"
      text="Enter Champion's image URL"
    />
    <ButtonComponent type="submit" text="Add Champion"/>
  </form>
</template>

<script lang="ts" setup>
import ButtonComponent from './Button-component.vue'
import InputComponent from './Input-component.vue'

defineProps({})
</script>

<style scoped>
  .form{
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #1E282D;
    padding: 20px 30px;
    width: 100%;
    max-width: 500px;
    text-align: center;
    border-radius: 10px;
    margin: 0 auto;
  }

  .title{
    font-size: 30px;
    text-align: center;
    margin-bottom: 10px;
  }
</style>