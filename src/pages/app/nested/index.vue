<template>
  <layout-card title="路由嵌套">
    <router-view></router-view>
  </layout-card>
</template>

<script>
import layoutCard from '@/components/layout-card';
export default {
  name: 'nested',
  components: {
    layoutCard
  }
}
</script>

<style>

</style>