<template>
<div class="galeria">
    <div class="container1">
      <div id="card1" class="card">
         <router-link to="/carro1"> <img src="./../assets/images-sales/mercedes2-1.png" alt=""></router-link>         
          <div  class="card-footer ">
              <h2>2009 Mercedes Benz</h2>
              <h5>C300 96.200 Miles</h5>
          </div> <!-- card-footer end  -->         
      </div><!--  card end --> 
    <div class="card"  >
        
         <router-link to="/carro2"> <img src="./../assets/images-sales/mercedes.png" alt=""></router-link>
         
          <div class="card-footer ">
              <h2>2010 Mercedes Benz</h2>
              <h5>E550. 11.700 Miles</h5>
          </div> <!--  card-footer end -->          
      </div><!--  card end --> 
</div><!--  container end --> 
    <div class="container1 ">
      <div id="card1" class="card">
         <router-link to="#"> <img  src="./../assets/images/coming-soon.png" alt=""></router-link>         
          <div  class="card-footer ">
              <h2>New Arrivals.</h2>
              <h5>Coming soon...</h5>
          </div> <!-- card-footer end  -->         
      </div><!--  card end --> 
    <div class="card" id="soon2"  >        
         <router-link to="#"> <img  src="./../assets/images/coming-soon.png" alt=""></router-link>
         
          <div class="card-footer ">
              <h2>New Arrivals.</h2>
              <h5>Coming soon...</h5>
          </div> <!--  card-footer end -->          
      </div><!--  card end --> 
</div><!--  container end --> 
    
</div>
  
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {

}
</script>

<style lang="scss" scoped>
.galeria{
    display: flex;
    flex-direction: column;
    .container1{
    min-height: 35%;
    width: 97%;
    padding: 2%;
    padding-left: 3%;
    padding-bottom: 6%;
    background-color: gray;
    display: flex;     
    justify-content:space-around;
    text-align: end;
    .card{
        width: 28%;
        height: 26%;
        border: solid 6px black;
        background-color: black;
         &:hover {
        transform: scale(1.1);
        text-decoration: none;
        box-shadow: 0 7px 10px rgba(255,255,255,0.9);
        // display: flex;
        // flex-direction: column;
        // justify-content: center;
        // align-items: center;
      } 
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

}
  
}/*  container end */ 
@media screen and (max-width: 416px) {
 .galeria{
     .container1{
      justify-content:center;
      align-items: center;
      padding: 4%;
      padding-bottom: 6%;
      padding-right: 0;
      flex-direction: column;
      width:100%;
      margin-top: -5%;
      box-sizing: 0;
       .soon{
            width: 100%;
            margin-left: -2%;
            margin-top: -15%;            
        }
        #soon2{
            display: none;
        }
       .card{
        width: 80%;
        height:auto;
        margin-left:-2.5%;
        margin-top: 4%;
        img{
            width:100%;
        }        
       .card-footer{
            h2{
                font-size:0.9em;            
            }
        }/* card-footer end */  
        
  }/*  card end */ 

  }/*  container1 end */ 

 } /* GALERIA end */     
 
} /* MEDIA end */

@media screen and (min-width: 430px) and (max-width: 737px) {
 .galeria{
     margin-top: 20%;
     .container1{
      justify-content:flex-start;
      align-items: flex-start;
      padding: 1%;
      padding-bottom: 2%;
      padding-right: 0;
      flex-direction: column;
      width:108%;
      margin-top: 0%;
      box-sizing: 0;
      margin-left: -5%;
       .soon{
            width: 100%;
            margin-left: -2%;
            margin-top: -20%;            
        }
        #soon2{
            display: none;
        }
       .card{
        width: 80%;
        height:auto;
        margin-left:7%;
        margin-top: 4%;
        img{
            width:100%;
        }        
       .card-footer{
           width: 100%;
           margin-left: 1%;
            h2{
                font-size:0.9em;            
            }
        }/* card-footer end */  
        
  }/*  card end */ 

  }/*  container1 end */ 

 } /* GALERIA end */     
 
} /* MEDIA end */
</style>