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
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts Pie测试',
          textStyle: {
            color: '#fff'
          }
        },
        backgroundColor: '#2c343c',
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [
              {value: 235, name: '视频广告'},
              {value: 274, name: '联盟广告'},
              {value: 310, name: '邮件营销'},
              {value: 335, name: '直接访问'},
              {value: 400, name: '搜索引擎'}
            ],
            roseType: 'angle', // 南丁格尔图
            label: {
              normal: {
                textStyle: { // 文字颜色
                  color: 'rgba(255, 255, 255, 0.3)'
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: { // 标签的视觉引导线的颜色
                  color: 'rgba(255, 255, 255, 0.3)'
                }
              }
            },
            itemStyle: { // 扇形颜色
              normal: {
                color: '#c23531',
                shadowBlur: 200, // 阴影大小
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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
    height: 50vh;
    width: 50vw;
    top: 50px;
  }
</style>
