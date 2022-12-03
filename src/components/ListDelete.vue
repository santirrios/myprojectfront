<template>
  <div>
    <h2 class="d-block text-white p-5">Borrar productos</h2>
    <form v-on:submit.prevent="borrar">
      <label class="d-block text-white" for="id">Id</label>
      <input
        class="d-block mx-auto"
        type="number"
        name="id"
        v-model="idProducto"
        required
      />

      <button class="btn btn-primary m-2">borrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "listdelete",
  components: {},
  data() {
    return {
      idProducto: 0,
    };
  },
  methods: {
    borrar() {
      let producto = {
        id: this.idProducto
      };
      let productoJson = JSON.stringify(producto);
      fetch("http://127.0.0.1:5001/vue-firebase-fbc54/us-central1/appp", {
        method: "delete",
        body: productoJson,
      }).then((response) => {
        this.idProducto=0;
        this.$store.dispatch('reloadDataAction');
      });
    }
  }
};
</script>