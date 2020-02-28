<template>
  <div class="container">
    <div class="topo">
        <div class="quadriculado">
          <img id="faixa-topo" src="./../assets/images-sales/faixa-quadriculada-1.png" alt="">
          <img id="faixa-topo" src="./../assets/images-sales/faixa-quadriculada-1.png" alt="">
          <img id="faixa-topo" src="./../assets/images-sales/faixa-quadriculada-1.png" alt="">
        </div><!-- quadriculado end -->
      <div class="social-midia">
        <img id="logo" src="./../assets/images-sales/facebbook.white-SMALL-1.png" alt="">
        <img id="logo" src="./../assets/images-sales/instagram-white-SMALL-1.png" alt="">
        <img id="logo" src="./../assets/images-sales/youtube-white-SMALL-1.png" alt="">
      </div><!-- social-midia end -->
    </div><!-- topo end -->
    <div class="logo">
      <img id="insta" src="./../assets/images/logo_menu.png" alt="">
    </div>
    
    <h1>Our Premium Pre-owned automobiles</h1> 
    <h4>Page under construction</h4>   
    <b-button variant="outline-secondary"><li><router-link :tag="a" to="/">Home</router-link></li></b-button>
    
  </div>
</template>
<style lang="scss" scoped>

.container{
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  color: white; 
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
    width: 14%;
    margin-left:-85%;
    img{
      width:100%;
    }
  }/* logo end */

  .topo{
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: black;
    color: white;

    .quadriculado{
     max-height: 1%;
     display: flex;
     img{
       max-height: 2%;
     }
     #faixa-topo{
       height: 20px;
     }
    }
   
    .social-midia{
      padding: 0.5%;
      background-color: black;
      width: 7%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      float: right;
      margin-right: 0.6%;
      margin-left: 88%;
      img{
        margin-left: 4%;
      }
    } /* social-midia end */
  } /* topo end */

  
  
} /* container end */
</style>