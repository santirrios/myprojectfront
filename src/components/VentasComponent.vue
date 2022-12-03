<template>
    <div class="container bg-secondary text-center" v-if="$store.state.registrado===true">
    <div class="row">
      <div class="col">
        <ListData></ListData>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <VentasComponentVender></VentasComponentVender>
      </div>
      <div class="col">
        <VentasComponentListVenta></VentasComponentListVenta>
      </div>
    </div>
    <div class="row">
        <div class="col">
            <VentasComponentTotal></VentasComponentTotal>
        </div>
    </div>
  </div>
</template>
<script>
import ListData from './ListData.vue'
import VentasComponentVender from './VentasComponentVender.vue'
import VentasComponentListVenta from './VentasComponentListVenta.vue'
import VentasComponentTotal from './VentasComponentTotal.vue'
export default {
    name:'ventas',
    components:{
        ListData,
        VentasComponentVender,
        VentasComponentListVenta,
        VentasComponentTotal

    },
     methods:{
    actualizarProductos(){
      this.$store.dispatch('reloadDataAction');
    }

    },
    mounted:function(){
      this.$store.dispatch('reloadDataAction');
    }
}
</script>
