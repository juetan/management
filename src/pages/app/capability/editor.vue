<template>
  <layout-card :title="$t('router.editorCapability')">
    <div>
      只有拥有visitAdminPage权限的用户才能访问到该页面
    </div>
    <el-row>
      <el-button type="primary">发表文章</el-button>
      <el-button type="success">删除文章</el-button>
      <el-button type="info">修改文章</el-button>
      <el-button type="warning">阅读文章</el-button>
    </el-row>
  </layout-card>
</template>

<script>
import layoutCard from '@/components/layout-card';
export default {
  components: {
    layoutCard
  }
}
</script>

<style>

</style>