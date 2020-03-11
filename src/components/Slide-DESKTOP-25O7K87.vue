<template>
 <div class="container1">
    <div  class="carousel" >
      <img v-bind:src="sliders.src" alt="cars-to-sales" />     
    </div>   
  </div>  
</template>

<script>
export default {
  data() {
    return {
      teste: 'teste'
    };
  },
  props: ["sliders"],
  methods: {
    mudaPosicao(){
      this.teste = !'teste';
    }
  }
};
</script>

<style lang="scss" scoped>

</style>