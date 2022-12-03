import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email:"",
    registrado:false,
    productos:[],
    productosVenta:[],
    facturas:[],
    totalPrecio:0,

  },
  getters: {
  },
  mutations: {
    reloadData(state){
      console.log("funcionando")
      if(state.registrado===true){
        try{
         fetch('http://127.0.0.1:5001/vue-firebase-fbc54/us-central1/appp').then((response)=>{
          response.json().then((data)=>{
            console.log(data)
            state.productos=data
          })
         })
        }catch(err){
          state.productos=[{nombre:'error'}]
        }
      }
    },
    reloadDataVentas(state){
      if(state.registrado===true){
        console.log("llego hasta reload data ventas")
        try{
          fetch('http://127.0.0.1:5001/vue-firebase-fbc54/us-central1/appp/ventas').then((response)=>{
            response.json().then((data)=>{
              console.log(data)
              state.facturas=data
            })
          })
        }catch(err){
          state.facturas=[{nombre:'error'}]
          console.log("error")
        }
      }
    },
    checkLogin(state){
      try{
        fetch('http://127.0.0.1:5001/vue-firebase-fbc54/us-central1/appp/estado').then((response)=>{
          response.json().then((data)=>{
            console.log(data.estado)
            state.registrado=data.estado
            state.email=data.email
          })
        })
      }catch(err){
        console.log(err)
      }
    },
    loginTrue(state){
      try{
        let obje={
          estado:true,
          email:state.email
        };
        let objeJson = JSON.stringify(obje);
        fetch('http://127.0.0.1:5001/vue-firebase-fbc54/us-central1/appp/estado',{
          method:'put',
          body:objeJson
        }).then((response)=>{

        })
      }catch(err){
        console.log(err)
      }
    },
    loginFalse(state){
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
        })
      }catch(err){
        console.log(err)
      }
    }
  },
  actions: {
    reloadDataAction(context){
      context.commit('reloadData');
    },
    reloadDataVentasAction(context){
      context.commit('reloadDataVentas')
    },
    checkLoginAction(context){
      context.commit('checkLogin');
    },
    loginTrueAction(context){
      context.commit('loginTrue')
    },
    loginFalseAction(context){
      context.commit('loginFalse')
    }
  },
  modules: {
  }
})
