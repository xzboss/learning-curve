<template>
  <div>
    <button @click="handleClick()">update</button>
  </div>
</template>
<script setup>
import { useUserStore } from '../store';
const store = useUserStore()
let count = 0
function handleClick () {
  console.log(2)
  store.updateUsername(++count)
}
</script>
<style>
</style>