<template>
  <div class="app-container">
    <h1 class="app-title">Implementación de Composable en VUE</h1>
    <hr class="app-divider" />
    <div class="counters-container">
      <MiCounter :value="5" />
      <MiCounter2 :value="10" />
      <MiCounter3 :value="15" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MiCounter from './Components/MiCounter.vue';
import MiCounter2 from './Components/MiCounter2.vue';
import MiCounter3 from './Components/MiCounter3.vue';
</script>
