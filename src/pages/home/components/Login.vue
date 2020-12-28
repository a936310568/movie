<template>
  <div class="login-form" v-if="this.isShowLogin">
    <a-button class="btn-esc" type="dashed" @click="closeClick">X</a-button>
    <div class="login-title">
      <h3 class="title-h3">登录您的MovieNest账号</h3>
    </div>
    <form  class="form-info" action="">
      <div class="username">
        <a-input class="inputname" placeholder="请输入您的账号" allow-clear @change="onChange" />
      </div>
      <div class="userpsw">
        <a-input-password class="input-psw" placeholder="请输入您的密码" />
      </div>
      <a-button ghost class="btn-login">登录MovieNest</a-button>
    </form>
    <div class="int">进入MovieNest小窝体验更优质服务</div>
  </div>
</template>

<script>
export default {
  name: 'HomeLogin',
  props: {
    isShowLogin: Boolean
  },
  methods: {
    closeClick () {
      this.$emit('close-login', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .login-form
    position fixed
    z-index 9
    top 50%
    left 50%
    height 20rem
    width 18%
    margin-left -9%
    margin-top -7.5rem
    box-sizing border-box
    background url(../../../../static/images/bgcd.png)
    .form-info
      .username
        text-align center
        margin-top 1rem
        .inputname
          text-align center
          width 70%
      .userpsw
        text-align center
        margin-top 1rem
        .input-psw
          text-align center
          width 70%
      .btn-login
        margin-left 3.6rem
        margin-top 1.5rem
        width 8rem
    .login-title
      overflow hidden
      .title-h3
        font-size 16px
        margin 2.5rem 0 1rem 1rem
    .int
      margin-top 3.2rem
      margin-left .4rem
  .btn-esc
    float right
</style>
