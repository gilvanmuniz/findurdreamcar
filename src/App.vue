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
  background-size:cover;
  font-family: 'Anton';
  // font-family: 'Aldrich';
  color:  rgb(67, 48, 32);
  font-size: 1.2em;
}

@media screen and (max-width: 550px) {
 
}

</style>
