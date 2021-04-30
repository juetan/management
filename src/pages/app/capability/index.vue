<template>
  <layout-card :title="$t('router.adminCapability')">
    <el-form label-width="100px">
      <el-form-item>
        <div slot="label">
          {{ $t('capability.currentRole') }}
          <el-tooltip placement="top">
            <i class="el-icon-warning-outline"></i>
            <div slot="content">
              {{ $t('capability.currentRoleTip') }}
            </div>
          </el-tooltip>
        </div>
        <el-tag class="role" v-for="role in $store.state.user.role" :key="role">{{ role }}</el-tag>
      </el-form-item>
      <el-form-item>
        <div slot="label">
          {{ $t('capability.pageCap') }}
          <el-tooltip placement="top">
            <i class="el-icon-warning-outline"></i>
            <div slot="content">
              {{ $t('capability.pageCapTip') }}
            </div>
          </el-tooltip>
        </div>
        {{ $t('capability.directiveCapDescription') }}
      </el-form-item>
      <el-form-item>
        <div slot="label">
          {{ $t('capability.directiveCap') }}
          <el-tooltip placement="top">
            <i class="el-icon-warning-outline"></i>
            <div slot="content">
              {{ $t('capability.directiveCapTip') }}
            </div>
          </el-tooltip>
        </div>
        <el-row>
          <el-button type="primary" v-cap="'publishPost'">{{ $t('capability.publishPost') }}</el-button>
          <el-button type="primary" v-cap="'deletePost'">{{ $t('capability.deletePost') }}</el-button>
          <el-button type="primary" v-cap="'editPost'">{{ $t('capability.editPost') }}</el-button>
          <el-button type="primary" v-cap="'readPost'">{{ $t('capability.readPost') }}</el-button>
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