<template>
  <div>
    <h2 class="d-block text-white p-5">Añadir productos</h2>
    <form v-on:submit.prevent="anadir">
      <label class="d-block text-white" for="id">Id</label>
      <input
        class="d-block mx-auto"
        type="number"
        name="id"
        v-model="idProducto"
        required
      />

      <label class="d-block text-white" for="nombre">Nombre</label>
      <input
        class="d-block mx-auto"
        type="text"
        name="nombre"
        v-model="nombreProducto"
        required
      />

      <label class="d-block text-white" for="cantidad">Cantidad</label>
      <input
        class="d-block mx-auto"
        type="number"
        name="cantidad"
        v-model="cantidadProducto"
        required
      />

      <label class="d-block text-white" for="precio">Precio Unidad</label>
      <input
        class="d-block mx-auto"
        type="number"
        name="precio"
        v-model="precioProducto"
        required
      />

      <button class="btn btn-primary m-2">Añadir</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "listadd",
  components: {},
  data() {
    return {
      idProducto: 0,
      nombreProducto: "",
      cantidadProducto:0,
      precioProducto:0
    };
  },
  methods: {
    anadir() {
      let producto = {
        id: this.idProducto,
        nombre: this.nombreProducto,
        cantidad:this.cantidadProducto,
        precio:this.precioProducto
      };
      let productoJson = JSON.stringify(producto);
      fetch("http://127.0.0.1:5001/vue-firebase-fbc54/us-central1/appp", {
        method: "post",
        body: productoJson,
      }).then((response) => {
        this.idProducto=0;
        this.nombreProducto="";
        this.cantidadProducto=0;
        this.precioProducto=0;
        this.$store.dispatch('reloadDataAction');
      });
    }
  }
};
</script>