<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
        <div class="swiper-slide">Slide 10</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'

  export default {
    name: 'Swiper',
    data () {
      return {
        swiper: null
      }
    },
    mounted () {
      this.swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        on: {
          tap () {
            console.log(1111)
          }
        }
      })
    }
  }
</script>

<style scoped lang="scss">
  .swiper {
    .swiper-container {
      height: 500px;
      width: 1000px;
      margin: 30px auto;
      background-color: #ff4c4c;
    }
  }
</style>
