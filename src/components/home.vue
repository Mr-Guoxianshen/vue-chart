<template>
  <div class="home">
    <h1>{{ testChart }}</h1>
    <vueChart :info="info"></vueChart>
  </div>
</template>

<script>
import vueChart from './vueChart'
export default {
  name: 'chart',
  components: { vueChart },
  data () {
    return {
      testChart: 'HOME',
      tttt: 'hehe',
      info: {
        type: 'line',
        data: {
          labels: ['1', '2', '3', '4', '5', '6'],
          datasets: [
            {
              label: 'test1', // 标题
              fill: true, // 是否填充
              data: [65, 59, 0, 81, 56, 10]
            },
            {
              label: 'test2',
              fill: true,
              barStrokeWidth: 20,
              data: [35, 44, 37, 5, 69, 69]
            }
          ]
        },
        options: {}
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
