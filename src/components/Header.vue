<template>
  <div class="header">
    <div class="logo">
      logo
    </div>
    <ul>
      <li v-for="(v,index) in nav" :key="index" @click="choiceNav(index)" :class="show==index?'on':''">
        <router-link :to="{path:v.url,query:{index:index}}">{{v.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    // props: {
    //   show: Array
    // },
    data () {
      return {
        nav: [],
        show: -1
      }
    },
    watch: {
      $route (from, next) {
        // console.log(from, next, 'kkk')
        this.show = from.query.index || 0
      }
    },
    mounted () {
      this.nav = this.config.nav
    },
    methods: {
      choiceNav (index) {
        this.show = index
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    height: 60px;
    overflow: hidden;
    background-color: #ff4c4c;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .logo {
      cursor: pointer;
      flex-shrink: 0;
      width: 100px;
      height: 100%;
      background-color: #666666;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 20px;
      color: #fff;
    }

    ul {
      flex-grow: 1;
      margin-left: 40px;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: flex-start;
      overflow: hidden;

      li {
        height: 100%;
        overflow: hidden;
        flex-shrink: 0;

        a {
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0 10px;
          color: #fff;
          font-size: 20px;
        }

        a:hover {
          background-color: #808000;
        }
      }

      .on {
        background-color: #808000;
      }
    }
  }
</style>
