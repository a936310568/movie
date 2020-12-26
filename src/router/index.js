import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import MyCenter from '@/pages/mycenter/MyCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/MyCenter',
      name: 'MyCenter',
      component: MyCenter
    }
  ]
})
