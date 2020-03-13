<template>
  <div class="container1">
      <div id="card1" class="card">
         <router-link to="/carro1"> <img src="./../assets/images-sales/mercedes2-1.png" alt=""></router-link>         
          <div  class="card-footer ">
              <h2>2009 Mercedes Benz</h2>
              <h5>300C. 96.200 Miles</h5>
          </div> <!-- card-footer end  -->         
      </div>
    <div class="card"  >
        
         <router-link to="/carro2"> <img src="./../assets/images-sales/mercedes.png" alt=""></router-link>
         
          <div class="card-footer ">
              <h2>2010 Mercedes Benz</h2>
              <h5>E550. 11.700 Miles</h5>
          </div> <!--  card-footer end -->          
      </div><!--  card end --> 
</div><!--  container end -->   
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {

}
</script>

<style lang="scss" scoped>
.container1{
    min-height: 35%;
    width: 100%;
    padding: 3%;
    padding-bottom: 6%;
    background-color: gray;
    display: flex;     
    justify-content:space-around;
    text-align: end;
    .card{
        width: 28%;
        height: 26%;
        border: solid 6px black; 
        img{
           width: 100%;
        //    height:22rem; 
        }
        .card-footer{
          background-color: black;
          border: solid 1px black;
          text-align: center;
          padding: 2%;
          width: 103.7%;
          margin-left: -2%;
          h2{
              font-family: Aldrich;
              font-size: 1.6em;
              margin-top:2.5%;
          }
          h5{
             font-family: Aldrich; 
          }
        }
    }   
}/*  container end */ 
@media screen and (max-width: 360px) {
  .container1{
      justify-content:start;
      #card1{
            margin-left:9%;
       }
       .card{
        width: 38%;
        height:auto;
        margin-left:6%;        
    .card-footer{
        h2{
            font-size:0.9em;            
        }
    }    
  }/*  card end */ 

  }/*  container1 end */ 
 
}
</style>