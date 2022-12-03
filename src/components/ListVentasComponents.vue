<template>
  <div>
    <h1 class="text-center">Bienvenido {{$store.state.email}}</h1>
    <h2 class="text-center">Ventas</h2>
        <ul class="list-group">
          <li v-for="(dat,index) in this.$store.state.facturas" :key="index" class="list-group-item" >
            <h2>ID BASE DATOS: {{dat.idDoc}} | NOMBRE: {{dat.nombre}} | ID ARTICULO:{{dat.id}} | CANTIDAD: {{dat.cantidad}} | PRECIO: {{dat.precio}}</h2>
          </li>
          <button class="btn btn-warning" @click="actualizarProductos">Actualizar</button>
       </ul>
  </div>
</template>
<script>
export default{
    name:'listdata',
    methods:{
        actualizarProductos(){
        this.$store.dispatch('reloadDataVentasAction');
    }
    }
}
</script>