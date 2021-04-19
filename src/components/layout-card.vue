<template>
  <el-card shadow="never" class="layout-card">
    <div slot="header">
      <span class="title">
        <slot name="title">{{ title }}</slot>
      </span>
      <el-link :underline="false" style="float:right" >
        <slot name="help">{{ help }}</slot>
      </el-link>
    </div>
    <slot></slot>
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    help: {
      type: String,
      default: '帮助说明'
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout-card {
    min-height: 100%;
    box-sizing: border-box;
  }
</style>