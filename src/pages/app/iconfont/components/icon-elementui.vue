<template>
  <div>
    <el-tooltip v-for="icon in elementIcon" :key="icon">
      <div class="icon-list-title">
        <i :class="'el-icon-'+icon"></i>
        <span class="icon-list-name">{{ icon }}</span>
      </div>
      <div slot="content">
        {{ icon }}
      </div>
    </el-tooltip>
  </div>
</template>

<script>
import elementIcon from '../element-icon';
export default {
  name: 'iconfont',
  data() {
    return {
      elementIcon
    }
  }
}
</script>

<style>

</style>