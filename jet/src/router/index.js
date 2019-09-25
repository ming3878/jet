import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import hotel from '../components/hotel.vue'
import folder from '../components/folder.vue'
import explore from '../components/explore.vue'
import my from '../components/my.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/home',component:home},
    {path:'/folder',component:folder},
    {path:'/hotel',component:hotel},
    {path:'/explore',component:explore},
    {path:'/my',component:my}
  ]
})
