<template>
  <div class="the-header">
    <div class="img-Container">
      <img class="the-img" src="../../../../static/images/logo2.png" alt="">
    </div>
    <div class="movie-left-recommend">推荐电影</div>
    <div class="movie-left-love">高分电影</div>
    <div class="my-center">
      <button class="btn-center" @mouseover="showMycenter" @mouseleave="closeMycenter">个人中心</button>
    </div>
    <div class="set-up">
      <button class="btn-set" @click="clickSet">注册</button>
    </div>
    <div class="login">
      <button class="btn-login" @click="loginClick">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  methods: {
    loginClick () {
      this.$emit('show-login', true)
    },
    clickSet () {
      this.$emit('show-set', true)
    },
    showMycenter () {
      this.$emit('show-mycenter', true)
    },
    closeMycenter () {
      this.$emit('close-mycenter', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .the-header
    overflow hidden
    background #222
    height 5.533333rem
    width 100%
    .img-Container
      float left
      height 5.5rem
      width 12rem
      .the-img
        width 100%
        height 100%
    .movie-left-recommend
      float left
      color #ffffff
      font-style 1.5rem
      line-height 5.533333rem
      font-weight 600
      margin 0 2rem
    .movie-left-love
      float left
      color #ffffff
      font-style 1.5rem
      line-height 5.533333rem
      font-weight 600
      margin 0 2rem
    .my-center
      float right
      color #ffffff
      font-style 1.5rem
      line-height 5.533333rem
      margin 0 1rem
      .btn-center
        background #222
        border .013333rem solid #222
        line-height 3rem
    .set-up
      float right
      color #ffffff
      font-style 1.5rem
      line-height 5.533333rem
      margin 0 1rem
      .btn-set
        background #222
        border .013333rem solid #222
        line-height 3rem
    .login
      float right
      color #ffffff
      font-style 1.5rem
      line-height 5.533333rem
      margin 0 1rem
      .btn-login
        background #222
        border .013333rem solid #222
        line-height 3rem
</style>
