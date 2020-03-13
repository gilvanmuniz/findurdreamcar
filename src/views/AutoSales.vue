<template>
  <div class="container">
    <cabecalho></cabecalho>       
    <h1 id="our">Our Premium Pre-owned automobiles</h1> 
    <img id="seta" src="./../assets/images-sales/seta_DESCER-1.png" alt="seta">
    <img id="seta2" src="./../assets/images-sales/seta_DESCER-1.png" alt="">
    <vitrine id="vitri" />
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
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  color: white;
  #our{
    font-family: Aldrich;
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

  #foot{
    width: 124%;
    margin-left: -2%;
  }

} /* container end */

@media screen and (max-width: 360px) {
.container{
 #our{    
    text-shadow: 1.2px 1.2px #000000;
    border: solid 2px white;
    padding: 1.2% 1.2%;  
    font-size:0.85em;      
  } /*  our end */ 

   #foot{
    width: 110%;
    padding: 3%;
    margin-left: 0%;     
  }
  }/*  containe end */  
} /* media end  */ 
</style>