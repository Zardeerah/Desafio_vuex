<!-- src/components/GameList.vue -->
<template>
    <div>
      <h1>Listado de Juegos</h1>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Color</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="game in games" :key="game.codigo">
            <td>{{ game.codigo }}</td>
            <td>{{ game.nombre }}</td>
            <td>{{ game.stock }}</td>
            <td>{{ game.precio }}</td>
            <td :style="{ color: game.color }">{{ game.color }}</td>
            <td>
              <button @click="incrementarStock(game.codigo)">+</button>
              <button @click="decrementarStock(game.codigo)">-</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['games']),
    },
    methods: {
      ...mapActions(['accionIncrementar', 'accionDecrementar']),
      incrementarStock(codigo) {
        this.accionIncrementar(codigo);
      },
      decrementarStock(codigo) {
        this.accionDecrementar(codigo);
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    color: #1d0808;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th, td {
    text-align: left;
    padding: 8px;
    border: #137007 1px solid;
  }
  th {
    background-color: #137007;
    color: white;
  }
  button {
    margin-left: 5px;
  }
  </style>
  
  
  