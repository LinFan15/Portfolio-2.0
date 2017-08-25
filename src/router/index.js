import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Welcome from '@/components/Welcome'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Disclaimer from '@/components/Disclaimer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/:lang/home',
      name: 'home',
      props: true,
      component: Home
    },
    {
      path: '/:lang/profile',
      name: 'profile',
      props: true,
      component: Profile
    },
    {
      path: '/:lang/skills',
      name: 'skills',
      props: true,
      component: Skills
    },
    {
      path: '/:lang/projects',
      name: 'projects',
      props: true,
      component: Projects
    },
    {
      path: '/:lang/contact',
      name: 'contact',
      props: true,
      component: Contact
    },
    {
      path: '/:lang/disclaimer',
      name: 'disclaimer',
      props: true,
      component: Disclaimer
    }
  ]
})
