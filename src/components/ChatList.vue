<template>
  <div id="chat-list">
    <div class="header">
      <img src="https://img.fengz.me/images/2019/06/28/GlDp.jpg" class="header-img">
    </div>
    <div class="msg">
      <div class="base">
        <div class="username">Mathon</div>
        <div class="content">我戴不戴面罩真的雨女无瓜！小朋友就要有小朋友的亚子！</div>
      </div>
      <div class="more">
        <div class="time">23:59</div>
        <div class="number"><van-tag round type="danger">99+</van-tag></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #chat-list {
    // height: 50px;
    height: 17.5vw;
    display: flex;
    padding-left: 3vw;
    padding-right: 3vw;
    // background-color: blue;
  }

  .header {
    display: flex;
    flex-direction: column;
    height: 100%;
    // background-color: green;
    justify-content:center;
  }

  .header-img {
    height: 14vw;
    width: 14vw;
    // 防止 header 因为 flex 发生变形
    flex-shrink: 0;
    border-radius: 50%;
  }

  .msg {
    margin-left: 3vw;
    // height: 60px;
    // width: 100%;
    // background-color: blue;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(218, 218, 218);
  }

  .base {
    width: 60vw;
  }

  .more{
    width: 15vw;
    text-align: right;
  }

  .username {
    font-weight: bold;
    margin-bottom: 3px;
  }
  
  .content {
    // width: 50%;
    color: rgb(160, 159, 159);
    // background-color: gold;
    font-size: 13px;
    // padding-left: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .time {
    color: gray;
    font-size: 13px;
    margin-bottom: 5px;

  }

  .number {
    color: gray;
    font-size: 13px;
  }

  // .msg-line1, .msg-line2 {
  //   display: flex;
  // }

  // .username {
  //   // margin-top: 5px;
  //   width: 90%;
  //   background-color: red;
  // }

  // .time {
  //   // margin-right: 
  //   width: 10%;
  //   background-color: green;    
  // }
</style>

