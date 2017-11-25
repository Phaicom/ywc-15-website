<template>
  <div class="header">
    <div class="logo center">
      <img src="~public/logo.png" alt="logo">
    </div>
    <div class="title center">
      <h1>SEMI_FINAL ROUND</h1>
      <h2>ประกาศผู้มีสิทธิ์เข้าสัมภาษณ์</h2>
    </div>

    <!-- heading -->
    <el-row class="bg-white">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <p class="heading center">
          การสัมภาษณ์จะจัดขึ้นใน
          <b>
            <u>วันที่ 26 พฤศจิกายน 2560 ณ อาคาร ซี.พี.ทาวเวอร์ 1 (สีลม)</u>
          </b>
          ซึ่งจะแบ่งออกเป็น 2 รอบ คือ
          <b>
            <u>รอบช่วงเช้าตั้งแต่เวลา 9.00 น. ถึง 12.00 น.</u>
          </b>
          และ
          <b>
            <u>รอบช่วงบ่ายตั้งแต่เวลา 13.00 น. ถึง 18.00 น.</u>
          </b>
        </p>
      </el-col>
    </el-row>

    <!-- detail -->
    <el-row class="bg-white">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <p class="heading">สิ่งที่ต้องเตรียมมาในวันสัมภาษณ์</p>
        <ol>
          <li>
            <span>
              <b>
                <u>บัตรประชาชน</u>
              </b>
              สำหรับการแลกบัตรเข้าอาคาร ซี.พี.ทาวเวอร์ 1 (สีลม) และ
              <b>
                <u>บัตรนักศึกษา</u>
              </b>
              สำหรับการลงทะเบียนสัมภาษณ์ กรุณาแต่งกายด้วยชุดนักศึกษา
            </span>
          </li>
          <li>
            <span>
              <b>
                <u>การบ้านและสิ่งที่กรรมการสาขากำหนดไว้</u>
              </b>
              กรุณาอ่านรายละเอียดการบ้านและสิ่งที่กรรมการให้เตรียมมาให้ครบถ้วน หากสาขาใดต้องใช้โน้ตบุ๊ค ควรชาร์ตแบตเตอรี่และเตรียมอินเทอร์เน็ตส่วนตัวมาให้พร้อม เนื่องจากสถานที่ไม่มีบริการอินเทอร์เน็ตให้ใช้
            </span>
          </li>
          <li>
            <span>
              <b>
                <u>Portfolio</u>
              </b>
              สามารถนำมาประกอบการสัมภาษณ์ได้ สำหรับน้อง ๆ สาขาดีไซน์จะต้องนำ Portfolio มาด้วยทุกคน
            </span>
          </li>
        </ol>
      </el-col>
    </el-row>

    <!-- 2 columns -->
    <el-row class="bg-white">
      <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
        <p class="heading">การเดินทางมาสัมภาษณ์</p>
        <ol>
          <li>
            <span>ด้วยรถไฟฟ้า BTS สามารถลงสถานีศาลาแดง ณ ทางออกที่ 2</span>
          </li>
          <li>
            <span>ด้วยรถไฟฟ้า MRT สามารถลงสถานีสีลม ณ ทางออกที่ 2 โดยเดินเรียบทางเท้าไปตามถนนสีลม</span>
          </li>
          <li>
            <span>ด้วยรถประจำทาง สามารถขึ้นใช้บริการสาย 15, 77, 155, 504, 177, 76</span>
          </li>
        </ol>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <p class="heading">สอบถามเพิ่มเติมติดต่อ</p>
        <ul>
          <li>
            <b>พี่เบ๊บ:</b>
            064-174-7080
          </li>
          <li>
            <b>พี่ฟง:</b>
            092-458-7067
          </li>
          <li>
            <b>พี่ฟง:</b>
            092-458-7067
          </li>
        </ul>
      </el-col>
    </el-row>

    <!-- ps -->
    <!-- heading -->
    <el-row class="bg-white">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <p>
          <b>หมายเหตุ:</b>
          สำหรับน้อง ๆ ที่ไม่สะดวกเดินทางมาสัมภาษณ์ที่อาคาร CP Tower สีลม ให้ Inbox มาทาง
          <a href="https://www.facebook.com/ywcth" rel="noopen">เพจเฟสบุ๊ค Young Webmaster Camp</a>
          ภายในวันที่ 20 พฤศจิกายน 2560</p>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'header',
  props: ['item']
}
</script>

<style lang="stylus" scoped>
$primary = #1071f2
$secondary = #1e262f

.heading
  font-size 22px
  color black

u, b, a
  color $primary

ul
  list-style-type none

ol li
  color $primary

ol li span
  color $secondary

.title
  margin-top 3em

  h1
    font-family Helvetica, sans-serif
    text-transform uppercase
    color $secondary
    -webkit-text-stroke 1px #fff

  h2
    color $primary

@media (max-width: 425px)
  .logo
    background $primary
    padding 20px

  img
    width 100%
    height auto

  .title
    h1
      font-size 33px
      padding-top 18px
      line-height 33px
      margin 0em

    h2
      padding-top 10px
      font-size 20px
      margin 0em

@media (min-width: 426px)
  img
    display inline-block
    height 200px
    background $primary
    border 20px solid $primary

  .title
    h1
      font-size 62px
      line-height 58px
      font-weight 900
      margin 0.25em

    h2
      font-size 30px
      line-height 32px
      margin 0.5em
</style>
