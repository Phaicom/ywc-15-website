<template>
  <div class="footer">
    <el-col :xs="24" :sm="24" :md="24">
      <a href="https://ywc15.ywc.in.th/landing" rel="noopen">
        <el-button>เข้าสู่เว็บไซต์หลัก</el-button>
      </a>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'footer',
  props: ['item']
}
</script>

<style lang="stylus" scoped>
$primary = #1071f2

div
  text-align center

  .el-button
    font-family 'Kanit', sans-serif
    width 100%
    font-size 20px
    background-color $primary
    color white
    transition background-color 0.5s ease-out

    &:hover
      background-color #0a4796
</style>
