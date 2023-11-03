// src/stores/cartStore.js
import { writable } from 'svelte/store';

// Define a TypeScript interface for your product and cart state
interface Product {
  id: number;
  price: number;
  // Add other properties if needed
}

interface CartState {
  items: Product[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

function createCart() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    addItem: (product: Product) =>
      update((state: CartState) => {
        const index = state.items.findIndex((item) => item.id === product.id);

        if (index !== -1) {
          state.items[index].quantity += 1;
        } else {
          state.items.push({ ...product, quantity: 1 });
        }

        state.total += product.price;
        return state;
      }),
    removeItem: (productId: number) =>
      update((state: CartState) => {
        const index = state.items.findIndex((item) => item.id === productId);

        if (index !== -1) {
          state.total -= state.items[index].price * state.items[index].quantity;
          state.items.splice(index, 1);
        }

        return state;
      }),
    clear: () => set(initialState),
  };
}

export const cart = createCart();
