<template>
  <div class="sidebar">
    <div class="kill-name">
      <h2 class="kill-name-word">Mathilda</h2>
    </div>
    <div class="fast-name">
      <h2 class="fast-name-word">Furious</h2>
    </div>
    <div class="city-name">
      <h2 class="city-name-word">motherland</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSidebar'
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
        line-height 180px
        text-align center
    .fast-name
      width 100%
      height 180px
      .fast-name-word
        font-size 26px
        color #337ab7
        line-height 180px
        text-align center
    .city-name
      width 100%
      height 180px
      .city-name-word
        font-size 26px
        color #337ab7
        line-height 180px
        text-align center
</style>
