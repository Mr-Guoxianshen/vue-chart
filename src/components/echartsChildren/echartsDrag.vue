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
      var symbolSize = 20 // 连接点大小
      var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40], [-6.5, 55], [4.5, 80]]

      var option = {
        title: {
          text: 'Dragging 测试'
        },
        tooltip: {
          triggerOn: 'none',
          formatter: function (params) {
            return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2)
          }
        },
        grid: {
        },
        xAxis: {
          min: -100,
          max: 80,
          type: 'value',
          axisLine: {onZero: false} // 是否在 0 刻度线 加入分界线
        },
        yAxis: {
          min: -30,
          max: 60,
          type: 'value',
          axisLine: {onZero: false}
        },
        dataZoom: [
          {
            type: 'slider',
            xAxisIndex: 0,
            filterMode: 'empty'
          },
          {
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'empty'
          },
          {
            type: 'inside',
            xAxisIndex: 0,
            filterMode: 'empty'
          },
          {
            type: 'inside',
            yAxisIndex: 0,
            filterMode: 'empty'
          }
        ],
        series: [
          {
            id: 'a',
            type: 'line',
            smooth: true,
            symbolSize: symbolSize,
            data: data
          }
        ]
      }
      setTimeout(function () {
        // Add shadow circles (which is not visible) to enable drag.
        myChart.setOption({
          graphic: echarts.util.map(data, function (item, dataIndex) {
            return {
              type: 'circle',
              position: myChart.convertToPixel('grid', item),
              shape: {
                cx: 0,
                cy: 0,
                r: symbolSize / 2
              },
              invisible: true,
              draggable: true,
              ondrag: echarts.util.curry(onPointDragging, dataIndex),
              onmousemove: echarts.util.curry(showTooltip, dataIndex),
              onmouseout: echarts.util.curry(hideTooltip, dataIndex),
              z: 100
            }
          })
        })
      }, 0)

      window.addEventListener('resize', updatePosition)
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts'))
      // 绘制图表
      myChart.setOption(option)
      myChart.on('dataZoom', updatePosition)

      function updatePosition () {
        myChart.setOption({
          graphic: echarts.util.map(data, function (item, dataIndex) {
            return {
              position: myChart.convertToPixel('grid', item)
            }
          })
        })
      }

      function showTooltip (dataIndex) {
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: dataIndex
        })
      }

      function hideTooltip (dataIndex) {
        myChart.dispatchAction({
          type: 'hideTip'
        })
      }

      function onPointDragging (dataIndex, dx, dy) {
        data[dataIndex] = myChart.convertFromPixel('grid', this.position)
        // Update data
        myChart.setOption({
          series: [{
            id: 'a',
            data: data
          }]
        })
      }
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
