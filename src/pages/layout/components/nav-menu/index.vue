<template>
  <el-scrollbar id="navmenu">
    <!-- 如需路由正确工作，需添加router属性 -->
    <el-menu 
      router
      :default-active="$route.path" 
      :collapse="collapsed"
      :unique-opened="false"
      :collapse-transition="false"
      text-color="rgba(255,255,255,.65)" 
      active-text-color="#ffd04b" 
      background-color="#324554" 
      class="aside" 
    >
      <!-- 多少层routes就多少层router-view -->
      <vue-navitem :data="routes"></vue-navitem>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import vueNavitem from '../nav-item'
import routes from '@/router/modules/normal-routes'

export default {
  name: "navmenu",
  data() {
    return {
      routes: null
    }
  },
  computed: {
    collapsed() {
      return this.$store.state.default.collapsed
    }
  },
  created() {
    this.routes = routes[0].children
  },
  components: {
    vueNavitem
  }
}
</script>

<style lang="scss" scoped>
  .aside.el-menu {
    border-right: none;
  }
  ::v-deep .el-menu-item:not(.is-active):hover {
    color: $--color-white!important;
    i {
      color: $--color-white!important;
    }
  }
</style>