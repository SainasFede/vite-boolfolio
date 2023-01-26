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
  <div class="card" style="width: 18rem;">
  <img src="{{project.cover_image}}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{project.name}}</h5>
    <h5 class="card-title">{{project.client_name}}</h5>
    <h6 class="card-title">{{project.category.type}}</h6>
    <p>{{project.summary}}</p>
  </div>
</div>
</template>

<style>

</style>