<template>
  <layout-card :title="$t('lang.i18n')">
    <el-form label-width="100px" >
      <el-form-item >
        <div slot="label">
          <span>{{ $t('lang.language') }}</span> 
          <el-tooltip placement="top">
            <i class="el-icon-warning-outline"></i> 
            <div slot="content">
              {{ $t('lang.languageTip') }}
            </div>
          </el-tooltip>
        </div>
        <el-radio-group v-model="language" size="small">
          <el-radio label="zh" border>简体中文</el-radio>
          <el-radio label="en" border>English</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <div slot="label">
          <span>{{ $t('lang.calendar') }}</span> 
          <el-tooltip placement="top">
            <i class="el-icon-warning-outline"></i> 
            <div slot="content">
              {{ $t('lang.calendarTip') }}
            </div>
          </el-tooltip>
        </div>
        <!-- 日历组件 -->
        <el-calendar></el-calendar>
      </el-form-item>
    </el-form>
  </layout-card>
</template>

<script>
import layoutCard from '@/components/layout-card';
export default {
  computed: {
    language: {
      get() {
        return this.$i18n.locale;
      },
      set(value) {
        this.$store.dispatch('default/switch_language',value).then(()=>{
          this.$message({
            type: 'success',
            message: this.$t('layout.switch')
          })
        })
      }
    }
  },
  components: {
    layoutCard
  },
}
</script>

<style>
  .language {
    height: 100%;
    box-sizing: border-box;
  }
</style>