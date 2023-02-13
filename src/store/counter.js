import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0, data: [], cart: [] }),
  getters: {
    countDigit: (state) => state?.count + 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    async check(payload) {
      this.count++;
    },
    onMount() {
      this.data = [
        { id: 1, name: "one", price: 10 },
        { id: 2, name: "two", price: 20 },
      ];
    },
    addToCart(payload) {
      const existingItem = this.cart.find((i) => i.id === payload.id);
      const id = this.cart.findIndex((i) => i.id === payload.id);
      if (!existingItem) {
        this.cart.push({ ...payload, quantity: 1 });
      } else {
        existingItem.quantity++;
        this.cart[id].price += payload.price;
      }
    },
    removeFromCart(payload) {
      const findItem = this.cart.find((i) => i.id === payload.id);
      const id = this.cart.findIndex((i) => i.id === payload.id);
      if (findItem.quantity > 1) {
        findItem.quantity--;
        this.cart[id].price -= payload.price;
      } else if (findItem.quantity === 1) {
        this.cart = this.cart.filter((i) => i.id !== payload.id);
      }
    },
  },
});
