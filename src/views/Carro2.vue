<template>
<div class="container"> 
  <cabecalho></cabecalho>
   <div class="wrap" :style = "{ marginLeft: ajustemargin + 'px', width: innerwidth + 'px' }"
>
     <slide class="sliders" 
      v-for="(slide, i2) in sliders" :key="i2" 
      v-bind:sliders="slide"
      :style = "{ width: innerwidth / 6 + 'px'}"  
      >          
     </slide>     
   </div><!--  wrap end --> 
    <div class="controller">
       <button v-on:click="goToPrev"> &lt;&lt; Go Back</button>
       <button v-on:click="nextFoto">Next >></button>       
    </div>         
  </div><!--  container end --> 
</template>

<script>

import Slide from './../components/Slide'
import Cabecalho from './../components/Cabecalho'
export default {
 
  data () {
    return {         
          sliders: [            
               { src: require('./../assets/images-showcase/black-mercedes/mercedes.jpeg')},
               { src: require('./../assets/images-showcase/black-mercedes/mercedes2.jpeg')},
               { src: require('./../assets/images-showcase/black-mercedes/mercedes-dentro.jpeg')},
               { src: require('./../assets/images-showcase/black-mercedes/mercedes-pc.jpeg')},
               { src: require('./../assets/images-showcase/black-mercedes/mercedes-aberta.jpeg')},                       
               { src: require('./../assets/images-showcase/black-mercedes/trazeira.jpeg')},                       
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
    Slide,
    Cabecalho
  },
  methods: {
    nextFoto(){
      if(this.ajustemargin == -2296){
         return
       }
       this.ajustemargin -= (this.singlewidth / 2) + 4
    },
    goToPrev(){
      if(this.ajustemargin == 0){
         return
       }
      this.ajustemargin += (this.singlewidth / 2) + 4
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
     transition: margin 0.7s ease-out;
     position: relative;
     display: flex;
     overflow: hidden;
     margin-top: -1.5%;
     justify-content: start;
     background-color: white;;
     .sliders{       
       margin:0.2%;       
       .carousel{
         width:100%;
         margin: 0%;
         img{
           width: 545px;
           border: solid 8px white ;                     
         }
       }
     }     
   }
   .controller{
     position: relative;     
     display: flex;
     width: 50%;     
     align-items: center;
     margin-left: 22%;
     button{
     margin-left: 14%;
     margin-top:0.5%;
     width: 50%;
     height: 5%;
   }
 } /* controller end */
   
}/*  container end */ 

@media screen and (max-width: 416px) {
  .container{
   background-color: white;
   width: 110%;     
   margin-left: 0%;
   margin-right: -1%;  
   .wrap{     
     position: relative;
     display: flex;
     flex-direction: column;
     overflow: hidden;
     padding: 1%;
     margin-top: 6%;
     margin-left: 4%;
     justify-content: start;
     background-color: white;
     .sliders{       
       margin:0%;       
       .carousel{
         width:100%;
         margin-left: -3%;
         img{
           width: 350px;
           border: solid 2.5px white;
           padding:3%;
           margin-left:4%;
           border-right:solid 4px white ;                     
         }
       }
     }     
   }
   .controller{          
     display: hidden;     
     button{
     visibility:hidden; 
    }
 } /* controller end */
   
}/*  container end */ 

}  /* media end */
   
</style>