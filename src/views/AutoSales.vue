<template>
  <div class="container">
    <div class="topo">
        <div class="quadriculado">
          <img id="faixa-topo" src="./../assets/images-sales/faixa-quadriculada-1.png" alt="">
          <!-- <img id="faixa-topo" src="./../assets/images-sales/faixa-quadriculada-1.png" alt=""> -->
          <!-- <img id="faixa-topo" src="./../assets/images-sales/faixa-quadriculada-1.png" alt=""> -->
        </div><!-- quadriculado end -->
          <div class="nav-menu">
            <div class="menu">
              <button ><li><router-link  to="/">Home</router-link></li></button>
            </div>
            <div class="social-midia">
              <a href="#"><img id="logo" src="./../assets/images-sales/facebbook.white-SMALL-1.png" alt="facebook"></a>
              <a href="#"><img id="logo" src="./../assets/images-sales/instagram-white-SMALL-1.png" alt="instagram"></a>
              <a href="#"><img id="logo" src="./../assets/images-sales/youtube-white-SMALL-1.png" alt="youtube"></a>
            </div><!-- social-midia end -->
          </div><!--  nav-menu end --> 
      
    </div><!-- topo end -->
    <div class="logo">
      <img id="insta" src="./../assets/images/logo_menu.png" alt="">
    </div><!--  logo class end --> 
    
    <h1 id="our">Our Premium Pre-owned automobiles</h1> 
    <h4>Page under construction</h4>   
   
    <img id="seta" src="./../assets/images-sales/seta_DESCER-1.png" alt="seta">
    <img id="seta2" src="./../assets/images-sales/seta_DESCER-1.png" alt="">
    <vitrine id="vitri" />
    <Footer id="foot" />
  </div>
</template>
<script>
import Vitrine from './../components/Vitrine'
import Footer from './../components/Footer'
export default {
  components: {
    Vitrine,
    Footer
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
    margin-top: 22%;
    border-radius:15%;
    background-color: rgba($color: #000000, $alpha: 0.3);    
  }
  #seta{
    margin-top:15%;
    width: 5%;
  }
  #seta2{
    margin-top:0.4%;
    width: 5%;
  }
  #vitri{
    margin-top: 9%;
    width:124%;
  }
   li{
     list-style: none;
   }
   a{
    text-decoration: none;    
    color: rgb(73, 73, 73);    
  }/*  A END */ 
  a:hover{
    color: white;
  }
  .logo{
    background-color: black;
    padding: 1%;
    width: 14%;
    margin-left:-65%;
    margin-top: 2%;
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
       width: 100%;
       border-bottom: solid 1px white;
     }
     #faixa-topo{
       height: 20px;
     }
    } /* quadriculado end  */ 
    .nav-menu{      
      width: 100%;
      display: flex;
      .social-midia{
      padding: 0.8%;
      background-color: black;
      width: 22%;
      display: flex;
      justify-content:center;
      align-items: center;
      float: right;
      margin-left: 65%;    
      
      a{
        margin-left: 4%;
      }
    } /* social-midia end */
     .menu{        
       margin-left: 10%;
     }
      li{
        border-radius: 8%;
        text-decoration: none;
        list-style: none;
        a:hover{
          color: orange;
        }
      }     
    }    
  } /* topo end */ 
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
.logo{
    background-color: black;
    padding: 1%;
    width:20%;
    margin-left:-45%;
    margin-top: 10%;
    img{
      width:100%;
    }
  }/* logo end */  
.topo{   
    .quadriculado{
     max-height: 1%;
     display: flex;     
     #faixa-topo{
       height: 10px;
     }
    } /* quadriculado end  */ 
    .nav-menu{     
      .social-midia{      
        float: right;
        margin-left: 45%;   
       a{
        margin-left: 8%;
       }/*  img end */ 
    } /* social-midia end */
     .menu{        
       margin-left: 6%;
       li{
         margin-top: -3%;
       }
       button{
         height: 80%;         
       }
     }
          
    }    
  } /* topo end */ 
   #foot{
    width: 110%;
    padding: 3%;
    margin-left: 0%;     
  }
  }/*  containe end */  
} /* media end  */ 
</style>