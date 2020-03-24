<template>
 <div class="container1">
    <div  class="carousel" >
      <img  v-bind:src="sliders.src" alt="cars-to-sales" />    
    </div>   
  </div>  
</template>

<script>
export default {
  props: ["sliders"], 
  
  data (){
    return{
      destacar: 'destaque'
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
