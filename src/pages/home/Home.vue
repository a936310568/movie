<template>
  <div class="home">
    <home-header @show-login="handleLoginCilck" @show-set="handleSetCilck" @show-mycenter="mouseOverMycenter" @close-mycenter="mouseOverMycenter"></home-header>
    <home-swiper></home-swiper>
    <home-login :is-show-login="isShowLogin" @close-login="handleLoginCilck"></home-login>
    <home-setup :is-show-set="isShowSet" @close-set="handleSetCilck"></home-setup>
    <home-mycenter :is-show-mycenter="isShowMycenter"></home-mycenter>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeLogin from './components/Login'
import HomeSetup from './components/Setup'
import HomeMycenter from './components/Mycenter'
import HomeRecommend from './components/Recommend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeLogin,
    HomeSetup,
    HomeMycenter,
    HomeRecommend
  },
  data () {
    return {
      isShowLogin: false,
      isShowSet: false,
      isShowMycenter: false
    }
  },
  methods: {
    handleLoginCilck (isShowLogin) {
      this.isShowLogin = isShowLogin
    },
    handleSetCilck (isShowSet) {
      this.isShowSet = isShowSet
    },
    mouseOverMycenter (isShowMycenter) {
      this.isShowMycenter = isShowMycenter
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
