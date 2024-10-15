import { defineComponent } from 'vue';
import { useCounter } from './useCounter';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const { count, increment, decrement } = useCounter(props.value);

    return {
      count,
      increment,
      decrement,
    };
  },
});
