<template>
  <div class="conteudo">
      <div class="endereco">
          <h6>Contact:</h6>
          <h6>JJ Auto Sales</h6>
          <h6>Find Ur Dream Car</h6>
          <Address><h6>Address: 20 Kings</h6>
          <h6> Hwy, New Rochelle, NY 10801</h6></Address>
          <h6>Marcos</h6>
          <h6>Phone: (914) 291-7211 - (914) 760-0161</h6>
      </div>
      <div class="social-midia">
          <a href="https://www.facebook.com/Findurdreamcar-102470148033793/?modal=admin_todo_tour"><img src="./../assets/images/facebook-icon.png" alt="facebbok"></a>
          <a href="https://www.instagram.com/findurdreamcar/"><img src="./../assets/images/instagram-icon.png" alt="instagram"></a>
          <a href="https://www.youtube.com/channel/UCcw5-sT88ThYWTXqEqFUQ8w"><img id="youtube" src="./../assets/images/youtube-icon.png" alt="youtube"></a>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.conteudo{
    background-color: black;
    color: white;
    min-height: 140px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 2%;
    width: 101%;
    .endereco{
        padding: 2%;
        h6{
            margin-top:7%;
            font-family: Aldrich;
        }
    }
    .social-midia{
        display: flex;
        justify-content:space-evenly;
        padding: 3%;
        width: 38%;
        margin-top: 7%;
        img{
            width: 30%;
            height:30%;
            margin-top: 7%;
        }
        #youtube{
            width: 37%;
            height:36%;
        }
    }
}  /* conteudo end */

@media screen and (max-width: 416px){
    .conteudo{
     flex-direction: column;
     align-items: center;   
      h6{
        font-size: 0.7em;
        margin-left: 2%;
      }
      .social-midia{        
        padding: 1%;
        width:50%;
        margin-top: 4%;
        margin-bottom: 2%;
        img{
            width: 40%;
            height:auto;
            margin-top: 1%;
            margin-bottom: 7%;
        }
        #youtube{
            width: 48%;
            height:auto;
        }
      }
     }      
}

@media screen and (min-width: 426px) and (max-width: 737px){
    .conteudo{
     flex-direction: column;
     align-items: center;
     width:110%; 
     margin-left: 12%;
    //  background-color: aqua;  
      h6{
        font-size: 0.7em;
        margin-left: 2%;
      }
      .social-midia{        
        padding: 1%;
        width:50%;
        margin-top: 4%;
        margin-bottom: 2%;
        img{
            width: 40%;
            height:auto;
            margin-top: 1%;
            margin-bottom: 7%;
        }
        #youtube{
            width: 48%;
            height:auto;
        }
      }
     }      
}  /* media end */
</style>>

