<template>
  <div class="container">
      <div class="invite">
          <h3>Looking for a specific vehicle?</h3>          
          <h3 id="findIt"> We'll find it for you...</h3>
          <br>
          <p>We can access auto auctions that aren't open to the public, and we also have access 
            to dealers all over the country. We will track down exactly what you're looking for,
             we’ll inspect it, and then can arrange for shipping to your door.</p>
             <br>
             <p>Just fill out our easy Vehicle Finder form on our website. If there's something 
                 specific you're looking for beyond make and model, make sure you let us know in 
                 the comments box at the bottom of the form. Once you submit the form, one of our 
                 expert team members will call you to go over your request -</p>
      </div>
      <div class="form1">
          <h2>Find ur dream car:</h2>
      <form action="">         
            <b-form-group label-cols="4" label-cols-lg="2" label="Mark:" label-for="input-default">
            <b-form-input id="input-default"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="2" label="Model:" label-for="input-default">
            <b-form-input id="input-default"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="2" label="Color:" label-for="input-default">
            <b-form-input id="input-default"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="2" label="Year:" label-for="input-default">
            <b-form-input id="input-default"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="5" label-cols-lg="2" label="Max price:" label-for="input-default">
            <b-form-input id="input-default"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="2" label="Comments:" label-for="input-default">
             <b-form-textarea  id="textarea-no-resize" placeholder="comments here"                
             rows="4" no-resize ></b-form-textarea>  <!-- textrea end -->              
             </b-form-group>
            <b-button variant="outline-primary">Send</b-button>   
            
      </form>
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
 .container{
     display: flex;
     justify-content:space-evenly;
     padding: 1%;
     background-color: white;
     height: 10%;
     max-height: 10%;
  .form1{
      color: rgb(67, 48, 32); 
      text-align: center;
      width: 50%;
      margin-left: 2%;
      h2{
        color:  rgb(67, 48, 32);
      }
      form{
      margin-top:1.5%;
      padding: 2%;
      label{
          color:  rgb(67, 48, 32);
      }
    }
  }  /* form1 end */

  .invite{
      max-width: 50%;
      background: #0F2027;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, rgb(18, 20, 20), rgb(67, 48, 32), #0F2027);  /* Chrome 10-25, Safari 5.1-6 */     
      background: linear-gradient(to right, rgb(18, 20, 20), rgb(67, 48, 32), #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      color: white;
      padding: 3%;
      border-radius: 4%;
      margin-left: -1%;
      p{
          text-align: justify;
          font-family: Aldrich;
      }
      #findIt{
          margin-top: 1%;
      }
  }

          
 }
 
  @media screen and(max-width: 550px){
      h2{
          font-size: 1.3em;
      }
      [b-form-group]{
          font-size: 3em;
      }
      .container{
          flex-direction: column;
          .invite{
              max-width: 100%;
          }
          .form1{
              width: 100%;
              margin-top: 2%;
          }
      }
  } 

</style>>

