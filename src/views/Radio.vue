<template>
  <div class="com-radio">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="refresh">
      <chat-list v-for="(item, index) in msg" :key="index" :msg="msg" :index="index"></chat-list>
    </van-pull-refresh>
  </div>
</template>

<style lang="scss" scoped>
  .refresh {
    height: 100vh;
  }
</style>


<script>
import ChatList from '@/components/ChatList'
export default {
  data () {
    return {
      isLoading: true,
      msg: [
        {
          user:{
            names: '优酸乳官方频道',
            icon: 'https://img.fengz.me/images/2019/06/30/Gm6D.th.jpg',
          },
          message:{
            content: '据调查发现，优酸乳根本不是酸酸乳，仅此而已！',
            time: '23:59',
            number: 5,
          },
          tag: ''
        },
        {
          user:{
            names: '每日音乐推送',
            icon: 'https://img.fengz.me/images/2019/06/30/GgRk.th.jpg',
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
            names: '经济分析频道',
            icon: 'https://img.fengz.me/images/2019/06/30/GFD4.th.jpg',
          },
          message:{
            content: '尽管欧元区经济形势不断恶化，制造业进入收缩状态，通胀持续低于目标，但欧元仍表现出了韧性。',
            time: '23:59',
            number: 500,
          },
          tag: ''
        },
        {
          user:{
            names: '二次元信息频道',
            icon: 'https://img.fengz.me/images/2019/06/30/Gr8M.th.jpg',
          },
          message:{
            content: '最近网上有句话火了，波妞喜欢宗介，宗介喜欢赚差价。',
            time: '23:59',
            number: 500,
          },
          tag: ''
        },
        {
          user:{
            names: '黑匣子官方频道',
            icon: 'https://img.fengz.me/images/2019/06/30/G0H5.th.png',
          },
          message:{
            content: '欢迎使用黑匣子，我们将努力逐步将软件开发更尽人意，敬请期待！',
            time: '23:59',
            number: 1,
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
  }
}
</script>


<style lang="scss" scoped>
  .refresh {
    height: 85vh;
  }
</style>
