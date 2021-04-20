<template>
  <div id="navtop">
    <div class="header-aside" :class="collapsed ? 'header-aside-collapsed' : ''">
      <!-- 网站LOGO -->
      <img :src="require('./logo.png')" alt="" width="30px" class="header-logo" id="msetting1">
      <!-- 网站标题 -->
      {{ $t('system.title') }}
    </div>
    <!-- 如何使用flex或grid实现一个元素在左侧，其余元素在右侧：margin-right: auto --->
    <div class="header-main" :class="collapsed ? 'header-main-collapsed' : ''">
      <!-- 折叠/展开左侧菜单栏 -->
      <div class="header-left">
        <el-button icon="el-icon-more-outline" type="text" @click="handleCollapse" id="mcollapse"></el-button>
      </div>
      <div class="header-right">
        <!-- 网站设置 -->
        <el-tooltip class="header-item" effect="dark" :content="$t('layout.settingTip')" placement="bottom" :open-delay="500" >
          <i class="el-icon-setting toogle-full" @click="handleEditSystemSetting" id="msetting"></i>
        </el-tooltip>
        <!-- 全屏显示 -->
        <el-tooltip class="header-item" effect="dark" :content="$t('layout.fullTip')" placement="bottom" :open-delay="500" >
          <i class="el-icon-full-screen iconFont toogle-full" @click="handleFullscreen" id="mfullscreen"></i>
        </el-tooltip>
        <!-- 操作引导 -->
        <el-tooltip class="header-item" effect="dark" :content="$t('layout.helpTip')" placement="bottom" :open-delay="500" >
          <!-- 由于tooltip或是其他的原因，必须添加.prevent.top修饰器，否则无法正常显示dirver -->
          <i class="el-icon-warning-outline iconFont toogle-full" @click.prevent.stop="handleDriver" ></i>
        </el-tooltip>
        <!-- 切换主题 -->
        <el-tooltip class="header-item" effect="dark" :content="$t('layout.switchTheme')" placement="bottom" :open-delay="500" >
          <i class="icon-skin" @click="handleSwitchTheme" ></i>
        </el-tooltip>
        <!-- 切换语言 -->
        <el-tooltip class="header-item" effect="dark" :content="$t('layout.switchLanguage')" placement="bottom" :open-delay="500" >
          <i :class="langIcon" @click="handleSwitchlanguage" ></i>
        </el-tooltip>
        <!-- 用户面板 -->
        <el-dropdown class="header-item" trigger="click">
          <div>
            <!-- 用户头像 -->
            <el-avatar :src="avatar" size="small" style="vertical-align: middle"></el-avatar>
            <!-- 用户名称 -->
            <span class="username">{{username}}</span>
            <i class="el-icon-caret-bottom"></i> 
          </div>
          <el-dropdown-menu slot="dropdown">
            <!-- 首页链接 -->
            <el-dropdown-item>
              <router-link :to="{ path: '/' }">
                <i class="icon-home"></i>
                {{ $t('layout.home') }}
              </router-link>
            </el-dropdown-item>
            <!-- Github仓库链接 -->
            <el-dropdown-item>
              <a href="https://github.com/juetan/management" target="_blank">
                <i class="icon-github"></i>
                {{ $t('layout.repository') }}
              </a>
            </el-dropdown-item>
            <!-- 开发文档链接 -->
            <el-dropdown-item>
              <a href="http://www.juetan.cn/tag/management" target="_blank">
                <i class="el-icon-document"></i>
                {{ $t('layout.devnote') }}
              </a>
            </el-dropdown-item>
            <!-- 个人博客链接 -->
            <el-dropdown-item>
              <a href="https://www.juetan.cn" target="_blank">
                <i class="el-icon-user"></i>
                {{ $t('layout.myblog') }}
              </a>
            </el-dropdown-item>
            <!-- 退出登录 -->
            <el-dropdown-item divided>
              <span class="logout" @click="handleLogout" >
                <i class="icon-exit"></i>
                {{ $t('layout.logout') }}
              </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'
import driver from '@/plugins/driver'
import driverSteps from './driver-steps';
import { replaceThemeColors } from '@/plugins/theme-replacer';
import { mapState } from 'vuex';

export default {
  name: "navtop",
  computed: {
    langIcon() {
      return 'icon-'+this.$store.state.default.language
    },
    ...mapState({
      collapsed: state=>state.default.collapsed,
      username: state=>state.user.username,
      avatar: state=>state.user.avatar,
    })
  },
  methods: {
    // 右侧菜单栏折叠
    handleCollapse() {
      this.$store.commit('default/trigger_collapsed')
    },
    // 全屏显示
    handleFullscreen() {
      screenfull.toggle()
    },
    // 系统设置
    handleEditSystemSetting() {
      // this.$confirm('敬请期待!','提示')
      // this.$request('/example').then(data=>{
      //   console.log(data);
      // })
    },
    // 引导指示
    handleDriver() {
      driver.defineSteps(driverSteps);
      driver.start();
    },
    // 切换主题
    handleSwitchTheme() {
      // 因为不是select之类的下拉选择框,这里简单判断下值
      let theme = this.$store.state.default.themeColors ==='green' ? 'blue' : 'green';
      // 更新主题色
      replaceThemeColors(theme).then(()=>{
        // 弹窗提示
        this.$message({
          type: 'success',
          message: this.$t('layout.switchThemeInfo')
        })
      })
    },
    // 切换语言
    handleSwitchlanguage() {
      // 因为不是select之类的下拉选择框,这里简单判断下值
      this.$i18n.locale = this.$i18n.locale==='zh' ? 'en' : 'zh';
      // 更新vuex状态
      this.$store.commit('default/set_language',this.$i18n.locale);
      // 弹窗提示
      this.$message({
        type: 'success',
        message: this.$t('layout.switch')
      })
    },
    // 退出登录
    handleLogout() {
      // 弹窗确认退出操作
      this.$confirm(this.$t('layout.logoutConfirm'), this.$t('layout.logout'), {type: 'warning'}).then(()=>{
        // 退出用户(清除token等)
        this.$store.dispatch('user/logout_user').then(()=>{
          // 跳转登录界面
          this.$router.push('/login')
        });
      })
    }
  }
};
</script>

<style lang="scss" scoped>
  .header-aside {
    float: left;
    width: 200px;
    height: 50px;
    padding-left: 17px;
    box-sizing: border-box;
    background-color: #324554;
    border-bottom: 1px solid rgba(255,255,255,.3);
    color: #fff;
    transition: width .3s;
  }
  .header-main {
    display: flex;
    align-items: center;
    margin-left: 200px;
    padding: 0 20px;
    transition: all .3s;
    position: relative;
    z-index: 100;
    box-shadow: 0 2px 2px rgba(0,0,0,.05), 0 1px 0 rgba(0,0,0,.05);
  }
  .header-left {
    flex: 0 0 50%;
  }
  .header-right {
    display: flex;
    flex: auto;
    justify-content: flex-end;
    align-items: center;
  }
  .header-item {
    padding: 0 10px;
    line-height: 50px;
    outline: none;
    cursor: pointer;
    min-width: 50px;
    box-sizing: border-box;
    text-align: center;
    &:hover {
      color: $--color-primary;
      background: $--color-primary-lighter;
    }
  }
  .header-main-collapsed {
    margin-left: 64px;
  }
  .header-aside-collapsed {
    width: 64px;
    overflow: hidden;
  }
  .header-logo {
    vertical-align: -10px;
    margin-right: 10px;
  }
  .username {
    margin-left: 8px;
    margin-right: 4px;
  }
</style>