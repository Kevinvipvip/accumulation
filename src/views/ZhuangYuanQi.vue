<template>
  <div class="zhuang-yuan-qi">
    <div class="games-map">
      <div class="map-top">

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
  export default {
    name: 'ZhuanYuanQi',
    data () {
      return {
        num: 0,
        tip: '德',
        list_data: [],
        list_data_one: [],
        list_data_two: []
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
          }
        })
        console.log(this.list_data)
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
            height: 50px;
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
        height: 1000px;
        width: 100%;
        position: relative;

        .item-com {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 1000px;
          height: 230px;
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
            border-bottom: 1px solid #2D0E0B;
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
              height: 30px;
              border-bottom: 1px solid #2D0E0B;
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
