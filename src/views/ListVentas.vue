<template>
    <div v-if="this.$store.state.registrado===true">
        <ListVentasComponents></ListVentasComponents>
    </div>
</template>
<script>
import ListVentasComponents from '../components/ListVentasComponents.vue'
export default {
    name:'listventas',
    components:{
        ListVentasComponents

    }
}
</script>