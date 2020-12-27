<template>
  <div class="set-form" v-if="this.isShowSet">
    <div class="set-title">
      <h3 class="title-h3">注册您的MovieNest账号</h3>
      <button class="btn-esc" @click="closeSet">X</button>
    </div>
    <form  class="form-info" action="">
      <div class="username">
        <input class="inputname" type="text" placeholder="请输入您的姓名">
      </div>
      <div class="userpsw">
        <input class="input-psw" type="password" placeholder="请输入您的密码">
      </div>
      <button class="btn-set">注册MovieNest</button>
    </form>
    <div class="int">注册MovieNest小窝体验更优质服务</div>
  </div>
</template>

<script>
export default {
  name: 'HomeSetup',
  props: {
    isShowSet: Boolean
  },
  methods: {
    closeSet () {
      this.$emit('close-set', false)
      console.log(1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .set-form
    position fixed
    z-index 8
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
      .btn-set
        margin-left 3.6rem
        margin-top 1.5rem
        width 8rem
    .set-title
      overflow hidden
      .title-h3
        float left
        margin 2.6rem 0 1rem 2rem
      .btn-esc
        float right
        margin -1px
    .int
      margin-top 3.2rem
      margin-left .4rem
</style>
