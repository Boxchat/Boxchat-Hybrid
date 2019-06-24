<template>
  <div class="home-container">
    <box-navbar></box-navbar>
    <box-tabbar></box-tabbar>
    <box-left-menu></box-left-menu>
  </div>
</template>

<style lang="scss" scoped>
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
  }
}
</script>
