<template>
  <div class="navitem">
    <!-- 因为用的是template，所以key放在里面 -->
    <template v-for="route in data">
      <!-- 情况[1]：单个路由 -->
      <el-menu-item v-if="!route.children && !route.hidden && !route.meta.link" :key="route.path" :index="route.path" class="ment-item">
        <!-- 路由图标 -->
        <i :class="route.meta.icon"></i>
        <!-- 路由标题 -->
        <span slot="title">{{ $t('router.'+route.meta.title) }}</span>
      </el-menu-item>

      <!-- 情况[2]: 外部链接 -->
      <a v-else-if="!route.children && !route.hidden && route.meta.link" :href="route.path" :key="route.path" target="_blank">
        <el-menu-item  class="ment-item">
            <!-- 路由图标 -->
            <i :class="route.meta.icon"></i>
            <!-- 路由标题 -->
            <span slot="title">{{ $t('router.'+route.meta.title) }}</span>
        </el-menu-item>
      </a>

      <!-- 情况[3]: 嵌套路由 --> 
      <el-submenu v-else ref="subMenu" :key="route.path" :index="route.path" popper-append-to-body>
        <template slot="title">
          <!-- 路由图标 -->
          <i :class="route.meta.icon"></i>
          <!-- 路由标题 -->
          <span slot="title">{{ $t('router.'+route.meta.title) }}</span>
        </template>
        <nav-item :data="route.children"/> 
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "navItem",
  props:{
    data: {
      type: Array,
      required: true
    }
  },
}
</script>

<style lang="scss">
  .el-menu-item [class^=icon-],.el-submenu [class^=icon-] {
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
  }
  // 由于el-menu子组件应为el-submenu、el-menu-item或el-menu-item-group。
  // 该组件最外层为div，有路由嵌套时会出现样式问题，此处添加处理样式
  // 隐藏标题
  .el-menu--collapse  .el-submenu__title span{
    display: none;
  }
  // 隐藏小箭头
  .el-menu--collapse  .el-submenu__title .el-submenu__icon-arrow{
    display: none;
  }
</style>