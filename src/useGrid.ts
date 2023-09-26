import { shallowRef, onMounted, onBeforeUpdate } from "vue";

export function useGrid() {
  const cells = shallowRef(new Map());

  const functionRef = (el: any, row: any, column: any) => {
    if (!el) return;

    cells.value.set(el, { row, column });
  };

  onMounted(() => {
    console.log(cells.value);
  });

  onBeforeUpdate(() => (cells.value = new Map()));

  return functionRef;
}
