<template>
  <div class="set-form" v-if="this.isShowSet">
    <div class="set-title">
      <a-button class="btn-esc" type="dashed" @click="closeSet">X</a-button>
      <h3 class="title-h3">注册您的MovieNest账号</h3>
    </div>
    <form  class="form-info" action="">
      <div class="username">
        <a-input class="inputname" placeholder="请输入您的账号" allow-clear @change="onChange" />
      </div>
      <div class="userpsw">
        <a-input-password class="input-psw" placeholder="请输入您的密码" />
      </div>
      <a-button ghost class="btn-set">注册MovieNest</a-button>
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
      .btn-set
        margin-left 3.6rem
        margin-top 1.5rem
        width 8rem
    .set-title
      overflow hidden
      .title-h3
        float left
        margin 1.7rem 0 1rem 2rem
      .btn-esc
        float right
        margin -1px
    .int
      margin-top 3.2rem
      margin-left .4rem
</style>
