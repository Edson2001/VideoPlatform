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
        </div>

      </div>

    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import axios from '../plugins/axios'

export default {

    data(){
        return{
            video: {
                name: '',
                link: '',
                description: ''
            },
            youtube_vars:{
                api_key: process.env.VUE_ENV_API_KEY,
            },

        }
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
        async getDataVideo(id){

            let api_url =id+"&key="+this.youtube_vars.api_key
            try{

                const response = await axios.get(api_url)

                if(response.data){
                    let [title, description] = response.data['items'][0]['snippet']
                    this.video = {name: title, description: description, link: ''}
                }
            }catch(e){
                alert("Wow, está inserindo o id certo ?");
                console.log(e)
            }
            
        },
        limparcampos(){
            this.video.name =""
            this.video.link =""
            this.video.description =""
        },

        upar(){
            if(this.video.name == '' || this.video.link == '' || this.video.description == ''){
                alert('Preencha todos os campos!')
                return
            }
            if(this.video.link.length != 11){
                alert('O tem que ter  11 caracters')
                return
            }

            this.$store.dispatch('SET_VALUES', this.video).then(response=>{
                if(response == true){
                    this.limparcampos()
                    this.toogleModal()
                }
            })
            
        }
    }
}
</script>