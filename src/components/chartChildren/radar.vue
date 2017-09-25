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
        type: 'radar',
        data: {
          labels: ['July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'test1', // 标题
              pointRadius: 4,
              borderDashOffset: 2,
              backgroundColor: 'rgba(98, 168, 234, .15)',
              borderColor: 'rgba(0,0,0,0)',
              pointBackgroundColor: 'primary',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'primary',
              data: [65, 59, 90, 81, 56, 55]
            },
            {
              label: 'test2',
              pointRadius: 4,
              borderDashOffset: 2,
              backgroundColor: 'rgba(250,122,122,0.25)',
              borderColor: 'rgba(0,0,0,0)',
              pointBackgroundColor: 'red',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'red',
              data: [28, 48, 40, 19, 96, 100]
            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          scales: {
            yAxes: [{
              stacked: true,
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
