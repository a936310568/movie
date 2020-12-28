<template>
  <div class="sidebar">
    <div class="kill-name">
      <h2 class="kill-name-word">
        <a href="#kill">
          <p>Mathilda</p>
          <img src="../../../../static/images/kill-bgd.jpg" alt="">
        </a>
      </h2>
    </div>
    <div class="fast-name">
      <h2 class="fast-name-word">
        <a href="#fast">
          <p>Fast and the Furious</p>
          <img src="../../../../static/images/fast-bgd.jpg" alt="">
        </a>
      </h2>
    </div>
    <div class="city-name">
      <h2 class="city-name-word">
        <a href="#dark">
          <p>Dark Knight</p>
          <img src="../../../../static/images/bfx-bgd.jpg" alt="">
        </a>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSidebar',
  data () {
    return {
      isShow: 'false',
      isShow2: 'false',
      isShow3: 'false'
    }
  },
  methods: {
    showBgd () {
      this.isShow = 'true'
      this.$forceUpdate()
    },
    closeBgd () {
      this.isShow = 'false'
      this.$forceUpdate()
    },
    showBgd2 () {
      this.isShow2 = 'true'
      this.$forceUpdate()
    },
    closeBgd2 () {
      this.isShow2 = 'false'
      this.$forceUpdate()
    },
    showBgd3 () {
      this.isShow3 = 'true'
      this.$forceUpdate()
    },
    closeBgd3 () {
      this.isShow3 = 'false'
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .sidebar
    position fixed
    top 100px
    left 0
    width 18%
    height 550px
    font-family: "din-condensed-web", "Trebuchet MS", "Arial Narrow", Arial, sans-serif;
    .kill-name
      width 100%
      height 180px
      .kill-name-word
        font-size 26px
        color #337ab7
        text-align center
        a
          width 100%
          height 180px
          img
            width 10px
            height 10px
            opacity 0
            border-radius 10%
        a:hover
          color #072
          img
            opacity 1
            width 100px
            height 100px
            transition width 2s ease, height  2s ease, opacity 2s ease
    .fast-name
      width 100%
      height 180px
      .fast-name-word
        font-size 24px
        color #337ab7
        text-align center
        a
          width 100%
          height 180px
          img
            width 10px
            height 10px
            opacity 0
            border-radius 10%
        a:hover
          color #072
          img
            opacity 1
            width 100px
            height 100px
            transition width 2s ease, height  2s ease, opacity 2s ease
    .city-name
      width 100%
      height 180px
      .city-name-word
        overflow hidden
        font-size 26px
        color #337ab7
        text-align center
        a
          width 100%
          height 180px
          img
            width 10px
            height 10px
            opacity 0
            border-radius 10%
        a:hover
          color #072
          img
            opacity 1
            width 100px
            height 100px
            transition width 2s ease, height  2s ease, opacity 2s ease
</style>
