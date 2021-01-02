<template>
  <div class="wirpper">
    <swiper class="swiper">
    <!-- slides -->
    <swiper-slide>
      <div class="First-img">
        <img class="the-img1" src="../../../../static/images/zgss.jpg" alt="">
        <div class="movie-name">
          <h1 class="a-h1">这个杀手不太冷</h1>
        </div>
        <div class="movie-name-eg">
          <h2 class="b-h2">Leon:The Professional</h2>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="second-img">
        <img class="the-img2" src="../../../../static/images/sd.jpg" alt="">
        <div class="movie-nameb">
          <h1 class="b-h1">速度与激情</h1>
        </div>
        <div class="movie-name-egb">
          <h2 class="b-h2">The Fast and the Furious</h2>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="First-img">
        <img class="the-img1" src="../../../../static/images/xiaoc.jpg" alt="">
        <div class="movie-name">
          <h1 class="a-h1">蝙蝠侠之黑暗骑士</h1>
        </div>
        <div class="movie-name-eg">
          <h2 class="b-h2">The Dark Knight</h2>
        </div>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper'
}
</script>

<style lang="stylus" scoped>
  .swiper
    position relative
    .First-img
      width 100%
      height 37rem
      .the-img1
        height 100%
        width 100%
    .movie-name
      position absolute
      left 26rem
      top 30rem
      width 30rem
      line-height 3rem
      height 3rem
      text-align center
      background: rgba(255, 255, 255, 0.2) none no-repeat scroll
      .a-h1
        font-style 1.5rem
        color #fff
    .movie-name-eg
      position absolute
      left 0rem
      top 35rem
      width 100%
      line-height 2rem
      height 2rem
      text-align center
      background: rgba(255, 255, 255, 0.2) none no-repeat scroll
      .a-h2
        font-style .8rem
        color #fff
    .second-img
      width 100%
      height 37rem
      .the-img2
        height 100%
        width 100%
    .movie-nameb
      position absolute
      left 26rem
      top 30rem
      width 30rem
      line-height 3rem
      height 3rem
      text-align center
      background: rgba(255, 255, 255, 0.2) none no-repeat scroll
      .b-h1
        font-style 1.5rem
        color #fff
    .movie-name-egb
      position absolute
      left 0rem
      top 35rem
      width 100%
      line-height 2rem
      height 2rem
      text-align center
      background: rgba(255, 255, 255, 0.2) none no-repeat scroll
      .b-h2
        font-style .8rem
        color #fff
</style>
