import { createRouter, createWebHistory} from "vue-router";
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import Project from './pages/Project.vue';
import ProjectDetail from './pages/ProjectDetail.vue';
import Error404 from './pages/Error404.vue';

const router = createRouter({
  history: createWebHistory(),
  //linkExactActiveClass
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/project/projectdetail/:slug',
      name: 'projectdetail',
      component: ProjectDetail
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error404
    },
  ]
});

export { router };