<template>
  <div class="the-recommend">
    <div class="movie-kill">
      <div class="kill-title"><h2>Leon - The Professional</h2></div>
    </div>
    <div class="tab">
      <div class="tab_list">
        <ul class="kill-role">
          <li v-for="(item, index) in liList" :key="index" @click="addClass(index)" :class="active == index?'actice' : ''">{{item.title}}</li>
        </ul>
      </div>
      <div class="tab-con">
        <div class="tab-con-left">
          <div class="The-lian">
            <img class="The-lian-img" src="../../../../static/images/la.jpg" alt="">
          </div>
          <div class="The-lian-name">
            <h3 class="The-lian-name-word">Léon</h3>
            <span class="The-lian-name-word1">让·雷诺&nbsp;饰演</span>
            </div>
        </div>
        <div class="tab-con-right">
          <div class="lian-rec">
            意大利裔的顶尖职业杀手，一直孤独的住在纽约小意大利，
            只有一株盆栽是他最好的朋友。他虽然身怀绝技，但内心非常缺乏安全感。
            甚至从不敢睡在床上，而是坐在椅子上睡，并把枪放在手边。
          </div>
          <div class="shape">
            <div class="shape-name">
              <h3>Shape Of My Heart</h3>
            </div>
            <div class="shape-music">
              <audio src="../../../../static/audio/shape of my heart.mp3" controls="controls"></audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      active: 0,
      liList: [
        { title: '里昂' },
        { title: '玛蒂尔达' }
      ]
    }
  },
  methods: {
    addClass (index) {
      this.active = index
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .the-recommend
    height 1000px
    width 80%
    float right
    .kill-title
      height 8.666667rem
      background #fff
      font-size 2rem
      line-height 8.66rem
      text-align center
  .kill-role
    height 4rem
    background #fff
    li
      list-style none
      width 4rem
      height 2rem
      float left
      line-height 2rem
      text-align center
    .current {
      background red
      color #fff
    }
  .tab-con
    display flex
    height 20rem
    .tab-con-left
      width 40%
      .The-lian
        overflow hidden
        width 200px
        height 200px
        margin-left 109px
        .The-lian-img
          width 100%
          height 100%
          border-radius 100px
      .The-lian-name
        height 50px
        .The-lian-name-word
          line-height 50px
          text-align center
          font-size 28px
        .The-lian-name-word1
          margin-left 173px
    .tab-con-right
      flex 1
      background #fff
      .lian-rec
        width 500px
        height 100px
        border 1px solid #ccc
        padding 15px
        margin 30px
        margin-left 70px
      .shape
        margin-left 50px
        margin-top 80px
        overflow hidden
        .shape-name
          float left
          margin-top 10px
          font-size 20px
        .shape-music
          float left
          margin-left 30px
</style>
