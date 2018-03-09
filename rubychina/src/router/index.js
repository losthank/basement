import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Kind from '@/components/kind'
import Article from '@/components/article'
import User from '@/components/user'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      components: {
        main: Main,
        kind: Kind
      },
      meta: {
        keepAlive: true
      }

      
    },
    {
      path: '/topic/:id',
      name: 'article',
      components: {
        main: Article,
        kind:User
      }
    },
    {
      path:'/login',
      name:'Login',
      components:{
        main:Main,
        kind:Kind,
        Login:Login
      }
    }
  ]
})
