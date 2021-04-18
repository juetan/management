<template>
  <div class="home">
    <!-- 顶部统计栏 -->
    <top-stat></top-stat>
    <!-- 折线图 -->
    <line-chart></line-chart>
    <!-- 底部容器 -->
    <section class="echart-container">
      <!-- 扇形图 -->
      <fan-chart></fan-chart>
      <!-- 柱状图 -->
      <bar-chart></bar-chart>
    </section>
  </div>
</template>

<script>
import lineChart from './components/chart-line'
import fanChart from './components/chart-fan'
import barChart from './components/chart-bar'
import topStat from './components/top-stat'

export default {
  name: "home",
  components: {
    lineChart,
    fanChart,
    barChart,
    topStat
  }
}
</script>

<style lang="scss" scoped>
  .echart-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 36px;
    margin-top: 16px;
  }
  .home {
    height: 100%;
    box-sizing: border-box;
  }
</style>