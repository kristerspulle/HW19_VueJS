<template>
  <button class="button" :type="type">{{ text }}</button>
</template>

<script lang="ts" setup>
defineProps({
  text: String,
  type: {
    type: String as () => 'submit' | 'button' | 'reset',
    default: 'button'
  }
})
</script>

<style scoped>
.button {
  padding: 10px 20px;
  margin: 10px;
  border-radius: 10px;
  background-color: #cdfafa;
  border: 1px solid #cdfafa;
  cursor: pointer;
}
</style>
