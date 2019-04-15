import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/views/Index'
import Contact from '@/components/views/Contact'
import Services from '@/components/views/Services'
import Terms from '@/components/views/Terms'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index,
      meta: {
        nav: true
      }
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
      meta: {
        nav: true
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        nav: true
      }
    },
    {
      path: '/terms',
      name: 'Terms of Use',
      component: Terms,
      meta: {
        nav: false
      }
    }
  ]
})
