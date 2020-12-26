<template>
  <div>
    <div id="app">
    <router-view/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userName: ''
    }
  },
  methods: {
    emitEmpty () {
      this.$refs.userNameInput.focus()
      this.userName = ''
    }
  }
}
</script>

<style>

</style>
