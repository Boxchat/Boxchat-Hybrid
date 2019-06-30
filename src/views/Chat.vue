<template>
  <div class="com-chat">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="refresh">
      <chat-list></chat-list>
      <chat-list></chat-list>
      <chat-list></chat-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import ChatList from '@/components/ChatList'
export default {
  data () {
    return {
      isLoading: true
    }
  },
  methods: {
    onRefresh () {},
  }, 
  components: {
    ChatList
  },
}
</script>


<style lang="scss" scoped>
  .refresh {
      height: 100vh;
  }
</style>
