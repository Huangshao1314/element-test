import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DailogMT from '@/pages/elementUI/Dailog'
import Layout from '@/pages/elementUI/Layout'
import Test from '@/pages/elementUI/Test'
import LayoutXY from '@/pages/elementUI/LayoutXY'
import Languge from '@/pages/elementUI/Languge'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/DailogMT',
      name: 'DailogMT',
      component: DailogMT
    }, {
      path: '/Layout',
      name: 'Layout',
      component: Layout
    }, {
      path: '/Test',
      name: 'Test',
      component: Test
    }, {
      path: '/LayoutXY',
      name: 'LayoutXY',
      component: LayoutXY
    }, {
      path: '/Languge',
      name: 'Languge',
      component: Languge
    }
  ]
})
