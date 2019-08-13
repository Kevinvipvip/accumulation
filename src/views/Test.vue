<template>
  <div class="test">
    <p>{{tip}}</p>
    <button @click="adventure">碰运气</button>
  </div>
</template>
<script>
  export default {
    name: 'test',
    data () {
      return {
        num: 0,
        tip: ''
      }
    },
    created () {
      // console.log(this.$route, 'test的')
    },
    methods: {
      adventure () {
        this.num = Math.floor(Math.random() * 4)
        console.log(this.num)
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
      }
    }
  }
</script>
<style lang="scss" scoped>
  .test {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
</style>
