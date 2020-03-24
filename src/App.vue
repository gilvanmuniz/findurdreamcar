<template>
  <div id="app">    
    <router-view/>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  
}
</script>

<style lang="scss">
body{
  margin: 0;  
  background-image: url("./assets/images/mercedes-benz-row.jpg");
  background-repeat: no-repeat;
  background-size:102%;
  font-family: 'Anton';
  // font-family: 'Aldrich';
  color:  rgb(67, 48, 32);
  font-size: 1.2em;
}

@media screen and (max-width: 416px) {
  body{   
    background-color: white;
    background-image: null;
    background-repeat: no-repeat;
    background-size: 459px;;
  }
} /* media end */
@media screen and (min-width: 430px) and (max-width: 737px) {
  body{   
    background-color: white;
    background-image: null;
    background-repeat: no-repeat;
    background-size: 730px;;
  }
} /* media end */
</style>
