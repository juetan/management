<template>
  <el-card shadow="never">
    <div slot="header">
      <h2 class="echart-title">{{ $t('home.lineChart') }}</h2>
      <el-radio-group class="echart-switch" size="small">
        <el-radio-button :label="$t('home.new')"></el-radio-button>
        <el-radio-button :label="$t('home.stat')"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="chart-line" ref="chartLine"></div>
  </el-card>
</template>

<script>
import echarts from 'echarts'
import { lineChartOptions } from '../echarts'
const _ = require('lodash')

export default {
  name: 'lineChart',
  data() {
    return {
      lineChart: null,
    }
  },
  computed: {
    // 折线图语言包
    lineChartLang() {
      return {
        legend: {
          data: [
            this.$t("dataTable.officeEquip"),
            this.$t("dataTable.operationEquip"),
            this.$t("dataTable.testEquip"),
            this.$t("dataTable.fireEuip"),
          ],
        },
        xAxis: {
          data: [
            this.$t("home.mo"),
            this.$t("home.tu"),
            this.$t("home.we"),
            this.$t("home.th"),
            this.$t("home.fr"),
            this.$t("home.sa"),
            this.$t("home.su"),
          ],
        },
        series: [
          { name: this.$t("dataTable.officeEquip") },
          { name: this.$t("dataTable.operationEquip") },
          { name: this.$t("dataTable.testEquip") },
          { name: this.$t("dataTable.fireEuip") },
        ],
      }
    },
  },
  mounted() {
    this.$nextTick(this._initEchart)
  },
  methods: {
    _initEchart() {
      // 折线图初始化
      this.lineChart = echarts.init(this.$refs.chartLine)
      this.lineChart.setOption(lineChartOptions)
    }
  },
  watch: {
    '$i18n.locale'() {
      // 更新折线图参数(语言包部分)
      const lineOptions = _.merge({},lineChartOptions,this.lineChartLang);
      this.lineChart.clear()
      this.lineChart.setOption(lineOptions,true);
    },
    '$store.state.default.collapsed'() {
      this.$nextTick(()=>{
        this.lineChart.resize();
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .echart-title {
    display: inline-block;
    padding-left: 8px;
    border-left: 3px solid $--color-primary;
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }
  .echart-switch {
    float: right;
    margin: -6px;
  }
  .chart-line {
    height: 360px;
    background: $--color-white;
  }
</style>