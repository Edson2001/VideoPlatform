<template>
    <div class="list">
        <p>
            {{nameList}} 
        </p>
        <a href="">
            <i class="icofont-trash"></i>
        </a>
        <a href="">
           <i class="icofont-eraser"></i>
        </a>
    </div>

</template>

<script>
export default {

    name: 'list',
    props: ['nameList']

}
</script>

<style>

</style>