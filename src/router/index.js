import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import About from '@/components/About'
import Contact from '@/components/Contact'
import BlogDetail from '@/components/BlogDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Blog,
      children: [
        {
          path: '/people/:id',
          name: 'BlogDetail',
          component: BlogDetail
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
    ,
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history'
})
