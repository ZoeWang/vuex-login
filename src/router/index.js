import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve)

const Sample = resolve => require(['@/pages/sample/sample'], resolve) 

const Login = resolve => require(['@/pages/login/login'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/sample',
    	name: 'sample',
    	component: Sample
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
