<template>
    <div>
        <form class="bg-dark w-50 mt-5 mx-auto" v-on:submit.prevent="iniciosesion">
            <h1 class="text-white text-center py-4">Iniciar sesion</h1>
            <label for="email" class="text-white text-center d-block">Email</label>
            <input type="email" class="d-block m-auto" placeholder="Email" v-model="email">

            <label for="password" class="text-white text-center d-block">Password</label>
            <input type="password" class="d-block m-auto" placeholder="********" v-model="password">

            <button class="d-block btn btn-primary mx-auto my-4">Iniciar sesion</button>
            <label v-if="error==true" class="text-center d-block text-white">something went wrong</label>
            
        </form>
    </div>
</template>

<script>
export default {
    name:'inputiniciarsesion',
    components:{

    },
    data(){
        return{
            email:"",
            password:"",
            error:false,
            
        }
    },
    methods:{
        iniciosesion(){
            let user ={
                email:this.email,
                password:this.password
            }
            let userJson=JSON.stringify(user);
            console.log(userJson)
            fetch('http://127.0.0.1:5001/vue-firebase-fbc54/us-central1/appp/iniciosesion',{
                method:'post',
                body:userJson
            }).then((response)=>{
                response.json().then((res)=>{
                    console.log(res)
                    if(res.user){
                        
                        this.$store.state.email=res.user.email
                        this.$store.state.registrado=true
                        this.email=""
                        this.password=""
                        this.$store.dispatch('loginTrueAction');
                        this.$router.push("/")
                    }else{
                        this.error=true
                    }
                })
            })
        }
    }
}
</script>