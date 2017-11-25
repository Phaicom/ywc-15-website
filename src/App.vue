<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style lang="stylus">
$primary = #1071f2

body
  font-family 'Kanit', sans-serif
  font-size 15px
  background-color #fff
  margin 0
  padding-top 55px
  color #34495e
  overflow-y scroll

  .el-container
    margin-bottom 40px

.view
  max-width 800px
  margin 0 auto
  position relative
</style>
