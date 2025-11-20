<template>
  <div>
    <button @click="emit('change', 'works')">click click</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['change'])

</script>

<style>

</style>