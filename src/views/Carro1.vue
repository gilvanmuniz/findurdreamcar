<template>
<div class="container">
  <div class="sliders" v-for="slide in sliders" :key="slide">
    <sliders  v-bind:sliders="slide"></sliders>
    <img :src="image" alt="">
   
  </div>  
  <!-- <div class="sliders" v-for="slide in sliders" :key="slide">{{ slide.src }}</div> -->
</div>   <!--  container end --> 
</template>

<script>

import Sliders from './../components/Sliders'
export default {
 components: {
    Sliders
  },
  data () {
    return {         
          sliders: [            
               { src: './../assets/images-showcase/white-mercedes/mercedes2.jpeg'},
               { src: './../assets/images-showcase/white-mercedes/mercedes3.jpeg'},
               { src: './../assets/images-showcase/white-mercedes/mercedes4.jpeg'},
               { src: './../assets/images-showcase/white-mercedes/mercedes4.jpeg'},                       
          ],

          image: './../assets/images-showcase/white-mercedes/mercedes2.jpeg'
    }
  }

}
</script>

<style lang="scss" scoped>
 .container{
   color: aliceblue;
 }

</style>