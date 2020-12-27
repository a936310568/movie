<template>
  <div class="login-form" v-if="this.isShowLogin">
    <div class="login-title">
      <h3 class="title-h3">登录您的MovieNest账号</h3>
      <button class="btn-esc" @click="closeClick">X</button>
    </div>
    <form  class="form-info" action="">
      <div class="username">
        <input class="inputname" type="text" placeholder="请输入您的姓名">
      </div>
      <div class="userpsw">
        <input class="input-psw" type="password" placeholder="请输入您的密码">
      </div>
      <button class="btn-login">登录MovieNest</button>
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
    border .1667rem solid #222
    background #eee
    .form-info
      .username
        text-align center
        margin-top 1rem
        .inputname
          text-align center
      .userpsw
        text-align center
        margin-top 1rem
        .input-psw
          text-align center
      .btn-login
        margin-left 3.6rem
        margin-top 1.5rem
        width 8rem
    .login-title
      overflow hidden
      .title-h3
        float left
        margin 2.6rem 0 1rem 2rem
      .btn-esc
        float right
        margin 0
    .int
      margin-top 3.2rem
      margin-left .4rem
</style>
