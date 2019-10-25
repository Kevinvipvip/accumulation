<template>
  <div class="add">
    <div class="list">
      <ul>
        <li v-for="(v,index) in list_data" :key="index">
          <p>{{v.id}}&nbsp;&nbsp;{{v.official_name}}&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff4c4c;">{{v.grade}}</span><br>&nbsp;&nbsp;&nbsp;&nbsp;功{{v.merit}}&nbsp;德{{v.virtue}}&nbsp;才{{v.ability}}&nbsp;脏{{v.dirty}}
          </p>
        </li>
      </ul>
    </div>
    <div class="ipt-box">
      <div class="ipt-cont">
        <label>官名</label>
        <div class="input">
          <input type="text" v-model="official_name" placeholder="官名" @blur="verify_input()"/>
        </div>
        <p>{{tip1}}</p>
      </div>
      <div class="ipt-cont">
        <label>品级</label>
        <div class="input">
          <input type="text" v-model="grade" @blur="verify_input()"/>
        </div>
        <p>{{tip2}}</p>
      </div>
      <div class="ipt-cont">
        <label>投到“功”时升官到</label>
        <div class="input">
          <input type="text" v-model="merit" @blur="verify_input()"/>
        </div>
        <p>{{tip3}}</p>
      </div>
      <div class="ipt-cont">
        <label>投到“德”时升官到</label>
        <div class="input">
          <input type="text" v-model="virtue" @blur="verify_input()"/>
        </div>
        <p>{{tip4}}</p>
      </div>
      <div class="ipt-cont">
        <label>投到“才”时升官到</label>
        <div class="input">
          <input type="text" v-model="ability" @blur="verify_input()"/>
        </div>
        <p>{{tip5}}</p>
      </div>
      <div class="ipt-cont">
        <label>投到“脏”时降级到</label>
        <div class="input">
          <input type="text" v-model="dirty" @blur="verify_input()"/>
        </div>
        <p>{{tip6}}</p>
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
        list_data: [],

        official_name: '',
        grade: '',
        merit: '',
        virtue: '',
        ability: '',
        dirty: '',

        tip1: '',
        tip2: '',
        tip3: '',
        tip4: '',
        tip5: '',
        tip6: '',

        verify_num: 0
      }
    },
    created () {
      this.getListData()
    },
    methods: {
      verify_input (complete) {
        this.verify_num = 0
        if (!this.official_name.trim()) {
          this.tip1 = '请先输入你需要添加的官名'
        } else {
          this.tip1 = ''
          this.verify_num++
          if (this.verify_num === 5) {
            // this.add_data_to_Bmob()
            if (complete) {
              complete()
            }
          }
        }
        if (!this.grade.trim()) {
          this.tip2 = '此项不填则默认为无品级'
        } else {
          this.tip2 = ''
          // this.verify_num++
          if (this.verify_num === 5) {
            // this.add_data_to_Bmob()
            if (complete) {
              complete()
            }
          }
        }
        if (!this.merit.trim()) {
          this.tip3 = '请添加投掷到“功”时将升级到的官名'
        } else {
          this.tip3 = ''
          this.verify_num++
          if (this.verify_num === 5) {
            // this.add_data_to_Bmob()
            if (complete) {
              complete()
            }
          }
        }
        if (!this.virtue.trim()) {
          this.tip4 = '请添加投掷到“德”时将升级到的官名'
        } else {
          this.tip4 = ''
          this.verify_num++
          if (this.verify_num === 5) {
            // this.add_data_to_Bmob()
            if (complete) {
              complete()
            }
          }
        }
        if (!this.ability.trim()) {
          this.tip5 = '请添加投掷到“才”时将升级到的官名'
        } else {
          this.tip5 = ''
          this.verify_num++
          if (this.verify_num === 5) {
            // this.add_data_to_Bmob()
            if (complete) {
              complete()
            }
          }
        }
        if (!this.dirty.trim()) {
          this.tip6 = '请添加投掷到“脏”时将降级到的官名'
        } else {
          this.tip6 = ''
          this.verify_num++
          if (this.verify_num === 5) {
            // this.add_data_to_Bmob()
            if (complete) {
              complete()
            }
          }
        }
      },
      add_data_to_Bmob () {
        // console.log(this.tip, '数组')
        console.log(this.official_name, '官名')
        console.log(this.grade === '' ? '无品级' : this.grade, '品级')
        console.log(this.merit, '功')
        console.log(this.virtue, '德')
        console.log(this.ability, '才')
        console.log(this.dirty, '脏')
      },
      add_data () {
        this.verify_input(() => {
          // this.add_data_to_Bmob()
          let obj = this.Bmob.Query('zhuang_yuan_qi')
          obj.set('official_name', this.official_name)
          obj.set('grade', this.grade === '' ? '无品级' : this.grade)
          obj.set('merit', this.merit)
          obj.set('virtue', this.virtue)
          obj.set('ability', this.ability)
          obj.set('dirty', this.dirty)
          obj.save().then(res => {
            this.getListData()
          }).catch(err => {
            console.log(err)
          })
        })
      },
      getListData () {
        this.Bmob.Query('zhuang_yuan_qi').find().then(res => {
          this.list_data = res
        })
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
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .list {
      width: 50%;
      margin: 30px 0;

      ul {
        width: 60%;
        margin: 0 auto;

        li {
          margin-bottom: 20px;

          p {
            font-size: 20px;
            line-height: 30px;
          }
        }
      }
    }

    .ipt-box {
      width: 50%;
      margin: 30px 0;

      .ipt-cont {
        width: 50%;
        margin: 0 auto;

        label {
          line-height: 40px;
          font-size: 20px;
        }

        .input {
          border: 1px solid #999;
          /*width: 100%;*/
          height: 30px;
          line-height: 30px;
          padding: 0 5px;
          box-sizing: border-box;

          input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            background: unset;
            font-size: 16px;
            display: block;
          }
        }

        p {
          height: 30px;
          line-height: 30px;
          font-size: 12px;
          color: #ff4c4c;
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
