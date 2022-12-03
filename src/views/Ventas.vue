<template>
  <div class="ventas">
    <VentasComponent></VentasComponent>
  </div>
</template>

<script>

import VentasComponent from '../components/VentasComponent.vue'
export default {
  name: 'HomeView',
  components: {
    VentasComponent
  }
}
</script>