<template>
  <div id="app" :style="appStyle">
    <!-- <div class="header">
      <img src="https://img.fengz.me/images/2019/06/28/GlDp.jpg">
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
  #app {
    width: 100%;
    background-image: url('/img/bgi/Login.jpg');
    background-size: 100% 100%;
  }
</style>

<script>
export default {
  computed: {
    appStyle() {
      return {
       height: `${window.screen.height}px`
      }
    }
  }
}
</script>
