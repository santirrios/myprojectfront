<template>
    <div>
        <h2 class="text-white">Articulos a comprar</h2>
        <ul class="list-group">
          <li class="list-group-item" v-for="(data,index) in this.$store.state.productosVenta" :key="index">
             <h3>ID: {{data.id}} | NOMBRE: {{data.name}} | CANTIDAD: {{data.cantidad}} | PRECIO: {{data.total}}</h3>
          </li>
       </ul>
       <h3 class="text-white">PRECIO TOTAL: {{total}}</h3>
    </div>
</template>
<script>
export default {
    name:'ventascomponentlistventa',
    data(){
        return{
            totalPrecio:0

        }
    },
    methods:{

    },
    computed:{
        total(){
            this.$store.state.totalPrecio=0
            for(let i =0; i < this.$store.state.productosVenta.length;i++){
                this.$store.state.totalPrecio+=this.$store.state.productosVenta[i].total
            }
            return this.$store.state.totalPrecio
        }
    }
} 
</script>