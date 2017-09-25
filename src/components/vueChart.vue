<template>
    <div class="small">
        <line-chart :chart-data="datacollection.data"></line-chart>
    </div>
</template>

<script>
import LineChart from './LineChart.js'
export default {
  name: 'vueChart',
  components: {
    LineChart
  },
  props: ['info'],
  data () {
    return {
      datacollection: {}
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = this.info
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
