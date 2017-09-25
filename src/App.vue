<template>
  <div id="app">
    <div class="nav">
      <ul>
        <li><router-link to="/home">主页</router-link></li>
        <li><router-link to="/chart">Schart柱状图</router-link></li>
        <li><router-link to="/chart2">Schart饼图</router-link></li>
        <li><router-link to="/chart3">Schart折线图</router-link></li>
        <li><router-link to="/chart4">Schart环形图</router-link></li>
        <li class="chartTest">
          <router-link to="/chartBig">chart-line</router-link>
          <ul>
            <li><router-link to="/bar">chart-bar</router-link></li>
            <li><router-link to="/pie">chart-pie</router-link></li>
            <li><router-link to="/radar">chart-radar</router-link></li>
          </ul>
        </li>
        <li><router-link to="/RandomChart">vue-chart测试</router-link></li>
        <li class="chartTest">
          <router-link to="/echarts">echarts-bar</router-link>
          <ul>
            <li><router-link to="/echartsLine">echarts-line</router-link></li>
            <li><router-link to="/echartsPie">echarts-pie</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    select: function () {
      //
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav {

}
ul, li, a {
  list-style: none;
  text-decoration: none;
}
li {
  float: left;
  padding: 5px;
  background-color: deepskyblue;
  margin-right: 10px;
}
.chartTest {
  position: relative;
  width: 120px;
  height: 31px;
  line-height: 31px;
  text-align: center;
  padding: 0;
}
.chartTest:hover ul {
  display: block;
}
.chartTest ul {
  width: 100%;
  padding: 0;
  position: absolute;
  display: none;
}
.chartTest ul li {
  width: 100%;
  margin: 0;
  padding: 0;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: darkseagreen;
}
</style>
