<template>
  <div class="countdown">
    <p v-for="(v,index) in countdown" :key="index">距离{{v.title}}还有：
      <span v-if="v.stop_date">{{v.stop_date}}</span>
      <span v-else>{{v.date[0]}} 天 {{v.date[1]}} 小时 {{v.date[2]}} 分钟 {{v.date[3]}} 秒</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'CountDown',
    data () {
      return {
        countdown: [],
        count_down: 0
      }
    },
    mounted () {
      this.Bmob.Query('count_down').find().then(res => {
        // this.utils.up_data('count_down', res)
        console.log(res)
        this.count_down = setInterval(() => {
          for (let i = 0; i < res.length; i++) {
            let date = new Date().getTime()
            let now_timestamp = date.toString()[12] ? date : date * 1000
            let end_timestamp = res[i].timestamp.toString()[12] ? res[i].timestamp : res[i].timestamp * 1000
            if (end_timestamp - now_timestamp <= 0) {
              // clearInterval(this.count_down)
              res[i].stop_date = '此倒计时已结束'
            } else {
              let totalSeconds = parseInt((end_timestamp - now_timestamp) / 1000)
              // 剩余天数
              let days = Math.floor(totalSeconds / (60 * 60 * 24))
              // 剩余秒数
              let modulo = totalSeconds % (60 * 60 * 24)
              // 小时数
              let hours = Math.floor(modulo / (60 * 60))
              // 剩余秒数
              modulo = modulo % (60 * 60)
              // 分钟数
              let minutes = Math.floor(modulo / 60)
              // 秒数
              let seconds = modulo % 60
              res[i].date = [days, hours, minutes, seconds].map(this.utils.formatNumber)
            }
          }
          this.countdown = res
        }, 1000)
      })
    }
  }
</script>

<style scoped lang="scss">
  .countdown {
    width: 1200px;
    margin: 0 auto;
  }
</style>
