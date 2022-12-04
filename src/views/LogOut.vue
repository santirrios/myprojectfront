<template>
    <div v-if="$store.state.registrado===true">
        <h1 class="text-center">saliendo de la sesion, por favor espere</h1>
        <h2 class="text-center">{{error}}</h2>
    </div>
</template>
<script>
  export default{
    name:'logout',
    data(){
        return{
            error:""
        }
    },
    mounted:function(){
        if(this.$store.state.registrado===true){
            try{
        let obje={
          estado:false,
          email:""
        };
        let objeJson = JSON.stringify(obje);
        fetch('http://127.0.0.1:5001/vue-firebase-fbc54/us-central1/appp/estado',{
          method:'put',
          body:objeJson
        }).then((response)=>{
            location.href=("/iniciosesion")
   
        })
      }catch(err){
        this.error=err
    }

        }
        
    }
  }

</script>