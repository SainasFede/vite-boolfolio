<script>
export default {
  name: 'ProjectCard',
  data(){
    return{
      }
  },
  props:{
    project: Object
  }

}
</script>

<template>
  <div class="card m-2 text-black" style="width: 18rem;">
  <img src="{{project.cover_image}}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"><router-link :to="{name: 'projectdetail', params:{slug: project.slug} }">{{project.name}}</router-link></h5>
    <h5 class="card-title">{{project.client_name}}</h5>
    <h6 class="card-title">{{project.technologies.type}}</h6>
    <h6 class="card-title">{{project.category.type}}</h6>
    <p>{{project.summary}}</p>
  </div>
</div>
</template>

<style>

</style>