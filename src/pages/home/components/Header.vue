<template>
  <div class="the-header">
    <div class="img-Container">
      <img class="the-img hidden-xs" src="../../../../static/images/logo2.png" alt="">
    </div>
    <div class="movie-left-recommend"></div>
    <div class="movie-left-love">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          我的推荐 <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item>千与千寻</a-menu-item>
          <a-menu-item>狼的孩子雨和雪</a-menu-item>
          <a-sub-menu key="test" title="漫威系列">
            <a-menu-item>钢铁侠</a-menu-item>
            <a-menu-item>美国队长</a-menu-item>
          </a-sub-menu>
          <a-sub-menu title="指环王系列">
            <a-menu-item>指环王1-3</a-menu-item>
            <a-menu-item>霍比特人</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-dropdown>
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          豆瓣高分 <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item>肖申克的救赎</a-menu-item>
          <a-menu-item>霸王别姬</a-menu-item>
          <a-menu-item>控方证人</a-menu-item>
          <a-menu-item>阿甘正传</a-menu-item>
          <a-menu-item>美丽人生</a-menu-item>
          <a-menu-item>辛特勒的名单</a-menu-item>
          <a-menu-item>十二怒汉</a-menu-item>
          <a-menu-item>灿烂人生</a-menu-item>
        </a-menu>
      </a-dropdown>
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          热门排行 <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item>神奇马戏团之动物饼干</a-menu-item>
          <a-menu-item>最美的时候遇见你</a-menu-item>
          <a-menu-item>豆福传</a-menu-item>
          <a-menu-item>你好,疯子!</a-menu-item>
          <a-menu-item>学区房72小时</a-menu-item>
          <a-menu-item>老师·好</a-menu-item>
          <a-menu-item>新喜剧之王(粤语)</a-menu-item>
          <a-menu-item>港珠澳大桥</a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
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
        display block
        max-width 100%
        max-height 100%
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
      .ant-dropdown-link
        color #ffffff
        font-size 22px
        margin-left 30px
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
