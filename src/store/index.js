// src/store/index.js
import { createStore } from "vuex";
import gamesData from "./gamesData.json";

export default createStore({
  state: {
    games: gamesData.map((game) => ({
      ...game,
      stock: parseInt(game.stock, 10),
      precio: parseInt(game.precio, 10),
    })),
  },
  mutations: {
    updateStock(state, { codigo, cantidad }) {
      const game = state.games.find((game) => game.codigo === codigo);
      if (game && game.stock + cantidad >= 0) {
        game.stock += cantidad;
      }
    },
  },
  actions: {
    modifyStock({ commit }, payload) {
      commit("updateStock", payload);
    },
    accionIncrementar({ commit }, codigo) {
      setTimeout(() => {
        commit("updateStock", { codigo, cantidad: 1 });
      }, 3000);
    },
    accionDecrementar({ commit }, codigo) {
      setTimeout(() => {
        commit("updateStock", { codigo, cantidad: -1 });
      }, 3000);
    },
  },
  getters: {
    allGames: (state) => state.games,
  },
});
