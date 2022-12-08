<template>
  <div>
    <h1 class="text-white">Bienvenido {{$store.state.email}}</h1>
        <ul class="list-group">
          <li v-for="(dat,index) in this.$store.state.productos" :key="index" class="list-group-item" >
            <h2>ID: {{dat.id}} | NOMBRE: {{dat.name}} | CANTIDAD: {{dat.cantidad}} | PRECIO UNIDAD: {{dat.precio}}</h2>
          </li>
       </ul>
  </div>
</template>
<script>
export default{
    name:'listdata'
}
</script>
