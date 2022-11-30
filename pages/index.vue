<template>
  <div>
    <nav-bar />
    <div class="container mt-5">

      <div class="player">

        <div class="sidebar">
          <h3  class="playlist-name">&#129300; Playlist</h3>
          <div class="playlist">
           <list-video v-for="(item, index) in videos" :key="index" :nameList="item.name" @click.native="loadVideo(item.link, item.description)"></list-video>
          </div>
        </div>

        <div class="content">
          <iframe class="video-yout" height="515" :src="'https://www.youtube.com/embed/'+src+'?start=1'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p class="video-description">{{description}}</p>
        </div>

      </div>

    </div>

    <footer-list/>
    <modal />
  </div>
</template>

<script>

//components
import navBar from "../components/header-menu.vue"
import listVideo from "../components/list.vue"
import footerList from "../components/footer-list.vue"
import modal from "../components/modal.vue"


//import css
import '../assets/css/root.css'
import '../assets/css/modal.css'
import '../assets/icofont/icofont.css'

//import vuex
import {mapMutations} from 'vuex'

export default {
  components:{
    navBar,
    listVideo,
    footerList,
    modal
  },

  computed:{
   
    videos(){
      return this.$store.state.vidoes;
    }

  },

  created(){
    this.$store.dispatch('GET_VALUES')
  },

 
  data(){
    return {
      src: 'mkyDIU5Yc2c',
      description: ''
    }
  },

  methods:{
    loadVideo(src, description){
      this.src = src,
      this.description = description
    },

    ...mapMutations(
      {
        getValues: 'getValues'
      }
    ),

    showDtat(){
      this.getValues()
    }
  }
}
</script>