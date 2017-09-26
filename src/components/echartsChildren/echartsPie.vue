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
              /* {
                value: 100,
                name: '颜色设置',
                itemStyle: {
                  normal: {
                    color: 'red' // 扇形颜色也可以通过数据下每项进行设置
                  }
                }
              } */
            ],
            roseType: 'angle', // 南丁格尔图
            label: {
              normal: { // 正常样式
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
              normal: { // 正常样式
                // color: 'red', // 扇形背景颜色，设置后全局背景颜色不在起作用
                shadowBlur: 200, // 阴影大小
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              emphasis: {
                // 鼠标 hover 的样式
              }
            }
          }
        ],
        // 扇形背景颜色
        color: ['rgb(254,67,101)', 'rgb(252,157,256)', 'rgb(249,205,173)', 'rgb(200,200,169)', 'rgb(131,175,155)']
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
