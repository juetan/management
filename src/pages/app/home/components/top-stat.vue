<template>
  <el-row :gutter="40" class="card-container">
    <el-col :xs="12" :sm="12" :lg="6">
      <el-card shadow="hover" class="card-item" :body-style="{display: 'flex',background: 'linear-gradient(-45deg, rgb(93, 156, 236), rgba(93, 156, 236, .8))'}">
        <div class="card-iconer">
          <i class="el-icon-lightning card-icon"></i>
        </div>
        <div class="card-name">
          <p class="card-maintext">{{ $t('home.goodMorning') }}</p>
          <p class="card-info">{{ $t('home.todayIs') }}</p>
          <span class="card-info">{{ $t('home.currentDate') }}</span>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6">
      <el-card shadow="hover" class="card-item" :body-style="{display: 'flex', background: '#eb965d'}">
        <div class="card-iconer">
          <i class="el-icon-notebook-1 card-icon"></i>
        </div>
        <div class="card-name">
          <p class="card-count"> <count-to :startVal="0" :endVal="27859" :duration="2000"></count-to> <span class="card-unit">{{ $t('home.unit') }}</span>   </p>
          <span class="card-info">{{ $t('home.workTemplate') }}</span>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6">
      <el-card shadow="hover" class="card-item" :body-style="{display: 'flex', background: '#ac74e3'}">
        <div class="card-iconer">
          <i class="el-icon-bangzhu card-icon"></i>
        </div>
        <div class="card-name">
          <p class="card-count"><count-to :startVal="0" :endVal="37626" :duration="2000"></count-to> <span class="card-unit">{{ $t('home.unit') }}</span>   </p>
          <span class="card-info">{{ $t('home.operationTemplate') }}</span>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6">
      <el-card shadow="hover" class="card-item" :body-style="{display: 'flex', background: '#48c7ac'}">
        <div class="card-iconer">
          <i class="el-icon-set-up card-icon"></i>
        </div>
        <div class="card-name">
          <p class="card-count"><count-to :startVal="0" :endVal="81597" :duration="2000"></count-to> <span class="card-unit">{{ $t('home.unit') }}</span>   </p>
          <span class="card-info">{{ $t('home.safetyTemplate') }}</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import countTo from '@/plugins/count-to'
export default {
  components: {
    countTo
  }
}
</script>

<style lang="scss" scoped>
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
</style>