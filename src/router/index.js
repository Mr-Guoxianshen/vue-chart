import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import chart from '@/components/chart'
import chart2 from '@/components/chart2'
import chart3 from '@/components/chart3'
import chart4 from '@/components/chart4'
import chartBig from '@/components/chartBig'
import RandomChart from '@/components/RandomChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/chart',
      component: chart
    },
    {
      path: '/chart2',
      component: chart2
    },
    {
      path: '/chart3',
      component: chart3
    },
    {
      path: '/chart4',
      component: chart4
    },
    {
      path: '/chartBig',
      component: chartBig
    },
    {
      path: '/RandomChart',
      component: RandomChart
    }
  ]
})
