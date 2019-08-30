<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background-color: #142532"></div>
        <div class="swiper-slide" style="background-color: #972145"></div>
        <div class="swiper-slide" style="background-color: #522457"></div>
        <div class="swiper-slide" style="background-color: #245754"></div>
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
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        speed: 2000,
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
    }
  }
</style>
