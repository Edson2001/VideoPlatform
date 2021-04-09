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

            <label class="mb-3" for="">ID do vídeo ex: /watch?v=<strong style="color: red;">7HMlkIBRH60</strong></label>

            <input placeholder="Insira apenas o ID do video" v-model="video.link" @change="getDataVideo(video.link)" type="text">
            
            <label class="mb-3" for="">Titulo do vídeo</label>
            <input v-model="video.name" type="text">


            <label class="mb-3" for="">Descrição  do vídeo</label>
            <textarea v-model="video.description" name="" id="" cols="30" rows="10"></textarea>

            <button @click="upar" class="btn">Salvar</button>

          </div>

          <div class="modal-card-foot" >
            
          </div>

        </div>

      </div>

    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import axios from 'axios'

export default {

    data(){
        return{
            video: {
                name: '',
                link: '',
                description: ''
            },
            youtube_vars:{
                // Insira aqui a chave de api do youtube.
                api_key:"",
            },

        }
    },

    mounted(){
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

        // Função que obtem os dados do video (nome e descricao)
        getDataVideo(id){
            var api_url ="https://www.googleapis.com/youtube/v3/videos?part=id,snippet&id="+id+"&key="+this.youtube_vars.api_key
            axios.get(api_url).then((response) => {
               if(response.status == 200){
                    let data = response.data['items'][0]['snippet']
                    this.video.name = data['title']
                    this.video.description = data['description']        
               }else{
                alert("Wow, está inserindo o id certo ?");
               }
            })
        },

        // Função que limpa os campos ao fechar o modal
        limparcampos(){
            this.video.name =""
            this.video.link =""
            this.video.description =""
        },

        upar(){

            if(this.video.name == '' || this.video.link == '' || this.video.description == ''){
                alert('Preencha todos os campos!')
            }else{

                if(this.video.link.length != 11){
                    alert('O tem que ter  11 caracters')
                }else{

                    this.$store.dispatch('SET_VALUES', this.video).then(response=>{
                
                        if(response == true){
                            this.limparcampos()
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