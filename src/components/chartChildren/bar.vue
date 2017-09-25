<template>
  <div id="chart">
    <canvas id="myChart" width="400" height="300"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart'
  export default {
    name: 'chart',
    data () {
      return {
        myChart: ''
      }
    },
    created () { // type = line bar pie radar polarArea Doughnut
      //
    },
    mounted () {
      var ctx = document.getElementById('myChart')
      this.myChart = new Chart(ctx, {
        type: 'bar', // horizontalBar 水平条形图
        data: {
          labels: ['July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'test1', // 标题
              fill: true, // 是否填充
              backgroundColor: 'rgba(225,10,10,0.3)',
              borderColor: 'rgba(22,10,100,0.3)',
              borderWidth: 1,
              data: [65, 59, 0, 81, 56, 10]
            },
            {
              label: 'test2',
              fill: true,
              backgroundColor: 'rgba(98, 168, 234, .1)',
              borderColor: 'primary',
              borderWidth: 1,
              data: [35, 44, 37, 5, 69, 69]
            }
          ]
        },
        options: {
          maintainAspectRatio: true, // 页面缩放时保持纵横比
          scales: {
            yAxes: [{
              stacked: false,
              gridLines: {
                display: true,
                color: 'rgba(255,99,132,0.2)'
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          }
        }
      })
    },
    methods: {
      //
    }
  }
</script>

<style scoped>
  #chart {
    position: relative;
    height: 50vh;
    width: 50vw;
  }
</style>
