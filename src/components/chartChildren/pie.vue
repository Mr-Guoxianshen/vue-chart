<template>
  <div>
    <div id="chart1">
      <canvas id="myChart1" width="400" height="300"></canvas>
    </div>
    <div id="chart2">
      <canvas id="myChart2" width="400" height="300"></canvas>
    </div>
    <div id="chart3">
      <canvas id="myChart3" width="400" height="300"></canvas>
    </div>
  </div>
</template>

<script>
  import Chart from 'chart'
  export default {
    name: 'chart',
    data () {
      return {
        myChart1: '',
        myChart2: '',
        myChart3: ''
      }
    },
    created () { // type = line bar pie radar polarArea Doughnut
      //
    },
    mounted () {
      var ctx1 = document.getElementById('myChart1')
      this.myChart1 = new Chart(ctx1, {
        type: 'pie',
        data: {
          labels: ['July', 'August', 'September', 'October'],
          datasets: [
            {
              label: 'test1', // 标题
              fill: true, // 是否填充
              backgroundColor: ['#E53935', '#42A5F5', '#66BB6A', '#FFEE58'],
              borderColor: '#fff',
              borderWidth: 2,
              data: [100, 50, 200, 10],
              cubicInterpolationMode: 'monotone', // 用于从离散数据点插入平滑曲线的算法, 单调和默认两个值
              spanGaps: 'false' // 如果为true，则将在无数据或零数据的点之间绘制行。如果是false，NaN数据点会在行中创建一个中断
            }
          ]
        },
        options: {
          maintainAspectRatio: true
        }
      })

      var ctx2 = document.getElementById('myChart2')
      this.myChart2 = new Chart(ctx2, {
        type: 'polarArea',
        data: {
          labels: ['July', 'August', 'September', 'October'],
          datasets: [
            {
              label: 'test1', // 标题
              fill: true, // 是否填充
              backgroundColor: ['#E53935', '#42A5F5', '#66BB6A', '#FFEE58'],
              borderColor: '#fff',
              borderWidth: 2,
              data: [100, 50, 200, 10],
              cubicInterpolationMode: 'monotone', // 用于从离散数据点插入平滑曲线的算法, 单调和默认两个值
              spanGaps: 'false' // 如果为true，则将在无数据或零数据的点之间绘制行。如果是false，NaN数据点会在行中创建一个中断
            }
          ]
        },
        options: {
          maintainAspectRatio: true
        }
      })

      var ctx3 = document.getElementById('myChart3')
      this.myChart3 = new Chart(ctx3, {
        type: 'doughnut',
        data: {
          labels: ['July', 'August', 'September', 'October'],
          datasets: [
            {
              label: 'test1', // 标题
              fill: true, // 是否填充
              backgroundColor: ['#E53935', '#42A5F5', '#66BB6A', '#FFEE58'],
              borderColor: '#fff',
              borderWidth: 2,
              data: [100, 50, 200, 10],
              cubicInterpolationMode: 'monotone', // 用于从离散数据点插入平滑曲线的算法, 单调和默认两个值
              spanGaps: 'false' // 如果为true，则将在无数据或零数据的点之间绘制行。如果是false，NaN数据点会在行中创建一个中断
            }
          ]
        },
        options: {
          maintainAspectRatio: true
        }
      })
    },
    methods: {
      //
    }
  }
</script>

<style scoped>
  #chart1 {
    position: relative;
    height: 50vh;
    width: 50vw;
    margin-bottom: 50px;
  }
  #chart2 {
    position: relative;
    height: 50vh;
    width: 50vw;
    margin-bottom: 50px;
  }
  #chart3 {
    position: relative;
    height: 50vh;
    width: 50vw;
  }
</style>
