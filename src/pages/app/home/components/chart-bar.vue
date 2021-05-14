<template>
  <el-card shadow="never">
    <div slot="header">
      <h2 class="echart-title">{{ $t('home.barChart') }}</h2>
    </div>
    <div class="equiment" ref="chartBar" style="height: 178px;"></div>
  </el-card>
</template>

<script>
import echarts from 'echarts';
import { barChartOptions } from './echarts';
const _merge = require('lodash/merge')

export default {
  name: 'barChart',
   computed: {
    // 柱状图语言包
    barChartLang() {
      return {
        xAxis: [{
            data:  [
                this.$t("home.mo"),
                this.$t("home.tu"),
                this.$t("home.we"),
                this.$t("home.th"),
                this.$t("home.fr"),
                this.$t("home.sa"),
                this.$t("home.su"),
            ],
        }]
      }
    }
  },
  mounted() {
    this.$nextTick(this._initEchart)
  },
  methods: {
    _initEchart() {
      // 柱状图初始化
      this.echart = echarts.init(this.$refs.chartBar)
      this.echart.setOption(barChartOptions)
    }
  },
  watch: {
    '$i18n.locale'() {
      // 更新扇形图参数(语言包部分)
      const barOptions = _merge({},barChartOptions,this.barChartLang);
      this.echart.clear()
      this.echart.setOption(barOptions,true);
    }
  }
}
</script>

<style>

</style>