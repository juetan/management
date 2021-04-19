<template>
  <layout-card :help="$t('iconfont.help')">
    <span slot="title">
      <span>{{ $t('iconfont.title') }}</span>
      <el-tooltip placement="top">
        <i class="el-icon-warning-outline"></i>
        <div slot="content">
          {{ $t('iconfont.tip') }}
        </div>
      </el-tooltip>
    </span>
    <!-- iconfont图标 -->
    <icon-iconfont></icon-iconfont>
  </layout-card>
</template>

<script>
import layoutCard from '@/components/layout-card';
import iconIconfont from './components/icon-iconfont';
// import iconElement  from './components/icon-elementui';
export default {
  name: 'iconfont',
  components: {
    iconIconfont,
    layoutCard
    // iconElement
  }
}
</script>

<style lang="scss">
  .tab {
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
  }
  .tab-container {
    background: $--color-white;
  }
  .icon-list-title {
    width: 100px;
    margin: 20px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
  }
  .icon-list-title:hover {
    color: $--color-primary;
    span.icon-list-name {
      color: $--color-primary-hover;
    }
  }
  .icon-list-title i {
    font-size: 32px;
  }
  span.icon-list-name {
    display: block;
    text-align: center;
    font-weight: 400;
    font-size: 13px;
    margin-top: 8px;
    color: #99a9bf;
  }
</style>