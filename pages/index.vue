<template>
  <div>
    <nav-bar></nav-bar>

    <div class="container mt-5">

      <div class="player">

        <div class="sidebar">

          <div class="playlist">

            <div class="list">
              <p>
                <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit</a>
              </p>
            </div>

            <div class="list">
              <p>
                <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit</a>
              </p>
            </div>

          </div>

        </div>

        <div class="content">
          <iframe class="video-yout" height="515" src="https://www.youtube.com/embed/x-4z_u8LcGc?start=777" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laudantium dolor ducimus facilis aspernatur aperiam aliquam eius rerum explicabo? Sapiente molestias illum ullam unde sunt cumque porro, id eligendi? Amet!</p>
        </div>

        

      </div>

    </div>

  </div>
</template>

<script>
import navBar from "../components/header.vue"
import '../assets/css/root.css'
export default {
  components:{
    navBar
  }
}
</script>

<style>

</style>
