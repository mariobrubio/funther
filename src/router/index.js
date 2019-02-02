import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import Therapist from '@/components/Therapist'
import Signup from '@/components/user/Signup'
import Signin from '@/components/user/Signin'
import Settings from '@/components/user/Settings'

import Exercises from '@/components/Exercises'
import Arms1 from '@/components/Arms1'
import Arms2 from '@/components/Arms2'
import Arms3 from '@/components/Arms3'
import Knees1 from '@/components/Knees1'
import Knees2 from '@/components/Knees2'
import Knees3 from '@/components/Knees3'
import Progress from '@/components/Progress'
import Error404 from '@/components/Error404.vue'
import Songs from '@/components/Songs.vue'

import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      name: '404',
      component: Error404
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin',
      name: 'Therapist',
      component: Therapist,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/exercises',
      name: 'Exercises',
      component: Exercises,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/arms1',
      name: 'Arms1',
      component: Arms1,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/arms2',
      name: 'Arms2',
      component: Arms2,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/arms3',
      name: 'Arms3',
      component: Arms3,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/knees1',
      name: 'Knees1',
      component: Knees1,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/knees2',
      name: 'Knees2',
      component: Knees2,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/knees3',
      name: 'Knees3',
      component: Knees3,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/progress',
      name: 'Progress',
      component: Progress,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/songs',
      name: 'Songs',
      component: Songs,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('/signin')
  else if (!requiresAuth && currentUser) next('/')
  else next()
})

export default router
