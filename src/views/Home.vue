<template>
  <div class="home">
    <div class="eight-diagrams">
      <div class="around-img-box">
        <div class="around-img" :style="'background-image: url('+img[0]+')'"><a
          href="http://www.baidu.com"></a></div>
        <div class="around-img" :style="'background-image: url('+img[1]+')'"><a
          href="http://www.baidu.com"></a></div>
        <div class="around-img" :style="'background-image: url('+img[2]+')'"><a
          href="http://www.baidu.com"></a></div>
      </div>
      <div class="around-img-box">
        <div class="around-img" :style="'background-image: url('+img[3]+')'"><a
          href="http://www.baidu.com"></a></div>
        <div class="around-img" :style="'background-image: url('+img[4]+')'"><a
          href="http://www.baidu.com"></a></div>
      </div>
      <div class="around-img-box">
        <div class="around-img" :style="'background-image: url('+img[5]+')'"><a
          href="http://www.baidu.com"></a></div>
        <div class="around-img" :style="'background-image: url('+img[6]+')'"><a
          href="http://www.baidu.com"></a></div>
        <div class="around-img" :style="'background-image: url('+img[7]+')'"><a
          href="http://www.baidu.com"></a></div>
      </div>
      <div class="eight-diagrams-center">
        <div class="center-img" :style="'background-image: url('+img[new_num]+')'">
          <div class="tai-chi turn-around">
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
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        img: [
          'http://static.wcip.net/images/art1.jpg',
          'http://static.wcip.net/images/art2.jpg',
          'http://static.wcip.net/images/art3.jpg',
          'http://static.wcip.net/images/art4.jpg',
          'http://static.wcip.net/images/art5.jpg',
          'http://static.wcip.net/images/art6.jpg',
          'http://static.wcip.net/images/art7.jpg',
          'http://static.wcip.net/images/art8.jpg',
          'http://static.wcip.net/images/art9.jpg'
        ],
        new_num: 0,
        old_num: 0
      }
    },
    created () {
      let date = this.utils.formatTime(new Date())
      console.log(date)
      setInterval(() => {
        this.old_num = this.new_num
        // let num = Math.floor(Math.random() * 10)
        // if (num !== this.old_num) {
        //   this.new_num = num
        // } else {
        //   this.new_num = Math.floor(Math.random() * 10)
        // }
        this.new_num++
        if (this.new_num === this.img.length) {
          this.new_num = 0
        }
        // console.log('new:' + this.new_num)
        // console.log('old:' + this.old_num)
        // console.log('')
      }, 10000)
    }
    // methods: {
    //   turn_around () {
    //
    //   }
    // },
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

      @keyframes img_turn_around {
        0% {
          transform: rotate(-5deg);
        }
        100% {
          transform: rotate(5deg);
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
        margin: auto;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        overflow: hidden;
        animation: img_turn_around 15s infinite;
        animation-direction: alternate;

        .center-img {
          transition: 5s;
          width: 400px;
          height: 400px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
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
            animation: changDeg 5s linear 1s infinite;
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
