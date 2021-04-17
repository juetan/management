<template>
  <div class="box">
    <div class="login">
      <!-- 左侧 -->
      <div class="left"></div>
      <!-- 右侧 -->
      <div class="contianer">
        <!-- 头部 -->
        <div class="header">
          <h1 class="title"> {{ $t('login.title') }} </h1>
          <p class="welcome"> {{ $t('login.description') }} </p>
        </div>
        <!-- 表单 -->
        <el-form class="form" :model="formData" :rules="formRule" ref="form">
          <el-form-item prop="username">
            <el-input v-model="formData.username" :placeholder="$t('login.userplaceholder')" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="formData.password" :placeholder="$t('login.passplaceholder')" prefix-icon="el-icon-lock" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox class="remember">{{ $t('login.rememberme') }}</el-checkbox>
            <el-button type="text" class="forget">{{ $t('login.forget') }} </el-button>
          </el-form-item>
          <el-button type="primary" class="submit" @click="handleSubmit"> {{ $t('login.submit') }} </el-button>
        </el-form>
        <!-- 其他登录 -->
        <div class="footer">
          <div class="else">
            <span class="text">{{ $t('login.ways') }}</span>
          </div>
          <div class="method">
            <span class="phone"><i class="el-icon-mobile-phone"></i> {{ $t('login.bymobile') }} </span>
            <span class="mail"><i class="el-icon-message"></i> {{ $t('login.byemail') }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      formData: {
        username: '',
        password: '',
        remember: false
      },
      formRule: {
        username: [{required: true, message: this.$t('login.uservalidator'), trigger: 'blur'}],
        password: [{required: true, message: this.$t('login.passvalidator'), trigger: 'blur'}]
      }
    }
  },
  methods: {
    handleSubmit() {
      // 校验表单数据，确保用户输入符合规则
      this.$refs.form.validate(valid=>{
        if (valid) {
          // 网络请求数据
          this.$api.user.login(this.formData).then(data=>{
            // 更新本地令牌
            this.$store.commit('user/set_token',data.token)
            // 弹窗提示并跳转首页
            let self = this
            this.$message({
              message: data.message,
              type: 'success',
              duration: 2000,
              onClose() {
                self.$router.push('/')
              }
            })
          })
        }
      })
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgb(234, 243, 255);
    background: url('~@/assets/images/background.jpg');
    background-size: 100% auto;
  }
  .login {
    display: flex;
    width: 1000px;
    height: 550px;
    border-radius: 3px;
    background-color: $--color-white;
    overflow: hidden;
  }
  .left {
    flex: 0 0 50%;
    background: url(./login.jpeg);
  }
  .contianer {
    flex: 0 0 50%;
    box-sizing: border-box;
    padding: 80px;
  }
  .header {
    margin-bottom: 30px;
  }
  .title {
    margin: 0;
    font-size: 20px;
  }
  .welcome {
    font-size: 14px;
    color: $--color-text-regular;
  }
  .remember {
    float: left;
  }
  .forget {
    float: right;
  }
  .method {
    font-size: 13px;
    color: $--color-text-regular;
    text-align: center;
    margin-top: 16px;
  }
  .submit {
    width: 100%;
  }
  .else {
    position: relative;
    margin-top: 20px;
    text-align: center;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #e4e7ed;
    }
  }
  .text {
    position: relative;
    padding: 0 10px;
    background-color: $--color-white;
    font-size: 14px;
  }
</style>