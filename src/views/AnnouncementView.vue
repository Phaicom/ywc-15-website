<template>
  <div>
    <anmt-element></anmt-element>
    <el-container>
      <el-main>
        <anmt-header></anmt-header>
      </el-main>
    </el-container>
    <el-container>
      <el-main>
        <anmt-main></anmt-main>
      </el-main>
      <el-footer>
        <anmt-footer></anmt-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import AnmtElement from "../components/Element.vue"
import AnmtHeader from "../components/Header.vue"
import AnmtMain from "../components/Main.vue"
import AnmtFooter from "../components/Footer.vue"

export default {
  name: 'announcement',

  components: {
    AnmtElement,
    AnmtHeader,
    AnmtMain,
    AnmtFooter
  }
}
</script>

<style lang="stylus">
.bg-white
  background-color rgba(255, 255, 255, 0.9)
  box-shadow 0 0 20px 10px rgba(255, 255, 255, 0.9)

.center
  text-align center
</style>
