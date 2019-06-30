<template>
  <div id="chat-list">
    <van-swipe-cell :right-width="80" class="swipe-cell">
        <van-button
          square
          slot="right"
          type="danger"
          text="删除"
          class="button--del"
        />
        <div class="main">
          <div class="header">
            <img :src="this.msg[this.index].user.icon" class="header-img">
            <van-tag
              class="tag"
              round
              type="success"
              v-if="this.tag == 'radio'"
            >
              Radio
            </van-tag>
          </div>
          <div class="msg">
            <div class="base">
              <div class="username">{{this.msg[this.index].user.names}}</div>
              <div class="content">{{this.msg[this.index].message.content}}</div>
            </div>
            <div class="more">
              <div class="time">{{this.msg[this.index].message.time}}</div>

              <div class="number">
                <van-tag round type="danger" v-if="this.msg[this.index].message.number <= 99">{{this.msg[this.index].message.number}}</van-tag>
                <van-tag round type="danger" v-else>99+</van-tag>
              </div>
            </div>
        </div>
      </div>
    </van-swipe-cell>
  </div>
</template>

<script>
export default {
  props: ['tag', 'msg', 'index'],
  created () {
    console.log(this.msg[this.index].user.names)
  }
}
</script>


<style lang="scss" scoped>
  #chat-list {
    // height: 50px;
    // background-color: blue;
    display: flex;
  }

  .swipe-cell {
    display: flex;
    width: 100vw;
    height: 17.5vw;
    padding-left: 3vw;
    // padding-right: 3vw;
  }

  .tag {
    width: 27px;
    margin-top: -2.5vh;
    margin-left: 2vw;
  }

  .main {
    // width: 100vw;
    margin-left: 1.6vw;
    display: flex;
  }

  .header {
    display: flex;
    flex-direction: column;
    height: 17.5vw;
    width: 17.5vw;
    // background-color: green;
    justify-content:center;
  }

  .header-img {
    height: 14vw;
    width: 14vw;
    // 防止 header 因为 flex 发生变形
    flex-shrink: 0;
    border-radius: 50%;
    border: solid 1px rgb(209, 209, 209);
  }

  .msg {
    // margin-left: 3vw;
    // height: 60px;
    // width: 100%;
    // background-color: blue;
    display: flex;
    align-items: center;
    // border-bottom: 1px solid rgb(218, 218, 218);
  }

  .base {
    width: 60vw;
  }

  .more{
    width: 15vw;
    text-align: right;
    padding-right: 3vw;
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

  .button--del {
    height: 100%;
    width: 20vw;
    right: -2.1vw;
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

<style lang="scss">
  .van-pull-refresh__track {
    height: 85vh;
  }
</style>

