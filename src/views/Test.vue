<template>
  <div class="test">
    <div class="yao-sai-zi">
      <p>{{tip}}</p>
      <div class="btn-click" @click="adventure">摇色子</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'test',
    data () {
      return {
        num: 0,
        tip: '德'
      }
    },
    created () {
      // console.log(this.$route, 'test的')
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
  .test {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    background-color: #eee;

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
