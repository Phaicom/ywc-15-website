<template>
  <div class="main bg-white">

    <!-- search -->
    <el-row class="search-wrapper" :gutter="10">

      <el-col :lg="20" :md="20" :sm="20" :xs="24">
        <el-input placeholder="Filter by Name" icon="search" label="search" v-model="keyword" />
      </el-col>
      <el-col :lg="4" :md="4" :sm="4" :xs="24">
        <el-button @click="resetKeyword">Reset</el-button>
      </el-col>

    </el-row>

    <!-- major -->
    <el-row :gutter="80">
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="box" @click="setMajor('content')" :class="{'pressed':major === 'content'}">
          <img src="~public/content.svg" alt="content">
          <b class="major">content</b>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="box" @click="setMajor('design')" :class="{'pressed':major === 'design'}">
          <img src="~public/design.svg" alt="design">
          <b class="major">design</b>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="box" @click="setMajor('marketing')" :class="{'pressed':major === 'marketing'}">
          <img src="~public/marketing.svg" alt="marketing">
          <b class="major">marketing</b>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="box" @click="setMajor('programming')" :class="{'pressed':major === 'programming'}">
          <img src="~public/programming.svg" alt="programming">
          <b class="major">programming</b>
        </div>
      </el-col>
    </el-row>

    <!-- interview name -->
    <el-row :gutter="10">
      <!-- morning -->
      <el-col :xs="24" :sm="12" :md="8">
        <div>
          <table width="100%">
            <thead>
              <tr>
                <td colspan="4">
                  <b class="title">รายชื่อสัมภาษณ์ช่วงเช้า</b>
                </td>
              </tr>
            </thead>

            <tbody>
              <transition-group tag="tr" name="item">
                <tr v-for="item in morningInterview" :key="item.interviewRef" :item="item">
                  <td>{{`${item.interviewRef}_ ${item.firstName} ${item.lastName}`}}</td>
                </tr>
              </transition-group>
            </tbody>

          </table>
        </div>
      </el-col>

      <!-- noon -->
      <el-col :xs="24" :sm="12" :md="8">
        <div>
          <table width="100%">
            <thead>
              <tr>
                <td colspan="4">
                  <b class="title">รายชื่อสัมภาษณ์ช่วงบ่าย</b>
                </td>
              </tr>
            </thead>

            <tbody>
              <transition-group tag="tr" name="item">
                <tr v-for="item in noonInterview" :key="item.interviewRef" :item="item">
                  <td>{{`${item.interviewRef}_ ${item.firstName} ${item.lastName}`}}</td>
                </tr>
              </transition-group>
            </tbody>

          </table>
        </div>
      </el-col>

      <!-- homework -->
      <el-col :xs="24" :sm="12" :md="8">
        <div>
          <!-- content -->
          <template v-if="major==='content'">
            <table width="100%">
              <thead>
                <tr>
                  <td colspan="4">
                    <b class="title">การบ้านสาขาคอนเทนท์</b>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <p>ให้น้อง ๆ เลือกทำคอนเทนต์ใด คอนเทนต์หนึ่งจาก 2 หัวข้อด้านล่าง โดยต้องทำเป็นคอนเทนต์ออกมาจริงเท่านั้น ไม่จำกัดรูปแบบการนำเสนอ</p>
                    <b>หัวข้อที่ให้เลือก</b>
                    <ol>
                      <li>คอนเทนต์ที่ทำให้ผู้ใช้ Social เข้าใจ Cyberbullying และตระหนักถึงปัญหาที่เกิดขึ้นจาก Cyberbullying</li>
                      <li>คอนเทนต์ที่ทำให้คนไทยเปลี่ยนพฤติกรรมเสพติดหน้าจอ เสพติด Social หันมาพูดคุยกัน เจอหน้ากันในชีวิตจริง ๆ มากกว่าที่เป็นอยู่</li>
                    </ol>
                  </td>
                </tr>
              </tbody>

            </table>
          </template>

          <!-- design -->
          <template v-if="major==='design'">
            <table width="100%">
              <thead>
                <tr>
                  <td colspan="4">
                    <b class="title">การบ้านสาขาดีไซน์</b>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <p>
                      ให้ผู้ผ่านเข้ารอบสัมภาษณ์ออกแบบเว็บไซต์ของ
                      <b>"คณะรักษาความสงบแห่งชาติ หรือ คสช."</b>
                      เพื่อเป็นสื่อกลางในการประชาสัมพันธ์นโยบายต่าง ๆ และเป็นสื่อกลางระหว่างประชาชนกับคณะรักษาความสงบแห่งชาติ โดยให้ออกแบบในลักษณะของ One Page Design Website
                    </p>

                    <p>
                      ** สำหรับผู้ผ่านเข้ารอบสัมภาษณ์คนใดทำ CSS มา คณะกรรมการจะพิจารณาเป็นพิเศษ</p>
                  </td>
                </tr>
              </tbody>

            </table>
          </template>

          <!-- marketing -->
          <template v-if="major==='marketing'">
            <table width="100%">
              <thead>
                <tr>
                  <td colspan="4">
                    <b class="title">การบ้านสาขามาร์เก็ตติ้ง</b>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <p>ให้ทำแผนการตลาด (Marketing Plan) สำหรับเว็บไซต์หนึ่งเว็บไซต์ โดยเลือกเว็บไซต์ใด ๆ ก็ได้ ทั้งเว็บไซต์ของไทยและเว็บไซต์ของต่างประเทศ</p>

                    <p>
                      นำเสนอในรูปแบบพรีเซนเทชั่น
                      <b>ไม่เกิน 10 หน้า ภายในเวลา 5 นาที</b>
                    </p>
                  </td>
                </tr>
              </tbody>

            </table>
          </template>

          <!-- programming -->
          <template v-if="major==='programming'">
            <table width="100%">
              <thead>
                <tr>
                  <td colspan="4">
                    <b class="title">การบ้านสาขาโปรแกรมมิ่ง</b>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <p>
                      ให้เขียน
                      <b>เว็บไซต์ประกาศผลผู้ผ่านเข้ารอบสัมภาษณ์ของ YWC#15 </b>
                      โดยใช้ข้อมูลจาก
                      <a href="https://ywc15.ywc.in.th/api/interview" rel="noopen">API</a>
                      โดยมี Feature ดังนี้
                    </p>
                    <ul>
                      <li>ดึงข้อมูลจาก API โดยตรง</li>
                      <li>ให้แสดงผลแยกแต่ละสาขา</li>
                      <li>มีระบบค้นหาชื่อผ่านกล่อง Search</li>
                      <li>ความสามารถหรือ Feature พิเศษอื่น ๆ ที่มีความแตกต่าง และแสดงความสามารถของน้องออกมาให้ได้มากที่สุด</li>
                    </ul>
                    <p>เมื่อทำเสร็จแล้วให้ Push Source Code ขึ้น GitHub ก่อนเวลาสัมภาษณ์</p>
                  </td>
                </tr>
              </tbody>

            </table>
          </template>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'main',

  props: ['item'],

  data () {
    return {
      major: 'content',
      transition: 'slide-right',
      displayedPage: 0,
      displayedInterviews: [],
      keyword: '',
      visible: false
    }
  },

  beforeMount () {
    if (this.$root._isMounted) {
      this.loadItems()
    }
  },

  created () {
    this.loadItems()
  },

  methods: {
    loadItems () {
      // this.$bar.start()
      this.$store.dispatch('FETCH_INTERVIEWS_DATA', {
        major: this.major,
        keyword: this.keyword
      }).then(() => {
        this.displayedInterviews = this.$store.getters.activeInterviews
        // this.$bar.finish()
      })
    },

    setMajor (major) {
      this.major = major
      this.loadItems()
    },

    resetKeyword () {
      this.keyword = ''
    }
  },

  computed: {
    morningInterview () {
      return this.displayedInterviews.filter((item, index, array) => {
        if (index < array.length / 2.5) {
          return item
        }
      })
    },
    noonInterview () {
      return this.displayedInterviews.filter((item, index, array) => {
        if (index >= array.length / 2.5) {
          return item
        }
      })
    }
  },

  watch: {
    keyword: function (val) {
      this.loadItems()
    }
  }
}
</script>

<style lang="stylus" scoped>
$primary = #1071f2

p
  text-align justify
  text-indent 30px

.title, a
  color $primary

.title
  font-size 20px

.major
  position relative
  top -20px
  font-size 15px

.box
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding 0px 20px
  min-height 150px
  border-radius 5px
  margin-bottom 10px
  transition all 0.2s

  &.pressed
    box-shadow 0 1px 3px 0 rgba(0, 0, 0, 0.15)

  &:hover
    box-shadow 0 1px 3px 0 rgba(0, 0, 0, 0.15)

.search-wrapper
  margin 10px 0

.col-space
  content '&nbsp;'

  @media screen and (max-width: 767px)
    display none

.el-button
  width 100%

table
  border-collapse collapse
  width 100%

th, td
  padding 8px
  text-align left
  border-bottom 1px solid #ddd

tr
  tr:hover
    background-color #f5f5f5

.item-move, .item-enter-active, .item-leave-active
  transition all 0.5s cubic-bezier(0.55, 0, 0.1, 1)

.item-enter
  opacity 0
  transform translate(30px, 0)

.item-leave-active
  position absolute
  opacity 0
  transform translate(30px, 0)
</style>
