<template>
  <div id="app">
    
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <h3 v-if="$store.state.email" class="text-white">{{$store.state.email}}</h3>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item" v-if="$store.state.registrado!==true">
        <router-link class="nav-link text-white" to="/registrarse">Registrarse</router-link>
      </li>
      <li class="nav-item"  v-if="$store.state.registrado!==true" >
        <router-link class="nav-link text-white" to="/iniciosesion">Iniciar sesion</router-link>
      </li>
      <li class="nav-item active" v-if="$store.state.registrado===true">
        <router-link class="nav-link text-white" to="/">Home</router-link>
      </li>
      <li class="nav-item active" v-if="$store.state.registrado===true">
        <router-link class="nav-link text-white" to="/ventas">Vender</router-link>
      </li>
      <li class="nav-item active" v-if="$store.state.registrado===true">
        <router-link class="nav-link text-white" to="/listventas">Lista ventas</router-link>
      </li>
      <li class="nav-item active" v-if="$store.state.registrado===true">
        <router-link class="nav-link text-white" to="/logout">Log out</router-link>
      </li>
      
    </ul>
  </div>
</nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'app',
    components:{
    },
    data(){
        return{
        }
    },
    methods:{
    },
    mounted:function(){
    this.$store.dispatch('checkLoginAction');
    this.$store.dispatch('reloadDataAction');
    this.$store.dispatch('reloadDataVentasAction');
  }
}
</script>

