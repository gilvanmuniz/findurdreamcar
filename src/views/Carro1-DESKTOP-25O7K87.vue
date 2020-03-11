<template>
<div class="container" 

> <!-- tag container end -->
  
   <div class="wrap" :style = "{ marginLeft: ajustemargin + 'px', width: innerwidth + 'px' }"
>
     <slide class="sliders" 
      v-for="(slide, i) in sliders" :key="i" 
      v-bind:sliders="slide"
      :style = "{ width: innerwidth / 6 + 'px'}"  
      >
          
     </slide>
     {{ singlewidth }} {{ innerwidth }} {{ ajustemargin }}   
   </div><!--  wrap end --> 
    <div class="controller">
       <button v-on:click="nextFoto">Next</button>
       <button v-on:click="goToPrev">Go Back</button>
    </div>  
  </div><!--  container end --> 
</template>

<script>

import Slide from './../components/Slide'
export default {
 
  data () {
    return {         
          sliders: [            
               { src: './../assets/images-showcase/white-mercedes/mercedes.jpeg'},
               { src: './../assets/images-showcase/white-mercedes/mercedes2.jpeg'},
               { src: './../assets/images-showcase/white-mercedes/mercedes3.jpeg'},
               { src: './../assets/images-showcase/white-mercedes/mercedes4.jpeg'},
               { src: './../assets/images-showcase/white-mercedes/mercedes5.jpeg'},                       
               { src: './../assets/images-showcase/white-mercedes/mercedes-dentro.jpeg'},                       
          ],                     
          innerwidth: 0,
          singlewidth: 0,
          singlewidth1: 0,
          currentIndex: 0,          
          ajustemargin: 0,          
          estiloWrap: {
            singlewidth: this.singlewidth,
            ajustemargin: this.ajustemargin 
          }
          
          
    }
  },
  
  props: {
    itemsPerSlide: {
      type: null,
      default: 1
    }
  },
  components: {
    Slide
  },
  methods: {
    nextFoto(){
       this.ajustemargin -= (this.singlewidth / 2)
    },
    goToPrev(){
      this.ajustemargin += (this.singlewidth / 2)
    }
  },
  mounted () {
    this.singlewidth1 = this.$el.clientWidth/this.itemsPerSlide 
    this.singlewidth = this.singlewidth1
    this.innerwidth = this.singlewidth * this.sliders.length / 2
  },

}
</script>
<style lang="scss">
 .container{
   overflow: hidden;
   .wrap{
     position: relative;
     display: flex;
     overflow: hidden;
     margin-top: 7%;
     justify-content: start;
     align-items:center;
     .sliders{       
       margin:0.2%;       
       .carousel{
         width:100%;
         margin: 1%;
         img{
           width: 570px;
           border: solid 4px white ;           
         }
       }
     }     
   }
   .controller{
     position: relative;     
     display: flex;
     width: 50%;
     margin-top: -15.5%;
     align-items: center;
     margin-left: 20%;
     button{
     margin-left: 2%;
     margin-top: 35%;
     width: 50%;
     height: 5%;
   }
}  
 
  
}/*  container end */ 
   
</style>