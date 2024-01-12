<template>
  <button :type='type'>{{ text }}</button>
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

<style>
</style>