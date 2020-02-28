<template>
  <div class="home">      
    <video autoplay muted loop>
      <source src="./../assets/videos/file.mp4" type="video/mp4">
    </video>
    <div class="findur">
      <img id="mouse" src="./../assets/images/mouse.gif" alt="mouse"> 
      <img id="find-image" src="./../assets/images/findurdreamcar.png" alt="">
    </div>
    
    <div class="nav1">      
      <img src="./../assets/images/findurdreamcar-menu.png" alt="JJ">
    <nav>         
       <ul>
         <li><router-link to="/">Home</router-link></li>
         <li><router-link to="/autosales">Auto Sales</router-link></li>
         <li><a href="#dreamcar">findurdreamcar</a></li>
      </ul>      
    </nav>    
  </div>  <!-- nav1 end -->   
        <FindUrDreamCar id="dreamcar" class="dream" /> 
        <Footer />
  </div>   <!-- home end -->
</template>

<script>
// @ is an alias to /src

import FindUrDreamCar from './../components/FindUrDreamCarForm'
import Footer from './../components/Footer'
export default {
  name: 'Home',
  components: {
    FindUrDreamCar,
    Footer
  }
  
}
</script>
<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  video{
  position: relative;
  margin-top:-2%;
  right: 1%;  
  min-width: 104%;
	min-height: 100%;
}

.nav1{
  position: fixed;
  top: 0%;
  left: -0.2%;
  color: white;
  width:100%;
  height: 12%;
  display: flex;
  justify-content: space-around;
  background-color: rgba($color: #000000, $alpha: 0.5);
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 1.2%;
  padding-bottom: 1%;
  img{
    margin-top: 0.6%;
    width: 19%;
    height:98%;
  }
  nav{      
   margin-left: 40%;
   width: 130%;
  ul{
    margin-top: 2%;
  }
  ul li{
    display: inline;
    padding: 5px;       
  }
  ul li a{
    color: aliceblue;
    text-decoration: none;
    font-size: 0.8em;
    font-family: Aldrich;
    margin-left: 2%;  
    // background-color: rgba(233, 135, 70, 0.8 ); 
    border: 1px solid orange;
    padding: 0.5%  1% 0.5% 1%;
    border-radius: 4%;
    color:white; 
  }
    ul li a:hover{
      color: orange;
    }  
  
} /* nav end */

}/* nav class end */



.findur{
  position: relative;
  margin-top:-10%;
  margin-left: 32%;
  display: flex;
  flex-direction: column;
  img{
    width: 60%;    
  }
  #find-image{
    margin-top: 6%;
  }
  #mouse{
    width: 7%;
    height: 7%;
    margin-top: -14%;
    margin-bottom: 2%;
    margin-left: -40%;
  } 
}  /* findur end */



#dreamcar{
 margin-top: 4%; 
 min-width: 96%;  
 max-height: 10%;
 height: 10%; 
}  /* .dream end */

}  /* home end */

 

@media screen and (max-width:550px) {
.home{
  video{
  position: relative;
  top:-30%;
  right: 0;  
  max-width: 100%; 
	
}
.nav1{   
  padding-left: 1%;
  padding-right: 1%;
  padding-top: 0.2%;
  padding-bottom: 0.3%;    
  img{
    margin-top: 0.6%;
    width: 18%;
    height:18%;
  } 
   nav{
    max-width: 549px; 
    margin-left:0.4%;
    ul{
    margin-top: 0.1%;
  }
  ul li{    
    padding: 1px;       
  }
   ul li a{   
    font-size: 11px;
    margin-left: 0.1%;              
  } 
   
  }
   
}
.mouse{
  position: relative;
  margin-top:-10%;
  margin-left:-23%;
  img{
    width:8%;    
  }  
}
.dream{
    width: 99%;
 }
} /* home end */

} /* media end */
</style>
