<template>
  <div>
    <button class="btn btn-primary" v-on:click="venderbtn">VENDER</button>
    <p>{{ error }}</p>
  </div>
</template>
<script>
export default {
  name: "ventascomponenttotal",
  data() {
    return {
      error: "",
    };
  },
  methods: {
    venderbtn() {
      if (this.$store.state.productosVenta.length !== 0) {
        this.$store.state.productosVenta.forEach((element) => {
          let object = {
            name:element.name,
            id: element.id,
            cantidad: element.cantidad,
            precio: element.total,
            total: this.$store.state.totalPrecio,
          };
          let objectJson = JSON.stringify(object);
          fetch(
            "http://127.0.0.1:5001/vue-firebase-fbc54/us-central1/appp/ventas",
            {
              method: "post",
              body: objectJson,
            }
          ).then((response) => {
            console.log(response);
          });
        });

        this.$store.state.productos.forEach((element) => {
          let producto = {
            id: element.id,
            nombre: element.name,
            cantidad: element.cantidad,
            precio: element.precio,
          };
          let productoJson = JSON.stringify(producto);
          fetch("http://127.0.0.1:5001/vue-firebase-fbc54/us-central1/appp", {
            method: "put",
            body: productoJson,
          }).then((response) => {});
        });

        this.$store.state.productosVenta=[]
        this.error = "";
      } else {
        this.error = "ingrese al menos un producto por favor";
      }
    },
  },
};
</script>