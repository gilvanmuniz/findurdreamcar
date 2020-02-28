<template>
  <div class="container">
    <div class="logo">
      <img src="./../assets/images/logo_menu.png" alt="">
    </div>
    
    <h1>Our Premium Pre-owned automobiles</h1> 
    <h4>Page under construction</h4>   
    <b-button variant="outline-secondary"><li><router-link :tag="a" to="/">Home</router-link></li></b-button>
    <div class="foto">
      <img src="./../assets/images/cars-with-orangecar.png" alt="">
      </div>  
  </div>
</template>
<style lang="scss" scoped>
.container{
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
   a{
    text-decoration: none;
    list-style: none;
    color: rgb(73, 73, 73);    
  }
  a:hover{
    color: white;
  }
  .logo{
    background-color: black;
    padding: 1%;
    width: 18%;
    img{
      width:100%;
    }
  }
  .foto{
    margin-top:2%;
  }
}
</style>