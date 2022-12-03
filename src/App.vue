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
        <a class="nav-link text-white" href="/registrarse">Registrarse</a>
      </li>
      <li class="nav-item"  v-if="$store.state.registrado!==true" >
        <a class="nav-link text-white" href="/iniciosesion">Iniciar sesion</a>
      </li>
      <li class="nav-item active" v-if="$store.state.registrado===true">
        <a class="nav-link text-white" href="/">Home</a>
      </li>
      <li class="nav-item active" v-if="$store.state.registrado===true">
        <a class="nav-link text-white" href="/ventas">Vender</a>
      </li>
      <li class="nav-item active" v-if="$store.state.registrado===true">
        <a class="nav-link text-white" href="/listventas">Lista ventas</a>
      </li>
      <li class="nav-item active" v-if="$store.state.registrado===true">
        <a class="nav-link text-white" @click="logout">Logout</a>
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
      logout(){
        this.$store.dispatch('loginFalseAction');
        this.$store.state.email=""
        this.$store.state.registrado=false
        
      }
    },
    mounted:function(){
    this.$store.dispatch('checkLoginAction');
    this.$store.dispatch('reloadDataAction');
  }
}
</script>

