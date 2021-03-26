<template>
  <el-container class="app-container">
    <el-header height="50px" class="app-header">
      <!-- 组件：顶部导航 -->
      <vue-header></vue-header>
    </el-header>
    <el-container class="app-main">
      <el-aside :width="collapsed ? '64px' : '200px'" class="app-sidebar">
        <!-- 组件：左侧导航 -->
        <vue-menu></vue-menu>
      </el-aside>
      <el-main class="app-viewer">
        <!-- 渐变效果，用以配合进度条 -->
        <transition name="fade-transform" mode="out-in"> 
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import vueHeader from './components/header'
import vueMenu from './vue-menu/index'

export default {
  name: "application",
  data() {
    return {
      menus: null,
      visibled: false,
    }
  },
  computed: {
    collapsed() {
      return this.$store.state.default.collapsed
    }
  },
  created() {
    getNavList().then(data=>{
      this.menus = data
    })
  },
  components: {
    vueHeader,
    vueMenu
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
  .app-container {
    height: 100%;
  }
  .app-header {
    box-shadow: 0 2px 2px rgba(0,0,0,.05);
    padding: 0;
    line-height: 50px    
  }
  .app-main {
    height: calc(100% - 50px);
  }
  .app-sidebar {
    background: #324554;
    transition: all .3s;
  }
  .app-viewer {
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