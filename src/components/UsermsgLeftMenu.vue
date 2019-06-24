<template>
  <div class="usermsg">
    <div class="user-header">
      <div class="user-header-img"></div>
    </div>
    <div class="user-content">
      <div class="user-content-name">Mathon</div>
      <div class="user-content-phone">+86 150-1234-1234</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .usermsg {
    width: 100%;
    height: 25vh;
    background-color: #ae5da1;
    padding-left: 5%;
    box-sizing: border-box;
    &::before {
      content: "";
      display: table;
    }
  }
  .user-header {
    margin-top: 4vh;
    height: 40%;
    // background-color: red;
    .user-header-img {
      background-color: yellow;
      border-radius: 50%;
      height: 25vh * 0.4;
      width: 25vh * 0.4;
    }
  }

  .user-content {
    margin-top: 2vh;
    .user-content-name{
      color: white;
    }
    .user-content-phone {
      margin-top: 0.5vh;
      color: #f086e0;
      font-size: 14px;
    }
  }
</style>



<script>
export default {
  
}
</script>

