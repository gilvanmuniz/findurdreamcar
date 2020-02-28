<template>
  <div class="conteudo">
      <div class="endereco">
          <h6><Address>Address: 20 Kings Hwy, New Rochelle, NY 10801</Address></h6>
          <h6>Phone: (914) 291-7211</h6>
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
        img{
            width: 10%;
            height:40%;
            margin-top: 7%;
        }
        #youtube{
            width: 14%;
            height:52%;
        }
    }
}  /* conteudo end */

@media screen and (max-width: 550px){
      .social-midia{        
        padding: 2%;
        width:50%;
        img{
            width: 20%;
            height:30%;
            margin-top: 7%;
        }
        #youtube{
            width: 24%;
            height:32%;
        }
    }
}
</style>>

