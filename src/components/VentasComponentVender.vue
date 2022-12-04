<template>
    <div>
        <form v-on:submit.prevent="agregar">
            <h2 class="d-block text-white p-5">Añadir productos</h2>

            <label for="id" class="d-block text-white">ID DEL PRODUCTO</label>
            <input type="number" name="id" class="d-block mx-auto" v-model="id" required>

            <label for="cantidad" class="d-block text-white">CANTIDAD DEL PRODUCTO</label>
            <input type="number" name="cantidad" class="d-block mx-auto" v-model="cantidad" required>

            <button class="btn btn-primary">Agregar</button>
        </form>
        <label class="d-block text-white" v-if="error!=''">{{error}}</label>

    </div>
</template>
<script>
export default {
    name:'ventasvender',
    data(){
        return{
            productos:[],
            id:0,
            cantidad:0,
            contador:0,
            error:""
        }
    },
    methods:{
        agregar(){
            let contador =0;
            for(let i = 0; i< this.$store.state.productos.length;i++){
                if(this.id===this.$store.state.productos[i].id){
                    contador++;
                    if((this.$store.state.productos[i].cantidad-this.cantidad)>=0){
                        this.$store.state.productos[i].cantidad-=this.cantidad
                    this.productos={
                        name:this.$store.state.productos[i].name,
                        id:this.id,
                        cantidad:this.cantidad,
                        total:this.$store.state.productos[i].precio*this.cantidad
                    }
                    this.$store.state.productosVenta.push(this.productos)
                    this.productos=[]
                    this.error=""  
                    }else{
                        contador++;
                    }
                }else{
                }
            }
            if(contador==0){
                        this.error="no existe este id en la base de datos"
                    }else if(contador==2){
                        this.error="no hay suficiente en el inventario"
                    }else{
                        this.error=""
                    }
        }
    }
}
</script>