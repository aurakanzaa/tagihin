import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import bModal from 'bootstrap-vue/es/components/modal/modal'
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal'

import HelloWorld from '@/components/HelloWorld'
import Tagihin from '@/components/Tagihin'
import Paid from '@/components/Paid'
import Overdue from '@/components/Overdue'
import Open from '@/components/Open'
import History from '@/components/History'
// import Test from '@/components/Test'

// This imports <b-modal> as well as the v-b-modal directive as a plugin:
import { Modal } from 'bootstrap-vue/es/components';
Vue.use(Modal);

// This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
import { Card } from 'bootstrap-vue/es/components';
Vue.use(Card);

// This imports directive v-b-scrollspy as a plugin:
import { Scrollspy } from 'bootstrap-vue/es/directives';
Vue.use(Scrollspy);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },

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

    // {
    //   path: '/test',
    //   name: 'Test',
    //   component: Test
    // }
  ]
})
