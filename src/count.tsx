import { defineComponent, Transition, withDirectives, vShow, ref } from "vue";
import Title from "./title";
import "./style.scss";

export default defineComponent({
  name: "v-count",
  setup() {
    const count = ref(0);
    const handleClick = () => {
      count.value++;
    };

    return () => (
      <div>
        <button onClick={handleClick}>click</button>
        <Transition name="slide-fade">{withDirectives((<h1>Count: {count.value}</h1>) as any, [[vShow, count.value % 2 === 0]])}</Transition>
        <Title />
      </div>
    );
  },
});
