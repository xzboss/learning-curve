<template>
  <div>
    <h1>-){{store.username}}(-</h1>
  </div>
</template>
<script setup>
import { useUserStore } from '../store';
const store = useUserStore()
</script>
<style>
</style>