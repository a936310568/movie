<template>
  <div class="sidebar">
    <div class="kill-name">
      <h2 class="kill-name-word">
        <a href="#kill">
          <img src="../../../../static/images/kill-bgd.jpg" alt="">
          Mathilda
        </a>
      </h2>
    </div>
    <div class="fast-name">
      <h2 class="fast-name-word">
        <a href="#fast">
          <img src="../../../../static/images/fast-bgd.jpg" alt="">
          Fast and the Furious
        </a>
      </h2>
    </div>
    <div class="city-name">
      <h2 class="city-name-word">
        <a href="#dark">
          <img src="../../../../static/images/bfx-bgd.jpg" alt="">
          Dark Knight
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
        img
          width 10px
          height 50px
          opacity 0
        a
          width 100%
          height 180px
        a:hover img
          width 80%
          height 80%
          opacity 1
          transition opacity 3s ease-in-out
    .fast-name
      width 100%
      height 180px
      .fast-name-word
        font-size 24px
        color #337ab7
        text-align center
        img
          width 10px
          height 50px
          opacity 0
        a
          width 100%
          height 180px
        a:hover img
          width 80%
          height 80%
          opacity 1
          transition opacity 3s ease-in-out
    .city-name
      width 100%
      height 180px
      .city-name-word
        overflow hidden
        font-size 26px
        color #337ab7
        text-align center
        img
          width 10px
          height 50px
          opacity 0
        a
          width 100%
          height 180px
        a:hover img
          width 80%
          height 80%
          opacity 1
          transition opacity 3s ease-in-out
</style>
