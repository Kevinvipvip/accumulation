<template>
  <div class="home">
    <div class="eight-diagrams">
      <div class="around-img-box">
        <div class="around-img" style="background-image: url('http://static.wcip.net/images/art1.jpg')"><a
          href="http://www.baidu.com"></a></div>
        <div class="around-img" style="background-image: url('http://static.wcip.net/images/art2.jpg')"><a
          href="http://www.baidu.com"></a></div>
        <div class="around-img" style="background-image: url('http://static.wcip.net/images/art3.jpg')"><a
          href="http://www.baidu.com"></a></div>
      </div>
      <div class="around-img-box">
        <div class="around-img" style="background-image: url('http://static.wcip.net/images/art4.jpg')"><a
          href="http://www.baidu.com"></a></div>
        <div class="around-img" style="background-image: url('http://static.wcip.net/images/art5.jpg')"><a
          href="http://www.baidu.com"></a></div>
      </div>
      <div class="around-img-box">
        <div class="around-img" style="background-image: url('http://static.wcip.net/images/art6.jpg')"><a
          href="http://www.baidu.com"></a></div>
        <div class="around-img" style="background-image: url('http://static.wcip.net/images/art7.jpg')"><a
          href="http://www.baidu.com"></a></div>
        <div class="around-img" style="background-image: url('http://static.wcip.net/images/art8.jpg')"><a
          href="http://www.baidu.com"></a></div>
      </div>
      <div class="eight-diagrams-center">
        <div class="center-img" :style="'background-image: url(http://static.wcip.net/images/art'+new_num+'.jpg)'">
          <div class="tai-chi turn-around" @load="turn_around">
            <div class="tai-chi-cont"></div>
            <div class="tai-chi-cont black"></div>
            <div class="tai-chi taiji">
              <div class="taiji-cont white">
                <div class="small-circle black"></div>
              </div>
              <div class="taiji-cont black">
                <div class="small-circle white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    data () {
      return {
        new_num: 1,
        old_num: 0
      }
    },
    created () {
      setInterval(() => {
        this.old_num = this.new_num
        // let num = Math.floor(Math.random() * 10)
        // if (num !== this.old_num) {
        //   this.new_num = num
        // } else {
        //   this.new_num = Math.floor(Math.random() * 10)
        // }
        this.new_num++
        if (this.new_num === 10) {
          this.new_num = 0
        }
        console.log('new:' + this.new_num)
        console.log('old:' + this.old_num)
        console.log('')
      }, 5000)
    },
    methods: {
      turn_around () {

      }
    },
    components: {
      HelloWorld
    }
  }
</script>
<style lang="scss" scoped>
  .home {
    width: 1200px;
    margin: 0 auto;
    background-color: #eee;
    overflow: hidden;

    .eight-diagrams {
      width: 600px;
      margin: 20px auto;
      overflow: hidden;
      position: relative;
      /*border-radius: 50%;*/

      .around-img-box {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .around-img {
          width: 200px;
          height: 200px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;

          a {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }

      .eight-diagrams-center {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;

        .center-img {
          transition: 2s;
          width: 400px;
          height: 400px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;

          /*a {*/
          /*display: block;*/
          /*width: 100%;*/
          /*height: 100%;*/
          /*}*/
          @keyframes changDeg {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .turn-around {
            animation: changDeg 5s linear 3s infinite;
          }

          .tai-chi {
            display: flex;
            flex-flow: column;
            width: 160px;
            height: 160px;
            overflow: hidden;
            border-radius: 50%;
            position: relative;

            .tai-chi-cont {
              background-color: #ffffff;
              height: 50%;
              width: 100%;
            }

            .white {
              background-color: #ffffff;
            }

            .black {
              background-color: #000000;
            }
          }

          .taiji {
            position: absolute;
            top: 40px;
            right: 0;
            left: 0;
            width: 100%;
            height: 50%;
            flex-flow: wrap;
            border-radius: unset;
            justify-content: center;
            align-items: center;
            z-index: 99;

            .taiji-cont {
              width: 80px;
              height: 80px;
              border-radius: 50%;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;

              .small-circle {
                width: 35%;
                height: 35%;
                border-radius: 50%;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
</style>
