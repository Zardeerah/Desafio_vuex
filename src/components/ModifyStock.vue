
<template>
    <div>
   
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        codigo: '', 
      };
    },
    methods: {
      ...mapActions(['accionIncrementar', 'accionDecrementar']),
      incrementar() {
        if (this.codigo) {
          this.accionIncrementar(this.codigo);
        }
      },
      decrementar() {
        if (this.codigo) {
          this.accionDecrementar(this.codigo);
        }
      },
    },
  };
  </script>
  
  