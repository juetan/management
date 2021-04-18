<template>
  <el-card class="tab" shadow="never">
    <div slot="header">
      图标字体
      <el-tooltip placement="top">
        <i class="el-icon-warning-outline"></i>
        <div slot="content">
          图标来自Iconfont,单击可复制
        </div>
      </el-tooltip>
      
      <el-button type="text" style="float: right; padding: 3px 0">使用说明</el-button>
    </div>
    <!-- iconfont图标 -->
    <icon-iconfont></icon-iconfont>
    <!-- element-ui图标 -->
    
  </el-card>
</template>

<script>
import iconIconfont from './components/icon-iconfont';
// import iconElement  from './components/icon-elementui';
export default {
  name: 'iconfont',
  components: {
    iconIconfont,
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