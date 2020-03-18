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
          <img src="./../assets/images/facebook-icon.png" alt="">
          <img src="./../assets/images/instagram-icon.png" alt="">
          <img id="youtube" src="./../assets/images/youtube-icon.png" alt="">
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
            width: 10%;
            height:20%;
            margin-top: 7%;
        }
        #youtube{
            width: 14%;
            height:24%;
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
            width: 20%;
            height:26%;
            margin-top: 1%;
            margin-bottom: 2%;
        }
        #youtube{
            width: 24%;
            height:32%;
        }
      }
     }      
}
</style>>

