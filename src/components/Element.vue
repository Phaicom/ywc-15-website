<template>
  <div class="element">
    <div class="d1 ring anim" :class="element.d1.dimention" :style="element.d1.style"></div>
    <div class="d2 anim" :class="element.d2.dimention" :style="element.d2.style"></div>
    <div class="d3 anim" :class="element.d3.dimention" :style="element.d3.style"></div>
    <div class="d4 ring anim" :class="element.d4.dimention" :style="element.d4.style"></div>
    <div class="c1 ring anim" :class="element.c1.dimention" :style="element.c1.style"></div>
    <div class="c2 ring anim" :class="element.c2.dimention" :style="element.c2.style"></div>
    <div class="c3 anim" :class="element.c3.dimention" :style="element.c3.style"></div>
    <div class="r1 ring anim" :class="element.r1.dimention" :style="element.r1.style"></div>
    <div class="r2 ring anim" :class="element.r2.dimention" :style="element.r2.style"></div>
    <div class="r3 anim" :class="element.r3.dimention" :style="element.r3.style"></div>
  </div>
</template>

<script>
export default {
  name: 'element',

  data () {
    return {
      scrolled: false,
      scrollMaxY: null,
      colour: [
        'r', 'y', 'b'
      ],
      dimention: [
        'circ', 'rect', 'dia'
      ],
      element: {
        d1: {
          dimention: {},
          style: {},
          top: 5
        },
        d2: {
          dimention: {},
          style: {},
          top: 3
        },
        d3: {
          dimention: {},
          style: {},
          top: 33
        },
        d4: {
          dimention: {},
          style: {},
          top: 43
        },
        c1: {
          dimention: {},
          style: {},
          top: 10
        },
        c2: {
          dimention: {},
          style: {},
          top: 50
        },
        c3: {
          dimention: {},
          style: {},
          top: 7
        },
        r1: {
          dimention: {},
          style: {},
          top: 40
        },
        r2: {
          dimention: {},
          style: {},
          top: 16
        },
        r3: {
          dimention: {},
          style: {},
          top: 35
        }
      }
    };
  },

  methods: {
    handleScroll () {
      this.scrolled = window.scrollY;
      this.scrollMaxY = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)

      this.setRotation()
    },

    setRotation () {
      let topDimention = this.scrolled / (this.scrollMaxY / 60)
      let transformRotate = this.scrolled / 3

      for (let key in this.element) {
        if (this.element.hasOwnProperty(key)) {
          this.element[key]['style'] = {}
          this.element[key]['style']['top'] = `${this.element[key]['top'] + topDimention}%`
          this.element[key]['style']['transform'] = `rotate(${transformRotate}deg) translateZ(500px)`
        }
      }
    },

    randomColor () {
      for (let key in this.element) {
        if (this.element.hasOwnProperty(key)) {
          let randColour = this.colour[Math.floor((Math.random() * 3))]
          let randDimention = this.dimention[Math.floor((Math.random() * 3))]

          this.element[key]['dimention'] = {}
          this.element[key]['dimention'][randColour] = true;
          this.element[key]['dimention'][randDimention] = true;
        }
      }
    }
  },

  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
  },

  created () {
    this.randomColor()
    setInterval(() => {
      this.randomColor()
    }, 2500);
  }
}
</script>

<style lang="stylus" scoped>
.element
  position relative
  z-index -100

  div
    position fixed

  .d1
    top 5%
    left 26%
    width 50px
    height 50px

  .d2
    top 3%
    left 56%
    width 10px
    height 10px

  .d3
    top 33%
    left 86%
    width 20px
    height 20px

  .d4
    top 43%
    left 66%
    width 30px
    height 30px

  .c1
    top 20%
    left 12%
    width 80px
    height 80px

  .c2
    top 50%
    left 31%
    width 45px
    height 45px

  .c3
    top 7%
    left 65%
    width 25px
    height 25px

  .r1
    top 40%
    left 50%
    width 25px
    height 25px

  .r2
    top 16%
    left 76%
    width 80px
    height 80px
    border-width 15px

  .r3
    top 35%
    left 26%
    width 40px
    height 40px

  .r
    background-color #f90047
    border-color #f90047
    box-shadow 0 1px 3px 0 rgba(243, 167, 0, 0.22)

  .b
    background-color #1071F2
    border-color #1071F2
    box-shadow 0 1px 2.5px 0 rgba(0, 103, 255, 0.17)

  .y
    background-color #f3a700
    border-color #f3a700
    box-shadow 0 1px 3px 0 rgba(243, 167, 0, 0.22)

  .ring
    background transparent
    border-width 10px
    border-style solid

  .anim
    transition all 1.2s cubic-bezier(0, 1.2, 0.33, 1.2)

  .circ
    border-radius 50%

  .dia
    transform rotate(45deg) translateZ(50px)
</style>
