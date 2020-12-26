<template>
  <div class="the-header">
    <div class="img-Container">
      <img class="the-img" src="../../../../static/images/logo2.png" alt="">
    </div>
    <div class="movie-left-recommend">推荐电影</div>
    <div class="movie-left-love">高分电影</div>
    <div class="my-center">个人中心</div>
    <div class="set-up">注册</div>
    <div class="login">登录</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
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
    .set-up
      float right
      color #ffffff
      font-style 1.5rem
      line-height 5.533333rem
      margin 0 1rem
    .login
      float right
      color #ffffff
      font-style 1.5rem
      line-height 5.533333rem
      margin 0 1rem
</style>
