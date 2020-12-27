<template>
  <div class="home">
    <home-header @show-login="handleLoginCilck" @show-set="handleSetCilck"></home-header>
    <home-swiper></home-swiper>
    <home-login :is-show-login="isShowLogin" @close-login="handleLoginCilck"></home-login>
    <home-setup :is-show-set="isShowSet" @close-set="handleSetCilck"></home-setup>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeLogin from './components/Login'
import HomeSetup from './components/Setup'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeLogin,
    HomeSetup
  },
  data () {
    return {
      isShowLogin: false,
      isShowSet: false
    }
  },
  methods: {
    handleLoginCilck (isShowLogin) {
      this.isShowLogin = isShowLogin
    },
    handleSetCilck (isShowSet) {
      this.isShowSet = isShowSet
      console.log(isShowSet)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
