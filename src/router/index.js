import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tagihin from '@/components/Tagihin'
import Paid from '@/components/Paid'
import Overdue from '@/components/Overdue'
import Open from '@/components/Open'
import History from '@/components/History'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }

    {
      path: '/',
      name: 'Tagihin',
      component: Tagihin
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/paid',
      name: 'Paid',
      component: Paid
    },
    {
      path: '/overdue',
      name: 'Overdue',
      component: Overdue
    },
    {
      path: '/open',
      name: 'Open',
      component: Open
    },
  ]
})
