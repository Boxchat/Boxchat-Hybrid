<template>
    <div class="com-radio">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="refresh">
            <chat-list></chat-list>
            <chat-list></chat-list>
            <chat-list></chat-list>
            <chat-list></chat-list>
            <chat-list></chat-list>
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
  components: {
    ChatList
  }
}
</script>


<style lang="scss" scoped>
</style>
