<template>
    <div class="small">
        <line-chart :chart-data="datacollection"></line-chart>
        <button @click="fillData()">Randomize</button>
    </div>
</template>

<script>
import LineChart from './LineChart.js'
export default {
  components: {
    LineChart
  },
  data () {
    return { // 数据采集, labels: 分类条目  datasets: 各目录数据
      datacollection: { labels: [], datasets: [] }
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      let result = {
        labels: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'One',
            backgroundColor: '#eeeeee',
            cubicInterpolationMode: 'monotone',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: 'Two',
            backgroundColor: 'deepskyblue',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
      this.datacollection = result
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style>
.small {
  width: 500px;
  height: 400px;
}
</style>