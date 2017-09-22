<template>
  <div id="app">
    <div class="nav">
      <ul>
        <li><router-link to="/home">主页</router-link></li>
        <li><router-link to="/chart">Schart柱状图</router-link></li>
        <li><router-link to="/chart2">Schart饼图</router-link></li>
        <li><router-link to="/chart3">Schart折线图</router-link></li>
        <li><router-link to="/chart4">Schart环形图</router-link></li>
        <li><router-link to="/chartBig">chart测试</router-link></li>
        <li><router-link to="/RandomChart">vue-chart测试</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
  font-style: none;
  overflow: hidden;
  text-decoration: none;
}
li {
  float: left;
  padding: 5px;
  background-color: deepskyblue;
  margin-right: 10px;
}
</style>
