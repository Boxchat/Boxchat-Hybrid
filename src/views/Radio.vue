<template>
  <div class="com-radio">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="refresh">
      <chat-list tag="radio"></chat-list>
      <chat-list tag="radio"></chat-list>
      <chat-list tag="radio"></chat-list>
      <chat-list tag="radio"></chat-list>
      <chat-list tag="radio"></chat-list>
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
      isLoading: true
    }
  },
  methods: {
    onRefresh () {},
  },
  components: {
    ChatList
  }
}
</script>


<style lang="scss" scoped>
</style>
