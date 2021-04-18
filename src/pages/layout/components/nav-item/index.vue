<template>
  <div class="navitem">
    <!-- 因为用的是template，所以key放在里面 -->
    <template v-for="route in data">

      <!-- 无子路由 -->
      <el-menu-item v-if="!route.children && !route.hidden" :key="route.path" :index="route.path" class="ment-item">
        <i :class="route.meta.icon"></i>
        <span slot="title">{{ $t('router.'+route.meta.title) }}</span>
      </el-menu-item>

      <!-- 包含子路由 --> 
      <el-submenu v-else ref="subMenu" :key="route.path" :index="route.path" popper-append-to-body>
        <template slot="title">
          <i :class="route.meta.icon"></i>
          <span slot="title">{{ $t('router.'+route.meta.title) }}</span>
        </template>
        <vue-menu-item :data="route.children"/> 
      </el-submenu>
      
    </template>
  </div>
</template>

<script>
export default {
  name: "navitem",
  props:{
    data: {
      type: Array,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
  ::v-deep.el-menu-item [class^=icon-] {
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
  }
</style>