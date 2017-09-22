<template>
  <div id="chart">
    <canvas id="myChart2" width="400" height="300"></canvas>
  </div>
</template>

<script>
import Chart from 'chart'
export default {
  name: 'chart',
  data () {
    return {
      myChart2: ''
    }
  },
  mounted () {
    var ctx2 = document.getElementById('myChart2')
    this.myChart2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'test1', // 标题
            fill: true, // 是否填充
            backgroundColor: 'rgba(225,10,10,0.3)',
            borderColor: 'rgba(225,103,110,1)',
            borderWidth: 1,
            pointRadius: 3, // point, 连接点
            pointBorderColor: 'red',
            pointStrokeColor: '#fff',
            pointStyle: 'crossRot', // 设置连接点样式
            pointBackgroundColor: 'primary',
            pointHoverBackgroundColor: 'red',
            data: [65, 59, 0, 81, 56, 10],
            cubicInterpolationMode: 'monotone', // 用于从离散数据点插入平滑曲线的算法, 单调和默认两个值
            spanGaps: 'false' // 如果为true，则将在无数据或零数据的点之间绘制行。如果是false，NaN数据点会在行中创建一个中断
          },
          {
            label: 'test2',
            fill: true,
            backgroundColor: 'rgba(98, 168, 234, .1)',
            borderColor: 'primary',
            borderWidth: 1,
            pointRadius: 3,
            pointBorderColor: 'green',
            pointStrokeColor: 'deepskyblue',
            pointStyle: 'crossRot',
            pointBackgroundColor: 'black',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'primary',
            data: [35, 44, 37, 5, 69, 69],
            cubicInterpolationMode: 'monotone',
            spanGaps: 'false'
          }
        ]
      },
      options: {}
    })
  }
}
</script>

<style scoped>
  #chart {
    height: 400px;
    width: 500px;
  }
</style>
