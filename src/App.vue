<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>Gestión de Stock - 32 Bits</h1>
    <ModifyStock />
    <GameList />
  </div>
</template>

<script>
import GameList from './components/GameList.vue';
import ModifyStock from './components/ModifyStock.vue';

export default {
  components: {
    GameList,
    ModifyStock,
  },
};
</script>

<style>
h1 {
  text-align: center;
  color: #137007;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>