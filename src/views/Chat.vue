<template>
  <div class="com-chat">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="refresh">
      <chat-list v-for="(item, index) in msg" :key="index" :msg="msg" :index="index"></chat-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import ChatList from '@/components/ChatList'
export default {
  data () {
    return {
      isLoading: true,
      msg: [
        {
          user:{
            names: '游乐王子',
            icon: 'https://img.fengz.me/images/2019/06/30/Gk4E.th.jpg',
          },
          message:{
            content: '我戴不戴面罩真的雨女无瓜！小朋友就要有小朋友的亚子！',
            time: '23:59',
            number: 5,
          },
          tag: ''
        },
        {
          user:{
            names: '皮卡丘',
            icon: 'https://img.fengz.me/images/2019/06/30/Gjgm.th.jpg',
          },
          message:{
            content: '皮卡！皮卡皮卡皮卡！皮卡丘！',
            time: '23:59',
            number: 74,
          },
          tag: ''
        },
        {
          user:{
            names: '埋桑',
            icon: 'https://img.fengz.me/images/2019/06/28/GlDp.th.jpg',
          },
          message:{
            content: '我实在不敢承认我这帅的一塌糊涂的事实！怎么办？！',
            time: '23:59',
            number: 500,
          },
          tag: ''
        },
      ]
    }
  },
  methods: {
    onRefresh () {
      setTimeout (() => {
        this.isLoading = false
      }, 1000)
    },
  }, 
  components: {
    ChatList
  },
}
</script>


<style lang="scss" scoped>
  .refresh {
    height: 85vh;
  }
</style>
