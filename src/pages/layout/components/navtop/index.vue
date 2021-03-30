<template>
  <div>
    <div class="header-aside" :class="collapsed ? 'header-aside-collapsed' : ''">
      <img :src="require('./logo.png')" alt="" width="30px" class="header-logo" id="msetting1">
      {{appname}}
    </div>
    <!-- 如何使用flex或grid实现一个元素在左侧，其余元素在右侧：margin-right: auto --->
    <div class="header-main" :class="collapsed ? 'header-main-collapsed' : ''"> 
      <div class="header-left">
        <el-button icon="el-icon-more-outline" type="text" @click="handleCollapse" id="mcollapse"></el-button>
      </div>
      <div class="header-right">
        <el-tooltip class="header-item" effect="dark" :content="$t('layout.settingTip')" placement="bottom" :open-delay="500" >
          <i class="el-icon-setting iconFont toogle-full" @click="handleEditSystemSetting" id="msetting"></i>
        </el-tooltip>

        <el-tooltip class="header-item" effect="dark" :content="$t('layout.fullTip')" placement="bottom" :open-delay="500" >
          <i class="el-icon-full-screen iconFont toogle-full" @click="handleFullscreen" id="mfullscreen"></i>
        </el-tooltip>

        <el-tooltip class="header-item" effect="dark" :content="$t('layout.helpTip')" placement="bottom" :open-delay="500" >
          <!-- 由于tooltip或是其他的原因，必须添加.prevent.top修饰器，否则无法正常显示dirver -->
          <i class="el-icon-warning-outline iconFont toogle-full" @click.prevent.stop="handleDriver" ></i>
        </el-tooltip>
        
        <el-dropdown @command="handleSetLangague" >
          <i class="el-icon-more-outline iconFont toogle-full header-item" ></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh" :disabled="zhDisabled">中文</el-dropdown-item>
            <el-dropdown-item command="en" :disabled="enDisabled">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
          
        <el-dropdown class="header-item" trigger="click">
          <div>
            <el-avatar :src="require('./avatar.jpg')" size="small" style="vertical-align: middle"></el-avatar>
            <span class="username">admin</span>
            <i class="el-icon-caret-bottom"></i> 
          </div>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link :to="{ path: '/' }">{{ $t('layout.home') }}</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <a href="https://github.com/juetan/management">{{ $t('layout.repository') }}</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a href="http://www.juetan.cn">{{ $t('layout.devnote') }}</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a href="https://www.juetan.cn">{{ $t('layout.myblog') }}</a>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <span class="logout" @click="handleLogout" >{{ $t('layout.logout') }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
// import screenfull from 'screenfull'
import driver from '@/plugins/driver'
// import { driverSteps } from '@/api/application'

export default {
  name: "navtop",
  data() {
    return {
      langague: 'zh',
      steps: [
        {
          element: "#mcollapse",
          popover: {
            title: "折叠/展开",
            description: "折叠或展开左侧导航菜单",
            position: "bottom",
          },
        },
        {
          element: "#msetting",
          popover: {
            title: "系统设置",
            description: "设置系统参数",
            position: "left",
          },
        },
        {
          element: "#mfullscreen",
          popover: {
            title: "全屏显示",
            description: "大屏展示",
            position: "left",
          },
        },
      ]
    };
  },
  computed: {
    collapsed() {
      return this.$store.state.default.collapsed
    },
    zhDisabled() {
      return this.$i18n.locale==='zh'
    },
    enDisabled() {
      return this.$i18n.locale==='en'
    },
    appname() {
      return this.$store.state.default.name
    }
  },
  methods: {
    handleCollapse() {
      this.$store.commit('default/trigger_collapsed')
    },
    handleFullscreen() {
      // screenfull.toggle()
    },
    handleEditSystemSetting() {
      this.$confirm('敬请期待!','提示')
    },
    handleDriver() {
      driver.defineSteps(this.steps);
      driver.start();
    },
    handleSetLangague(lang) {
      this.$i18n.locale = lang;
    },
    handleLogout() {
      this.$confirm('即将退出登录，是否继续？', '退出提示', {
        confirmButtonText: '确定',
        concelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        this.$store.commit('user/logout_user');
        this.$router.push('/login')
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
      background: #f2f6fc;
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
</style>