<template>
  <div class="mycenter" v-if="this.isShowMycenter">
    <a-card hoverable style="width: 300px">
    <img
      slot="cover"
      alt="example"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    />
    <template slot="actions" class="ant-card-actions">
      <a-icon key="setting" type="setting" />
      <a-icon key="edit" type="edit" />
      <a-icon key="ellipsis" type="ellipsis" />
    </template>
    <a-card-meta title="爱看电影的金枪鱼" description="欢迎来到我的小窝">
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'HomeMycenter',
  props: {
    isShowMycenter: Boolean
  }
}
</script>

<style lang="stylus" scoped>
  .mycenter
    position fixed
    top 5rem
    right 1rem
    z-index 15
    .mycenter-esc
      position absolute
      z-index 99
      top 0
      right 0
</style>
