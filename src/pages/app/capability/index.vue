<template>
  <layout-card :title="$t('router.adminCapability')">
    <el-form label-width="100px">
      <el-form-item>
        <div slot="label">
          当前角色
          <el-tooltip placement="top">
            <i class="el-icon-warning-outline"></i>
            <div slot="content">
              当前有2种角色：admin和editor
            </div>
          </el-tooltip>
        </div>
        <el-tag class="role" v-for="role in $store.state.user.role" :key="role">{{ role }}</el-tag>
      </el-form-item>
      <el-form-item>
        <div slot="label">
          页面权限
          <el-tooltip placement="top">
            <i class="el-icon-warning-outline"></i>
            <div slot="content">
              拥有visit_admin_page权限可访问/admin-page页面，<br>
              拥有visit_editor_page权限可访问/editor-page页面.
            </div>
          </el-tooltip>
        </div>
        拥有 visit_admin_page 权限的用户才能访问到该页面
      </el-form-item>
      <el-form-item>
        <div slot="label">
          指令权限
          <el-tooltip placement="top">
            <i class="el-icon-warning-outline"></i>
            <div slot="content">
              没有权限的按钮会自动隐藏(当前共有4个权限按钮：发表、删除、修改、阅读)
            </div>
          </el-tooltip>
        </div>
        <el-row>
          <el-button type="primary" v-cap="'publishPost'">发表文章</el-button>
          <el-button type="primary" v-cap="'deletePost'">删除文章</el-button>
          <el-button type="primary" v-cap="'editPost'">修改文章</el-button>
          <el-button type="primary" v-cap="'readPost'">阅读文章</el-button>
        </el-row>
      </el-form-item>
    </el-form>
    
    
  </layout-card>
</template>

<script>
import layoutCard from '@/components/layout-card';
import directiveCap from '@/config/v-cap';
export default {
  components: {
    layoutCard
  },
  directives: {
    cap: directiveCap
  }
}
</script>

<style lang="scss" scoped>
  .role {
    margin-right: 12px;
  }
</style>