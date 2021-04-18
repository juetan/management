<template>
  <div>
    <el-tooltip v-for="icon in iconfont.glyphs" :key="icon.icon_id" placement="top">
      <div class="icon-list-title">
        <i :class="'icon-'+icon.font_class"></i>
        <span class="icon-list-name">{{ icon.font_class }}</span>
      </div>
      <div slot="content">
        {{ icon.name }}
      </div>
    </el-tooltip>
  </div>
</template>

<script>
import iconfont from '@/assets/fonts/iconfont.js';
export default {
  name: 'iconfont',
  data() {
    return {
      iconfont
    }
  }
}
</script>

<style>

</style>