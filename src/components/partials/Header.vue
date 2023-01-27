<script>
export default {
  name: 'Header'
}
</script>

<template>

  <div class="container bg-warning">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">FedeFolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              
                <li class="nav-item">
                    <router-link :to="{name: 'home'}">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{name: 'about'}"><a class="nav-link" href="#">Chi Siamo</a></router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{name: 'contacts'}"><a class="nav-link" href="#">Contatti</a></router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{name: 'project'}"><a class="nav-link" href="#">Progetti</a></router-link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
  a{
    text-decoration: none;
  }
</style>