<template>
    <div  :class="'modal '+ stateClass">


      
      <div class="auto">

        <div class="modal-card">
          <div class="modal-card-head" >
            <p class="modal-card-title">Adicionar vídeo</p>
            
            <button class="delete" @click="toogleModal">
             &#x2715;
            </button>
          </div>

          <div class="modal-card-body">
            
            <label class="mb-3" for="">Titulo do vídeo</label>
            <input v-model="video.name" type="text">

            <label class="mb-3" for="">Link do vídeo ex: watch?v=<b style="color: red;">7HMlkIBRH60</b> Copie apenas essa parte do vídeo
                do Youtube
            </label>
            <input v-model="video.link" type="text">

            <label class="mb-3" for="">Descrição  do vídeo</label>
            <textarea v-model="video.description" name="" id="" cols="30" rows="10"></textarea>

            <button @click="upar" class="btn">Upar</button>

          </div>

          <div class="modal-card-foot">
            
          </div>

        </div>

      </div>

    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {

    data(){
        return{
            video: {
                name: '',
                link: '',
                description: ''
            }
        }
    },

    mounted(){
        console.log(this.video.name)
    },
    computed:{
    
        stateClass(){

            return this.$store.state.classActual;

        }
    },

    methods:{
        ...mapMutations(
            {
                toogleModal: 'toogleModal'
            }
        ),

        upar(){

            if(this.video.name == '' || this.video.link == '' || this.video.description == ''){
                alert('Preencha todos os campos!')
            }else{

                if(this.video.link.length != 11){
                    alert('O tem que ter  11 caracters')
                }else{

                    this.$store.dispatch('SET_VALUES', this.video).then(response=>{
                
                        if(response == true){
                            this.toogleModal()
                        }
                    })

                }
            }

        }
    }
}
</script>

<style>

</style>