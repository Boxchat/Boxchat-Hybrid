<template>
    <van-nav-bar
      title="Boxchat"
      left-text="menuLogo"
      class="navbar"
      fixed 
      @click-left="onClickLeft"
    >
    </van-nav-bar>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$store.commit('change_leftMenu');
    }
  }
}
</script>


<style lang="scss" scoped>
  .navbar {
    background-color: #ae5da1;
    .van-nav-bar__title {
      color: white;
    }
  }
  .van-nav-bar__text, .van-nav-bar__text {
    color: white;
  }
</style>

