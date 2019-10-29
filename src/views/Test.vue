<template>
  <div class="test">
    <div class="register">
      <div class="ipt-box">
        <label for="username">用户名</label>
        <div class="input">
          <input type="text" id="username" placeholder="用户名" v-model="username">
        </div>
      </div>
      <div class="ipt-box">
        <label for="pass">密码</label>
        <div class="input">
          <input type="password" id="pass" placeholder="密码" v-model="pass">
        </div>
      </div>
      <div class="ipt-box">
        <label for="email">邮箱</label>
        <div class="input">
          <input type="text" id="email" placeholder="邮箱" v-model="email">
        </div>
      </div>
      <div class="btn-register">注册</div>
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

    .register {
      width: 40%;
      margin: 30px auto;

      .ipt-box {
        width: 50%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        height: 45px;
        line-height: 45px;

        label {
          width: 60px;
          font-size: 18px;
          flex-shrink: 0;
          margin-right: 10px;
          height: 100%;
          text-align-last: justify;
        }

        .input {
          height: 25px;
          flex-grow: 1;
          border: 1px solid #aaa;
          padding: 0 5px;

          input {
            line-height: 25px;
            display: block;
            border: unset;
            outline: unset;
            background: unset;
          }
        }
      }

      .btn-register {
        cursor: pointer;
        width: 50%;
        height: 35px;
        margin: 30px auto;
        background: #ff4c4c;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
      }
    }
  }
</style>
