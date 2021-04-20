<template>
  <el-card shadow="never">
    <div slot="header">
      <h2 class="echart-title">{{ $t('home.fanChart') }}</h2>
    </div>
    <div class="equiment" ref="chartFan" style="height: 178px;"></div>
  </el-card>
</template>

<script>
import echarts from 'echarts'
import { fanChartOptions } from '../echarts'
const _merge = require('lodash/merge')
export default {
  name: 'fanChart',
  data() {
    return {
      fanChart: null,
    }
  },
  computed: {
    // 扇形图语言包
    fanChartLang() {
      return {
        legend: {
          data: [
            this.$t("dataTable.officeEquip"),
            this.$t("dataTable.operationEquip"),
            this.$t("dataTable.testEquip"),
            this.$t("dataTable.fireEuip"),
          ]
        },
        series: [
          {
            data: [
              { name: this.$t("dataTable.officeEquip") },
              { name: this.$t("dataTable.operationEquip") },
              { name: this.$t("dataTable.testEquip") },
              { name: this.$t("dataTable.fireEuip") },
            ]
          }
        ]
      }
    }
  },
  mounted() {
    this.$nextTick(this._initEchart)
  },
  methods: {
    _initEchart() {
      // 扇形图初始化
      this.fanChart = echarts.init(this.$refs.chartFan)
      this.fanChart.setOption(fanChartOptions)
    }
  },
  watch: {
    '$i18n.locale'() {
      // 更新扇形图参数(语言包部分)
      const fanOptions = _merge({},fanChartOptions,this.fanChartLang);
      this.fanChart.clear()
      this.fanChart.setOption(fanOptions,true);
    }
  }
}
</script>

<style lang="scss" >
  .echart-title {
    display: inline-block;
    padding-left: 8px;
    border-left: 3px solid $--color-primary;
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }
</style>