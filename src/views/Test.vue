<template>
  <div class="test">
    <div class="video">
      <!--<iframe class="iframe" src="http://player.bilibili.com/player.html?aid=33464690&cid=58583998&page=1"-->
      <!--scrolling="no"-->
      <!--border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    mounted () {
      this.Bmob.functions('getCountDown').then(result => {
        console.log(result)
      }).catch(error => {
        console.log(error)
      })
    }
  }
</script>

<style scoped lang="scss">
  .test {
    width: 1200px;
    margin: 0 auto;

    .video {
      width: 100%;
      height: 800px;

      .iframe {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
