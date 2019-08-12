<template>
  <div class="header">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      msg: String
    }
  }
</script>

<style scoped lang="scss">
  .header {
    height: 60px;
    overflow: hidden;

    h3 {
      text-align: center;
      line-height: 60px;
      color: #333;
      font-size: 24px;
    }
  }
</style>
