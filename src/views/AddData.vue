<template>
  <div class="add">
    <div class="ipt-box">
      <div class="ipt-cont">
        <label>官名</label>
        <div class="input">
          <input type="text" v-model="official_name" placeholder="官名">
        </div>
      </div>
      <div class="ipt-cont">
        <label>品级</label>
        <div class="input">
          <input type="text" v-model="grade"/>
        </div>
      </div>
      <div class="ipt-cont">
        <label>投到“功”时升官到</label>
        <div class="input">
          <input type="text" v-model="merit"/>
        </div>
      </div>
      <div class="ipt-cont">
        <label>投到“德”时升官到</label>
        <div class="input">
          <input type="text" v-model="virtue"/>
        </div>
      </div>
      <div class="ipt-cont">
        <label>投到“才”时升官到</label>
        <div class="input">
          <input type="text" v-model="ability"/>
        </div>
      </div>
      <div class="ipt-cont">
        <label>投到“脏”时降级到</label>
        <div class="input">
          <input type="text" v-model="dirty"/>
        </div>
      </div>

      <div class="btn-add" @click="add_data">添加</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddData',
    data () {
      return {
        official_name: '',
        grade: '无',
        merit: '',
        virtue: '',
        ability: '',
        dirty: ''
      }
    },
    created () {

    },
    methods: {
      add_data () {
        if (!this.official_name.trim()) {

        } else if (!this.grade.trim()) {

        }
        console.log(this.official_name, '官名')
        console.log(this.grade, '品级')
        console.log(this.merit, '功')
        console.log(this.virtue, '德')
        console.log(this.ability, '才')
        console.log(this.dirty, '脏')
        // this.Bmob.Query('tableName').set('name', 'Bmob').set('cover', '后端云').save().then(res => {
        //   console.log(res)
        // }).catch(err => {
        //   console.log(err)
        // })
      }
    }
  }
</script>

<style scoped lang="scss">
  .add {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    background-color: #eee;

    .ipt-box {
      width: 50%;
      margin: 30px auto;

      .ipt-cont {
        width: 50%;
        margin: 0 auto 30px;

        label {
          line-height: 40px;
          font-size: 20px;
        }

        .input {
          border: 1px solid #999;
          width: 100%;
          height: 30px;
          line-height: 30px;
          padding: 0 5px;

          input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            background: unset;
            font-size: 20px;
          }
        }
      }

      .btn-add {
        width: 40%;
        margin: 0 auto;
        text-align: center;
        line-height: 40px;
        height: 40px;
        background: #ff4c4c;
        color: #ffffff;
        border-radius: 5px;
        cursor: pointer;

      }
    }
  }
</style>
