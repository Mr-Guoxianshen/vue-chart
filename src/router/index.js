import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import chart from '@/components/chart'
import chart2 from '@/components/chart2'
import chart3 from '@/components/chart3'
import chart4 from '@/components/chart4'
import chartBig from '@/components/chartBig'
import bar from '@/components/chartChildren/bar'
import pie from '@/components/chartChildren/pie'
import radar from '@/components/chartChildren/radar'
import RandomChart from '@/components/RandomChart'
import echarts from '@/components/echarts'
import echartsScatter from '@/components/echartsChildren/echartsScatter'
import echartsPie from '@/components/echartsChildren/echartsPie'
import echartsLine from '@/components/echartsChildren/echartsLine'
import echartsBlend from '@/components/echartsChildren/echartsBlend'
import visualMapContinuous from '@/components/echartsChildren/visualMapContinuous'
import visualMapPiecewise from '@/components/echartsChildren/visualMapPiecewise'
import echartsDrag from '@/components/echartsChildren/echartsDrag'

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
      path: '/bar',
      component: bar
    },
    {
      path: '/pie',
      component: pie
    },
    {
      path: '/radar',
      component: radar
    },
    {
      path: '/RandomChart',
      component: RandomChart
    },
    {
      path: '/echarts',
      component: echarts
    },
    {
      path: '/echartsScatter',
      component: echartsScatter
    },
    {
      path: '/echartsPie',
      component: echartsPie
    },
    {
      path: '/echartsLine',
      component: echartsLine
    },
    {
      path: '/echartsBlend',
      component: echartsBlend
    },
    {
      path: '/visualMapContinuous',
      component: visualMapContinuous
    },
    {
      path: '/visualMapPiecewise',
      component: visualMapPiecewise
    },
    {
      path: '/echartsDrag',
      component: echartsDrag
    },
    {
      path: '/echartsDrag',
      component: echartsDrag
    }
  ]
})
