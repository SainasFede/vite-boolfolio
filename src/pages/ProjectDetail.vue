<script>
import axios from 'axios';

export default {
name: 'ProjectDetail',
data(){
  return {
        baseUrl:'http://127.0.0.1:8000/api',
        pUrl :'/project/',
        project: {}
      }
},
methods:{
  getApi2(){
    console.log(this.baseUrl + this.pUrl + this.$route.params.slug);
    axios.get(this.baseUrl + this.pUrl + this.$route.params.slug)
    .then(result =>{
      this.project = result.data;
      console.log(this.project.name);
    })
},

},
created(){
  this.getApi2();
}
}
</script>

<template>
  <h1>Detail</h1>
  <div class="container">
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">C{{ project.name }}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
</template>

<style>

</style>