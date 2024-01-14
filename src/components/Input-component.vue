<template>
  <label :for="name">{{ text }}</label>
  <input
    class="input"
    :id="name"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script lang="ts" setup>
defineProps({
  name: String,
  text: String,
  placeholder: String,
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String as () => HTMLInputElement['type'],
    default: 'text'
  }
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.input {
  border-radius: 10px;
  padding: 5px 15px;
  border: 1px solid #005a82;
  background-color: #005a82;
  color: rgb(205, 250, 250);
}

.input::placeholder {
  color: rgb(205, 250, 250);
}
</style>
