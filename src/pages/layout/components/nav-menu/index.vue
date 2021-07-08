<template>
    <!-- 如需路由正确工作，需添加router属性 -->
    <el-menu 
      router
      :default-active="$route.path" 
      :collapse="collapsed"
      :unique-opened="false"
      :collapse-transition="false"
      text-color="rgba(255,255,255,.65)" 
      :active-text-color="activeColor" 
      :background-color="backgroundColor"
      class="aside" 
    >
      <!-- 多少层routes就多少层router-view -->
      <vue-navitem :data="routes"></vue-navitem>
    </el-menu>
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
    },
    backgroundColor() {
      return this.$store.state.default.theme==='skyblue'?'#001529':'#324554'
    },
    activeColor() {
      return this.$store.state.default.theme==='skyblue'?'#fff':'#ffd04b'
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
    // background: $--color-sidebar-background;
  }
  // ::v-deep .el-menu-item, ::v-deep .el-submenu__title {
  //   background-color: $--color-sidebar-background;
  //   color: $--color-sidebar-text;
  //   &:hover {
  //     background-color: $--color-sidebar-background-hover;
  //     color: #fff;
  //   }
  //   &.is-active {
  //     color: $--color-sidebar-text-active;
  //   }
  // }
  ::v-deep .el-menu-item:not(.is-active):hover {
    color: $--color-white!important;
    i {
      color: $--color-white!important;
    }
  }
</style>