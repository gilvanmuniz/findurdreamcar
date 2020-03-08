<template>
  <div class="container">
     <h1>{{ sliders.src }}</h1>
     <!-- <img v-bind:src="sliders.src" alt=""> -->
    
  </div>
</template>

<script>
export default {
 data(){
   return {}
 },
 props:[ 'sliders' ]
}
</script>

<style>

</style>