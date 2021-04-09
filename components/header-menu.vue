<template>
    
    <div class="header">

        <div class="container d-flex">

            <div class="logo">
                <h1>
                    <a href="">VideoPlatform</a>
                </h1>
            </div>

            <ul class="nav d-flex">
                <li>
                    <a @click.prevent="toogleModal" href=""><i class="icofont-plus-circle"></i> Adicionar video</a>
                </li>
            </ul>

        </div>

    </div>

</template>

<script>
import {mapMutations} from 'vuex'
import '../assets/css/header.css'
import '../assets/icofont/icofont.css'
export default {
    name: "header-menu",

    methods:{
        ...mapMutations(
        {
            toogleModal: 'toogleModal'
        }
        )
    }
  
}
</script>

<style>

</style>