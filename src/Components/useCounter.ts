import { ref, type Ref } from 'vue';

export function useCounter(initialValue: number) {
  const count: Ref<number> = ref(initialValue);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return {
    count,
    increment,
    decrement,
  };
}
