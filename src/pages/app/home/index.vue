<template>
  <div class="home">
    <el-row :gutter="40" class="card-container">
      <el-col :xs="12" :sm="12" :lg="6">
        <el-card shadow="hover" class="card-item" :body-style="{display: 'flex',background: 'linear-gradient(-45deg, rgb(93, 156, 236), rgba(93, 156, 236, .8))'}">
          <div class="card-iconer">
            <i class="el-icon-lightning card-icon"></i>
          </div>
          <div class="card-name">
            <p class="card-maintext">上午好！</p>
            <p class="card-info">今天是星期一</p>
            <span class="card-info">2020年12月20日</span>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <el-card shadow="hover" class="card-item" :body-style="{display: 'flex', background: '#eb965d'}">
          <div class="card-iconer">
            <i class="el-icon-notebook-1 card-icon"></i>
          </div>
          <div class="card-name">
            <p class="card-count"> <count-to :startVal="0" :endVal="327" :duration="2000"></count-to> <span class="card-unit">台</span>   </p>
            <span class="card-info">生产设备</span>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <el-card shadow="hover" class="card-item" :body-style="{display: 'flex', background: '#ac74e3'}">
          <div class="card-iconer">
            <i class="el-icon-bangzhu card-icon"></i>
          </div>
          <div class="card-name">
            <p class="card-count"><count-to :startVal="0" :endVal="376" :duration="2000"></count-to> <span class="card-unit">份</span>   </p>
            <span class="card-info">作业指导书</span>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <el-card shadow="hover" class="card-item" :body-style="{display: 'flex', background: '#48c7ac'}">
          <div class="card-iconer">
            <i class="el-icon-set-up card-icon"></i>
          </div>
          <div class="card-name">
            <p class="card-count"><count-to :startVal="0" :endVal="197" :duration="2000"></count-to> <span class="card-unit">份</span>   </p>
            <span class="card-info">作业模板</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-card shadow="never">
      <div slot="header">
        <h2 class="echart-title">折线图</h2>
        <el-radio-group class="echart-switch" size="small">
          <el-radio-button label="新增"></el-radio-button>
          <el-radio-button label="使用"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="chart" ref="chart"></div>
    </el-card>
    <section class="echart-container">
      <el-card shadow="never">
        <div slot="header">
          <h2 class="echart-title">扇形图</h2>
        </div>
        <div class="equiment" ref="equiment" style="height: 178px;"></div>
      </el-card>
      <el-card shadow="never">
        <div slot="header">
          <h2 class="echart-title">柱状图</h2>
        </div>
      </el-card>
    </section>
  </div>
</template>

<script>
import echarts from 'echarts'
import countTo from 'vue-count-to'
export default {
  name: "home",
  data() {
    return {
      chart: null,
      equiment: null
    }
  },
  mounted() {
    this.$nextTick(this.initEchart)
    this.$api.table.getTableData().then((data)=>{
      console.log(data)
    })
  },
  components: {
    countTo
  },
  methods: {
    initEchart() {
      this.chart = echarts.init(this.$refs.chart)
      this.chart.setOption({
      tooltip: {
          trigger: 'axis'
      },
      legend: {
        icon: 'roundRect',
        data: ['生产设备', '测试设备', '夹具设备', '办公设备']
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      toolbox: {
          feature: {
              saveAsImage: {}
          }
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
          type: 'value',
          // show: false
      },
      series: [
        {
          name: '生产设备',
          type: 'line',
          stack: '总量',
          itemStyle: {
            normal: {
              color: '#09f',
              lineStyle: {
                color: '#09f'
              }
            }
          },
          data: [120, 600, 101, 400, 90, 230,700]
        },
        {
          name: '测试设备',
          type: 'line',
          stack: '总量',
          itemStyle: {
            normal: {
              color: '#3c9',
              lineStyle: {
                color: '#3c9'
              }
            }
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '夹具设备',
          type: 'line',
          stack: '总量',
          itemStyle: {
            normal: {
              color: '#f90',
              lineStyle: {
                color: '#f90'
              }
            }
          },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '办公设备',
          type: 'line',
          stack: '总量',
          itemStyle: {
            normal: {
              color: '#f66',
              lineStyle: {
                color: '#f66'
              }
            }
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        }
      ]
      })
      this.equiment = echarts.init(this.$refs.equiment)
      this.equiment.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          icon: 'circle',
          orient: 'vertical',
          right: `20%`,
          top: '15%',
          itemGap: 20,
          data: ['生产设备', '测试仪器', '工装夹具', '办公设备']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            left: 10,
            radius: ['60%', '80%'],
            center: ['20%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '16',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 335, name: '生产设备', itemStyle: {color: '#09f'}},
              {value: 310, name: '测试仪器', itemStyle: {color: '#3c9'}},
              {value: 234, name: '工装夹具', itemStyle: {color: '#f66'}},
              {value: 135, name: '办公设备', itemStyle: {color: '#66f'}}
            ]
          }
        ]
      })
    }
  }
}
</script>



<style lang="scss" scoped>
  .home {
    height: 100%;
    box-sizing: border-box;
  }
  .card-item {
    position: relative;
    border-radius: 5px;
    margin-bottom: 16px;
  }
  .card-iconer {
    width: 80px;
    height: 80px;
    background: rgba(255,255,255,.1);
    border-radius: 100%;
    text-align: center;
    line-height: 80px;
  }
  .card-item::before {
    content: "";
    position: absolute;
    right: -15%;
    top: -50%;
    height: 100px;
    width: 100px;
    border: 10px solid rgba(255,255,255,.1);
    border-radius: 100%;
  }
  .card-item:nth-child(even) .card-item:nth-child(even)::before {
    top: 60%;
    right: -20%;
  }
  .card-icon {
    font-size: 50px;
    line-height: 80px;
    color: $--color-white;
  }
  .card-name {
    flex: 1;
    flex-direction: column;
    height: 80px;
    /* text-align: right; */
    color: $--color-white;
    margin: 0 0 0 36px;
  }
  .card-maintext {
    margin-top: 4px;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 700;
  }
  .card-info {
    display: block;
    color: $--color-white;
    margin: 8px 0;
    font-size: 14px;
  }
  .chart {
    height: 360px;
    background: $--color-white;
  }
  .card-count {
    position: relative;
    font-size: 32px;
    padding: 4px 0 8px;
    margin: 0;
    border-bottom: 2px solid rgba(255,255,255,.2);
  }
  p.card-count::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 62%;
    height: 2px;
    background: $--color-white;
  }
  .card-unit {
    font-size: 14px;
  }
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
  .echart-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 36px;
    margin-top: 16px;
  }
</style>