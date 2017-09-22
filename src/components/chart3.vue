<template>
  <div class="chart">
    <h1>{{ testChart }}</h1>
    <schart :canvasId="canvasId"
            :type="type"
            :width="width"
            :height="height"
            :data="data"
            :options="options"
        ></schart>
  </div>
</template>

<script>
import Schart from 'vue-schart'
export default {
  name: 'chart',
  data () {
    return {
      testChart: 'vue-schart折线图测试',
      canvasId: 'myCanvas',
      type: 'line',
      width: 500,
      height: 400,
      data: [
        {name: '2014', value: 1342},
        {name: '2015', value: 2123},
        {name: '2016', value: 1654},
        {name: '2017', value: 1795}
      ],
      options: {
        title: '测试数据'
      }
    }
  },
  components: {
    Schart
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
