<template>
  <div>
    <nav-bar></nav-bar>

    <div class="container mt-5">

      <div class="player">

        <div class="sidebar">

          <h3  class="playlist-name">&#129300; Nome da playlist</h3>

          <div class="playlist">

           <list-video @click.native="loadVideo('foE1mO2yM04')"></list-video>
           <list-video @click.native="loadVideo('jJPMnTXl63E')"></list-video>

          </div>

        </div>

        <div class="content">
          <iframe class="video-yout" height="515" :src="'https://www.youtube.com/embed/'+src+'?start=1'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p class="video-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laudantium dolor ducimus facilis aspernatur aperiam aliquam eius rerum explicabo? Sapiente molestias illum ullam unde sunt cumque porro, id eligendi? Amet!</p>
        </div>

        

      </div>

    </div>

    <footer-list></footer-list>

  </div>
</template>

<script>
import navBar from "../components/header-menu.vue"
import listVideo from "../components/list.vue"
import footerList from "../components/footer-list.vue"
import '../assets/css/root.css'
import '../assets/icofont/icofont.css'
export default {
  components:{
    navBar,
    listVideo,
    footerList
  },

  data(){
    return {
      src: 'mkyDIU5Yc2c'
    }
  },



  methods:{
    loadVideo(src){

      this.src = src

    }
  }
}
</script>

<style>

</style>
