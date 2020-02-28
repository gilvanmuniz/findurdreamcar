<template>
  <div id="app">
    <!-- <div id="nav">
      
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
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
  font-family: 'Anton';
  // font-family: 'Aldrich';
  color:  rgb(67, 48, 32);
  font-size: 1.2em;
}

@media screen and (max-width: 550px) {
 
}

</style>
