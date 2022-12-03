<template>
  <div class="container bg-secondary text-center" v-if="$store.state.registrado===true">
    <div class="row">
      <div class="col">
        <ListData></ListData>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ListAdd></ListAdd>
      </div>
      <div class="col">
          <ListPut></ListPut>
      </div>
      <div class="col">
        <ListDelete></ListDelete>
      </div>
    </div>
  </div>
</template>

<script>
import ListAdd from'./ListAdd.vue'
import ListDelete from './ListDelete.vue'
import ListPut from'./ListPut.vue'
import ListData from './ListData.vue'
export default {
  name:'list',
  components:{
    ListAdd,
    ListDelete,
    ListPut,
    ListData

  },
  data(){
    return{
      productos:[]

    }

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