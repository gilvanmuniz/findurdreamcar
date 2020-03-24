<template>
  <div class="container">
    <cabecalho></cabecalho>       
    <h1 id="our">Our Premium Pre-owned automobiles</h1> 
    <img id="seta" src="./../assets/images-sales/seta_DESCER-1.png" alt="seta">
    <img id="seta2" src="./../assets/images-sales/seta_DESCER-1.png" alt="">
    <vitrine id="vitri" />
    <div class="marco">
      <img src="./../assets/images/Marco-tratada.jpg" alt="">
    </div>
    <Footer id="foot" />
  </div>
</template>
<script>
import Vitrine from './../components/Vitrine'
import Footer from './../components/Footer'
import Cabecalho from './../components/Cabecalho'
export default {
  components: {
    Vitrine,
    Footer,
    Cabecalho
  }
}
</script>
<style lang="scss" scoped>
.container{
  padding: 0%;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  color: white;
  #our{
    font-family: Aldrich;
    margin-top: 12%;
    text-shadow: 1.6px 1.6px #000000;
    border: solid 2px white;
    padding: 1.2% 1.2%;
    margin-top: 12%;
    border-radius:15%;
    background-color: rgba($color: #000000, $alpha: 0.3);    
  }
  #seta{
    margin-top:4%;
    width: 3%;
    height:22px;    
  }
  #seta2{
    margin-top:0.4%;
    width: 3%;
    height:22px
  }
  #vitri{
    margin-top: 11%;
    width:124%;
  }
  .marco{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #717276;
    width: 124%;
    height: auto;
    img{
      width: 45%;     
    }
  }

  #foot{
    margin-top: -2%;
    width: 124%;
    margin-left: -2%;
  }

} /* container end */

@media screen and (max-width: 416px) {
.container{
  padding:0;
  padding-left:1%;
 #our{   
    margin-top: 7%; 
    text-shadow: 1.2px 1.2px #000000;
    border: solid 2px white;
    padding: 1.2% 1.2%;  
    font-size:0.85em;      
  } /*  our end */ 
  #seta{    
    height:8px;    
  }
  #seta2{    
    height:8px
  }
  #vitri{
    margin-top: 14%;
    // width:100%;
  }
  .marco{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #717276;
    padding-left: 0.5%;
    width: 115%;
    margin-right: 4%;
    margin-left: 0%;
    
    img{
      width: 90%;
      margin-left: 5%;
    }
  }
   #foot{
    width: 116%;
    padding: 3%;
    margin-left: 0%;     
  }
  }/*  containe end */  
} /* media end  */ 

@media screen and (min-width: 431px) and (max-width: 737px) {
.container{
  padding:0;
  padding-left:0%;
 #our{   
    margin-top: 7%; 
    text-shadow: 1.2px 1.2px #000000;
    border: solid 2px white;
    padding: 1.2% 1.2%;  
    font-size:0.99em; 
    margin-left: -14%;     
  } /*  our end */ 
  #seta{    
    height:18px;
    width: 25px;
    margin-left: -14%;      
  }
  #seta2{    
    height:18px;
    width: 25px;
    margin-left: -14%;  
  }
  #vitri{
    margin-top: 14%;
    // width:100%;
  }
  .marco{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #717276;
    padding-left: 0.5%;
    width: 134%;
    margin-right: 4%;
    margin-left: 1%;
    
    img{
      width: 90%;
      margin-left: -3%;
    }
  }
   #foot{
    width: 134%;
    padding: 3%;
    margin-left: -4%;     
  }
  }/*  containe end */  
} /* media end  */ 
</style>