<template>
  <div class="counter-card">
    <h2 class="counter-title">Contador 3</h2>

    <div class="counter-values">
      <h3>Contador: {{ count }}</h3>
      <h3>Contador al cuadrado: {{ count * count }}</h3>
    </div>

    <p class="counter-text">Presione un boton:</p>

    <div class="counter-buttons">
      <button @click="increment" class="increment-btn">+1</button>
      <button @click="decrement" class="decrement-btn">-1</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from '../Components/useCounter';

const props = defineProps<{
  value: number;
}>();

const { count, increment, decrement } = useCounter(props.value);
</script>
