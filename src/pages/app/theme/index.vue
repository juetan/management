<template>
  <layout-card :title="$t('theme.title')" :help="$t('theme.help')">
    <el-form label-width="100px">
      <!-- 当前主题 -->
      <el-form-item :label="$t('theme.currentTheme')">
        <el-radio-group size="small" v-model="theme">
          <!-- 默认主题 -->
          <el-radio label="green" border>{{ $t('theme.defaultTheme') }}</el-radio>
          <!-- 蓝色主题 -->
          <el-radio label="blue" border>{{ $t('theme.blueTheme') }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- 主题样式 -->
      <el-form-item :label="$t('theme.ThemeStyle')">
        <el-row>
          <el-button>{{ $t('theme.blueTheme') }}</el-button>
          <el-button type="primary">{{ $t('theme.brandColor') }}</el-button>
          <el-button type="success">{{ $t('theme.successColor') }}</el-button>
          <el-button type="info">{{ $t('theme.infoColor') }}</el-button>
          <el-button type="warning">{{ $t('theme.warningColor') }}</el-button>
          <el-button type="danger">{{ $t('theme.dangerColor') }}</el-button>
        </el-row>

        <el-row style="margin-top:16px">
          <el-button plain>{{ $t('theme.defaultColor') }}</el-button>
          <el-button type="primary" plain>{{ $t('theme.brandColor') }}</el-button>
          <el-button type="success" plain>{{ $t('theme.successColor') }}</el-button>
          <el-button type="info" plain>{{ $t('theme.infoColor') }}</el-button>
          <el-button type="warning" plain>{{ $t('theme.warningColor') }}</el-button>
          <el-button type="danger" plain>{{ $t('theme.dangerColor') }}</el-button>
        </el-row>
      </el-form-item>
    </el-form>
  </layout-card>
</template>

<script>
  // import { mapState } from 'vuex';
  import layoutCard from '@/components/layout-card';
  // import { replaceThemeColors } from '@/plugins/theme-replacer';
  export default {
    data() {
      return {
        theme: this.$store.state.default.themeColors
      }
    },
    components: {
      layoutCard
    },
    watch: {
      theme() {
        // replaceThemeColors(this.theme)
        this.$store.dispatch('default/set_theme',this.theme).then(()=>{
          this.$message({
            type: "success",
            message: this.$t("layout.switchThemeInfo"),
          });
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>