<template>
  <div class="zhuang-yuan-qi">
    <div class="games-map">
      <div class="map-top">
        <!--中间-->
        <div class="line-one item-com item-center">
          <div class="list-item" v-for="v in list_data_thirteen" :key="v.id">
            <span>{{v.grade}}</span>
            <h3>{{v.official_name}}</h3>
            <div class="img-box"><img :src="v.pic"/></div>
            <p>功{{v.merit}}脏{{v.dirty}}<br>德{{v.virtue}}才{{v.ability}}</p>
          </div>
        </div>
        <!--左边内围-->
        <div class="line-one item-com item-l-n">
          <div class="list-item" v-for="v in list_data_twelve" :key="v.id">
            <span>{{v.grade}}</span>
            <h3>{{v.official_name}}</h3>
            <p>功{{v.merit}}脏{{v.dirty}}<br>德{{v.virtue}}才{{v.ability}}</p>
          </div>
          <div class="title">督察院衙门</div>
        </div>
        <!--下边内围-->
        <div class="line-one item-com item-b-n">
          <div class="list-item" v-for="v in list_data_eleven" :key="v.id">
            <span>{{v.grade}}</span>
            <h3>{{v.official_name}}</h3>
            <p>功{{v.merit}}脏{{v.dirty}}<br>德{{v.virtue}}才{{v.ability}}</p>
          </div>
          <div class="title">六部衙门</div>
        </div>
        <!--右边内围-->
        <div class="line-one item-com item-r-n">
          <div class="list-item" v-for="v in list_data_ten" :key="v.id">
            <span>{{v.grade}}</span>
            <h3>{{v.official_name}}</h3>
            <p>功{{v.merit}}脏{{v.dirty}}<br>德{{v.virtue}}才{{v.ability}}</p>
          </div>
          <div class="title">翰林书院</div>
        </div>
        <!--上边内围-->
        <div class="line-one item-com item-t-n">
          <div class="list-item" v-for="v in list_data_eight" :key="v.id">
            <span>{{v.grade}}</span>
            <h3>{{v.official_name}}</h3>
            <p>功{{v.merit}}脏{{v.dirty}}<br>德{{v.virtue}}才{{v.ability}}</p>
          </div>
          <div class="title">京府衙门</div>
          <div class="list-item" v-for="v in list_data_nine" :key="v.id">
            <span>{{v.grade}}</span>
            <h3>{{v.official_name}}</h3>
            <p>功{{v.merit}}脏{{v.dirty}}<br>德{{v.virtue}}才{{v.ability}}</p>
          </div>
          <div class="title">九卿衙门</div>
        </div>
        <!--左边最外围-->
        <div class="line-one item-com item-l-w">
          <div class="list-item" v-for="v in list_data_six" :key="v.id">
            <span>{{v.grade}}</span>
            <h3>{{v.official_name}}</h3>
            <p>功{{v.merit}}脏{{v.dirty}}<br>德{{v.virtue}}才{{v.ability}}</p>
          </div>
          <div class="title">布政司衙门</div>
          <div class="list-item" v-for="v in list_data_seven" :key="v.id">
            <span>{{v.grade}}</span>
            <h3>{{v.official_name}}</h3>
            <p>功{{v.merit}}脏{{v.dirty}}<br>德{{v.virtue}}才{{v.ability}}</p>
          </div>
          <div class="title">京县衙门</div>
        </div>
        <!--上边最外围-->
        <div class="line-one item-com item-t-w">
          <div class="list-item" v-for="v in list_data_three" :key="v.id">
            <span>{{v.grade}}</span>
            <h3>{{v.official_name}}</h3>
            <p>功{{v.merit}}脏{{v.dirty}}<br>德{{v.virtue}}才{{v.ability}}</p>
          </div>
          <div class="title">外县衙门</div>
          <div class="list-item" v-for="v in list_data_four" :key="v.id">
            <span>{{v.grade}}</span>
            <h3>{{v.official_name}}</h3>
            <p>功{{v.merit}}脏{{v.dirty}}<br>德{{v.virtue}}才{{v.ability}}</p>
          </div>
          <div class="title">按察司衙门</div>
          <div class="list-item" v-for="v in list_data_five" :key="v.id">
            <span>{{v.grade}}</span>
            <h3>{{v.official_name}}</h3>
            <p>功{{v.merit}}脏{{v.dirty}}<br>德{{v.virtue}}才{{v.ability}}</p>
          </div>
          <div class="title">外省衙门</div>
          <div class="line-tip">俱送礼二份升入内<br>从尚书升入太师者</div>
        </div>
        <!--右边最外围-->
        <div class="line-one item-com">
          <div class="list-item" v-for="v in list_data_one" :key="v.id">
            <span>{{v.grade}}</span>
            <h3>{{v.official_name}}</h3>
            <p>功{{v.merit}}脏{{v.dirty}}<br>德{{v.virtue}}才{{v.ability}}</p>
          </div>
          <div class="title">外州衙门</div>
          <div class="list-item" v-for="v in list_data_two" :key="v.id">
            <span>{{v.grade}}</span>
            <h3>{{v.official_name}}</h3>
            <p>功{{v.merit}}脏{{v.dirty}}<br>德{{v.virtue}}才{{v.ability}}</p>
          </div>
          <div class="title">外府衙门</div>
          <div class="line-tip">礼后与先送礼俱<br>同衙门小与大送</div>
        </div>
      </div>
      <div class="line-one">
        <div class="line-tip">功为白丁脏不上名<br>德为案首才为童生</div>
        <div class="list-item" v-for="v in list_data" :key="v.id">
          <h3>{{v.official_name}}</h3>
          <p>功{{v.merit}}脏{{v.dirty}}<br>德{{v.virtue}}才{{v.ability}}</p>
        </div>
        <div class="line-tip">得仲状元者出任或<br>出任者俱送礼两份</div>
      </div>
    </div>
    <div class="yao-sai-zi">
      <p>{{tip}}</p>
      <div class="btn-click" @click="adventure">摇色子</div>
    </div>
  </div>
</template>
<script>
  import taishi from '../assets/taishi.png'
  import taifu from '../assets/taifu.png'
  import taibao from '../assets/taibao.png'

  export default {
    name: 'ZhuanYuanQi',
    data () {
      return {
        num: 0,
        tip: '德',
        list_data: [],
        list_data_one: [],
        list_data_two: [],
        list_data_three: [],
        list_data_four: [],
        list_data_five: [],
        list_data_six: [],
        list_data_seven: [],
        list_data_eight: [],
        list_data_nine: [],
        list_data_ten: [],
        list_data_eleven: [],
        list_data_twelve: [],
        list_data_thirteen: []
      }
    },
    created () {
      // console.log(this.$route, 'test的')
      this.Bmob.Query('zhuang_yuan_qi').find().then(res => {
        res.filter((item, index, arr) => {
          if (item.id > 0 && item.id <= 15) {
            // console.log(item)
            this.list_data.push(item)
          } else if (item.id > 15 && item.id <= 20) {
            this.list_data_one.push(item)
          } else if (item.id > 20 && item.id <= 27) {
            this.list_data_two.push(item)
          } else if (item.id > 27 && item.id <= 32) {
            this.list_data_three.push(item)
          } else if (item.id > 32 && item.id <= 36) {
            this.list_data_four.push(item)
          } else if (item.id > 36 && item.id <= 39) {
            this.list_data_five.push(item)
          } else if (item.id > 39 && item.id <= 45) {
            this.list_data_six.push(item)
          } else if (item.id > 45 && item.id <= 49) {
            this.list_data_seven.push(item)
          } else if (item.id > 49 && item.id <= 54) {
            this.list_data_eight.push(item)
          } else if (item.id > 54 && item.id <= 59) {
            this.list_data_nine.push(item)
          } else if (item.id > 59 && item.id <= 66) {
            this.list_data_ten.push(item)
          } else if (item.id > 66 && item.id <= 73) {
            this.list_data_eleven.push(item)
          } else if (item.id > 73 && item.id <= 76) {
            this.list_data_twelve.push(item)
          } else if (item.id > 76 && item.id <= 79) {
            switch (item.id) {
              case 77:
                item.pic = taibao
                break
              case 78:
                item.pic = taishi
                break
              case 79:
                item.pic = taifu
                break
            }
            this.list_data_thirteen.push(item)
          }
        })
      })
    },
    methods: {
      adventure () {
        let inter = setInterval(() => {
          let arr = ['德', '才', '功', '脏']
          let i = Math.floor(Math.random() * 4)
          this.tip = arr[i]
        }, 10)
        setTimeout(() => {
          clearInterval(inter)
          this.num = Math.floor(Math.random() * 4)
          // console.log(this.num)
          switch (this.num) {
            case 0:
              this.tip = '德'
              break
            case 1:
              this.tip = '才'
              break
            case 2:
              this.tip = '功'
              break
            case 3:
              this.tip = '脏'
              break
            default:
              this.tip = ''
              break
          }
        }, 1000)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .zhuang-yuan-qi {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    background-color: #eee;

    .games-map {
      margin-top: 30px;
      width: 1200px;
      height: 1200px;
      border: 1px solid #2D0E0B;
      box-sizing: border-box;

      .line-one {
        height: 200px;
        display: flex;
        justify-content: flex-end;
        border: 1px solid #2D0E0B;
        box-sizing: border-box;

        .line-tip, .list-item {
          width: 5.88%;
          border: 1px solid #2D0E0B;
          box-sizing: border-box;
          writing-mode: vertical-lr;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 22px;
        }

        .list-item {
          writing-mode: unset;
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          align-items: center;

          h3 {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #2D0E0B;
            height: 45px;
            /*line-height: 50px;*/
            font-size: 28px;
            flex-shrink: 0;
          }

          p {
            width: 100%;
            margin-top: 5px;
            flex-grow: 1;
            border-top: 1px solid #2D0E0B;
            writing-mode: vertical-lr;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            letter-spacing: 2px;
          }
        }
      }

      .map-top {
        height: calc(100% - 200px);
        width: 100%;
        position: relative;

        .item-com {
          position: absolute;
          bottom: 0;
          right: 0;
          width: calc(100% - 200px);
          height: 220px;
          justify-content: flex-start;
          transform: rotate(-90deg) translateX(100%);
          transform-origin: 100% 100%;

          .title {
            writing-mode: vertical-lr;
            font-size: 30px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 6.6666%;
            border: 1px solid #2D0E0B;
            box-sizing: border-box;
          }

          .list-item, .line-tip {
            width: 6.6666%;

            span {
              font-size: 16px;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 25px;
              border-bottom: 1px solid #2D0E0B;
            }
          }
        }

        .item-t-w {
          width: calc(100% - 220px);
          bottom: unset;
          right: unset;
          left: 0;
          top: 0;
          transform: rotate(180deg);
          transform-origin: unset;

          .list-item, .line-tip, .title {
            width: 6.25%;
          }
        }

        .item-l-w {
          width: calc(100% - 200px - 220px);
          bottom: unset;
          right: unset;
          left: 0;
          top: 220px;
          transform: rotate(90deg) translateY(-100%);
          transform-origin: left top;

          .list-item, .line-tip, .title {
            width: 8.3333%;
          }
        }

        .item-t-n {
          width: calc(100% - 220px - 220px);
          bottom: unset;
          right: unset;
          left: 220px;
          top: 220px;
          transform: rotate(180deg);
          transform-origin: unset;

          .list-item, .line-tip, .title {
            width: 8.3333%;
          }
        }

        .item-r-n {
          width: calc(100% - 220px - 220px - 200px);
          bottom: 0;
          right: 220px;

          .list-item, .line-tip, .title {
            width: 12.5%;
          }
        }

        .item-b-n {
          width: calc(100% - 220px - 220px - 220px);
          bottom: 0;
          right: unset;
          left: 220px;
          transform-origin: unset;
          transform: rotate(0);

          .list-item, .line-tip, .title {
            width: 12.5%;
          }
        }

        .item-l-n {
          width: calc(100% - 220px - 220px - 220px - 200px);
          bottom: unset;
          right: unset;
          left: 220px;
          top: 440px;
          transform: rotate(90deg) translateY(-100%);
          transform-origin: left top;

          .list-item, .line-tip, .title {
            width: 25%;
          }
        }

        .item-center {
          width: calc(100% - 220px - 220px - 220px - 220px);
          height: calc(100% - 220px - 220px - 220px);
          bottom: 220px;
          right: unset;
          left: 440px;
          top: 440px;
          transform: rotate(0);
          transform-origin: unset;

          .list-item, .line-tip, .title {
            width: 33.3333%;

            .img-box {
              width: 100%;
              margin-top: 5px;
              height: 115px;
              border-top: 1px solid #2D0E0B;
              border-bottom: 1px solid #2D0E0B;

              img {
                width: 100%;
                height: 100%;
                display: block;
              }
            }
          }
        }
      }
    }

    .yao-sai-zi {
      background-color: #fff;
      width: 80px;
      padding: 20px;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      margin: 20px auto;

      p {
        font-size: 30px;
        border: 1px solid #eee;
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-bottom: 10px;
      }

      .btn-click {
        cursor: pointer;
        font-size: 12px;
        padding: 2px 10px;
        border-radius: 5px;
        color: #333;
        background-color: #efefef;
      }
    }
  }
</style>
