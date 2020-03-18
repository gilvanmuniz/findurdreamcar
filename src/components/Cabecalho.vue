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
              <button id="salles" ><li><router-link to="/autosales">Auto Sales</router-link></li></button>
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
  </div>
</template>

<script>
export default {

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
    margin-top: 4.4%;
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
      margin-left: 56%;    
      
      a{
        margin-left: 4%;
      }
    } /* social-midia end */
     .menu{
       margin-top:1%;
       display: flex;        
       margin-left: 10%;
       #salles{
         width: 105px;
       }
       button{
         max-height:30px;
       }
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
  
} /* container end */

@media screen and (max-width:416px) {
.container{

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
 
  }/*  containe end */  
} /* media end  */ 
</style>
