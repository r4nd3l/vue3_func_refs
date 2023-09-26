<template>
  <main
    class="min-h-screen w-screen flex flex-col gap-10 items-center justify-center bg-gray-300"
  >
    <section class="w-full max-w-sm flex flex-col gap-4">
      <h2 class="text-sm text-gray-600 font-semibold uppercase tracking-widest">
        Grid
      </h2>
      <div
        class="flex flex-col items-center justify-center p-6 gap-2 rounded shadow-md bg-white"
      >
        <div
          v-for="(row, rowIndex) in tableMetadata"
          :key="row[0]"
          class="grid grid-cols-3 gap-2"
        >
          <div
            v-for="(cell, columnIndex) in row"
            :key="cell"
            :ref="(el) => cellsRef(el, rowIndex, columnIndex)"
            class="p-1 line-clamp-1 bg-screen-200 text-green-900 rounded bg-green-300"
          >
            {{ cell }}
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useGrid } from "./useGrid";

const tableMetadata = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

const cellsRef = useGrid();
</script>
