<template>
  <div>
    <div id="echarts">

    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
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
      function fetchData (cb) {
        // 通过 setTimeout 模拟异步加载
        setTimeout(function () {
          cb({
            categories: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
            data: [5, 20, 36, 10, 10, 20]
          })
        }, 2000)
      }
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts'))
      // 绘制图表
      myChart.showLoading()
      fetchData(function (data) {
        myChart.hideLoading()
        myChart.setOption({
          title: {
            text: '异步数据加载示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: data.categories
          },
          yAxis: {},
          series: [{
            // 根据名字对应到相应的系列
            name: '销量',
            type: 'line',
            data: data.data
          }]
        })
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
