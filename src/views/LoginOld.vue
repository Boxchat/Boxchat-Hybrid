<template>
  <div id="app">

    <section>
      <div class="login">
        <!-- <div class="title">登录</div> -->
        <div class="header">
          <img src="https://img.fengz.me/images/2019/06/28/GlDp.jpg">
        </div>
        <div class="input">
          <div class="input-area">
            <input type="text" placeholder="Box号/手机号/邮箱">
          </div>
          <div class="input-area">
            <input type="password" placeholder="密码">
          </div>
        </div>
        <div class="button-group">
          <button>登录</button>
        </div>
        <div class="footer">
          <button>新用户注册</button>
          <button>忘记密码</button>
        </div>
      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
  #app {
    background-image: url('/img/bgi/Login.jpg');
    background-size: 100% 100%;
    width: 100%;
    height: 100vh;
    &::before {
      content: "";
      display: table;
    }
  }


  .login {
    background-color: transparent;
    width: 90vw;
    margin: 0 auto;
    margin-top: 33vh;
    .header {
      width: 25vw;
      margin: 0 auto;
      padding-top: 3vh;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%
      }
    }

    .input {
      margin-top: 2vh;
      .input-area {
        height: 8vh;
        width: 60vw;
        margin: 0 auto;
        text-align: center;
        input {
          height: 100%;
          border: none;
          border-bottom: 1px solid #CBCBCB;
          width: 100%;
          text-align: center;
          background-color: transparent;
          color:white;
          &::-webkit-input-placeholder {
            color: #CBCBCB
          }
          &::-moz-input-placeholder {
            color: #CBCBCB
          }
        }
      }
    }

    .button-group {
      margin-top: 6vh;
      text-align: center;
      button {
        width: 75%;
        height: 8vh;
        background-color: #ae5da1;
        border: none;
        color: white;
        border-radius: 8vh;
        &:active {
          background-color: #9b5490
        }
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      margin-top: 8vh;
      width: 90%;
      button {
        border: none;
        background-color: transparent;
        color: #ae5da1;
        font-weight: bold;
        font-size: 14px;
        &:active {
          color: #9b5490
        }
      }
    }

    // .title {
    //   margin-top: 2vh;
    //   font-size: 22px;
    //   text-align: center;
    // }
    
  }
</style>


<script>
export default {
  created() {
    console.log('Login')
    
  }
}
</script>

