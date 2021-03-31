<template>
  <!-- 使用element-ui的布局容器，可自适应 -->
  <el-container class="layout-container">
    <!-- 顶部导航 -->
    <el-header height="50px" class="layout-header">
      <vue-navtop></vue-navtop>
    </el-header>

    <!-- 布局容器 -->
    <el-container class="layout-main">
        <!-- 左侧导航 -->
      <el-aside :width="collapsed ? '64px' : '200px'" class="layout-sidebar">
        <vue-navmenu></vue-navmenu>
      </el-aside>

      <!-- 右侧内容区 -->
      <el-main class="layout-viewer" id="viewer">
        <!-- 渐变效果，用以配合进度条 -->
        <transition name="fade-transform" mode="out-in"> 
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import vueNavtop from './components/navtop'
import vueNavmenu from './components/navmenu'

export default {
  name: "layout",
  data() {
    return {
      menuList: null,
      visibled: false,
    }
  },
  computed: {
    collapsed() {
      return this.$store.state.default.collapsed
    },
  },
  created() {
    
  },
  components: {
    vueNavtop,
    vueNavmenu
  }
}
</script>



<style lang="scss" scoped>
  /* 渐变效果fade-transform */
  .fade-transform-leave-active, .fade-transform-enter-active {
    transition: all .5s;
  } 
  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }
  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  // 容器样式
  .layout-container {
    height: 100%;
  }
  .layout-header {
    box-shadow: 0 2px 2px rgba(0,0,0,.05);
    padding: 0;
    line-height: 50px    
  }
  .layout-main {
    height: calc(100% - 50px);
  }
  .layout-sidebar {
    background: #324554;
    transition: all .3s;
  }
  .layout-viewer {
    background-color: #f0f3f4;
  }
  .el-aside {
    overflow: hidden;
  }
  /* 设置侧边栏宽度时，必须将.el-menu--collapse排除，否则动画效果出现BUG */
  .el-menu:not(.el-menu--collapse) {
    width: 200px;
  }
    
</style>