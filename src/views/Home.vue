<template>
  <div class="home-container">
    <box-navbar></box-navbar>
    <box-tabbar></box-tabbar>
    <box-left-menu></box-left-menu>

    <!-- 主功能部分 -->
    <router-view class="main"></router-view>

  </div>
</template>

<style lang="scss" scoped>
  .main {
    margin-top: 46px;
  }
</style>


<script>
import BoxTabbar from "@/components/TabbarHome";
import BoxNavbar from "@/components/Navbar";
import BoxLeftMenu from "@/components/LeftMenu";
export default {
  components: {
    BoxTabbar,
    BoxNavbar,
    BoxLeftMenu
  },
  created () {
    // if (this.$store.state.isLogin) {
    //   location.replace (`http://${location.host}/#/chat`);
    // } else {
    //   location.replace (`http://${location.host}/#/login`);      
    // }
  }
}
</script>
