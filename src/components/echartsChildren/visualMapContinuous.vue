<template>
  <div>
    <div id="echarts">

    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import 'echarts/map/js/world'
  export default {
    name: 'echarts',
    data () {
      return {
        myChart: ''
      }
    },
    created () {
      //
    },
    mounted () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'World Population (2010)',
          subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
          sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
          left: 'center',
          top: 'top'
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            var value = (params.value + '').split('.')
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + '.' + value[1]
            return params.seriesName + '<br/>' + params.name + ' : ' + value
          }
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        visualMap: {
          type: 'continuous',
          min: 0,
          max: 1000000,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          color: ['orangered', 'yellow', 'lightskyblue']
        },
        series: [
          {
            name: 'World Population (2010)',
            type: 'map',
            mapType: 'world',
            roam: true,
            itemStyle: {
              emphasis: {label: {show: true}}
            },
            data: [
              {name: 'Australia', value: 22404.488},
              {name: 'Canada', value: 34126.24},
              {name: 'China', value: 1359821.465},
              {name: 'India', value: 1205624.648},
              {name: 'Kazakhstan', value: 15921.127},
              {name: 'Russia', value: 21861.476},
              {name: 'Brazil', value: 195210.154}
            ]
          }
        ]
      })
    },
    methods: {
      //
    }
  }
</script>

<style scoped>
  #echarts {
    position: relative;
    height: 80vh;
    width: 50vw;
  }
</style>
