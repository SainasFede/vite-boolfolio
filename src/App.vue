<script>
import ProjectCard from './components/ProjectCard.vue';
import Header from './components/partials/Header.vue';
import axios from 'axios';

export default {
  components: { ProjectCard,
    Header
   },
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
        this.projects = result.data.projects
       })
     }
  },
  mounted(){
    this.getApi()
  }
}
</script>

<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.css' integrity='sha512-FA9cIbtlP61W0PRtX36P6CGRy0vZs0C2Uw26Q1cMmj3xwhftftymr0sj8/YeezDnRwL9wtWw8ZwtCiTDXlXGjQ==' crossorigin='anonymous'/>
    <title>Document</title>
  </head>
  <body>
    <Header/>
    <router-view>
    </router-view>
  </body>
  </html>

</template>

<style lang="scss">
    @use "./style/general.scss"
</style>
