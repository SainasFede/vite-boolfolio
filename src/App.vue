<script>

import axios from 'axios';

export default {
  name:'App',
  data(){
    return {
      baseUrl:'http://127.0.0.1:8000/api',
      pUrl :'/project',
      projects : [],
    }
  },
  methods:{
     getApi(){
        axios.get(this.baseUrl + this.pUrl)
        .then(result=>{
        this.projects = result.data
        console.log(this.projects);
       })
     }
  },
  mounted(){
    this.getApi()
  }
}
</script>

<template>
  <div class="container">
    <h1>ciao</h1>
  </div>
</template>

<style lang="scss">
    @use "./style/general.scss"
</style>
