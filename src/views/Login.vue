<template>
  <div id="app">
    <div class="header">
      <img src="https://img.fengz.me/images/2019/06/28/GlDp.jpg">
    </div>
    <div class="input">
      <div class="input-area">
        <input type="text" placeholder="Box号/手机号/邮箱">
      </div>
      <div class="input-area password">
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
</template>

<style lang="scss" scoped>
  #app {
    background-image: url('/img/bgi/Login.jpg');
    background-size: 100% 100%;
    width: 100%;
    height: 40rem;
    display: flex;
    flex-direction: column;
  }

  .header {
    margin: 0 auto;
    margin-top: 14.5rem;
    width: 5.5rem;
    img {
      width: 100%;
      border-radius: 50%
    }
  }

  .input {
    margin: 0 auto;
    width: 60%;
    .input-area {
      margin-top: 1rem;
      height: 2.5rem;
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
    margin-top: 2.5rem;
    text-align: center;
    button {
      width: 75%;
      height: 3rem;
      background-color: #ae5da1;
      border: none;
      color: white;
      border-radius: 3rem;
      &:active {
        background-color: #9b5490
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 4rem;
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
</style>

<script>
export default {
  created() {
    document.getElementsByTagName('div')[0].style.height = `${window.screen.height}px`
  }
}
</script>
