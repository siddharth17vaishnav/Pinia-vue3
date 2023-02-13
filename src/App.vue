<script setup>
import { useCounterStore } from "./store/counter.js";
import { onMounted } from "vue";
const store = useCounterStore();

onMounted(() => store.onMount());
</script>

<template>
  <div v-for="item in store.data" key="item.id">
    <div
      style="{background-color: #535bf2;cursor: pointer;} "
    >
      {{ item.name }} :: {{ item.price }}
      <button @click="store.addToCart(item)">add</button>
      <button @click="store.removeFromCart(item)">delete</button>
    </div>
    <div v-for="i in store.cart">
      {{i.price}}
    </div>
  </div>
</template>

<style scoped></style>
