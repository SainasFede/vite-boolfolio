<script>
import ProjectCard from '../components/ProjectCard.vue';
import Header from '../components/partials/Header.vue';
import axios from 'axios';

export default {
  components: { ProjectCard,
    Header
   },
  name:'Project',
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
  <div class="container">
    <h1>Progetti</h1>
    <div class="row">
      <ProjectCard
      v-for="project in projects" :key="project.id" :project="project"/>
    </div>
  </div>
</template>

<style lang="scss">
    @use "../style/general.scss"
</style>