<template>
  <van-popup
    v-model="show"
    position="left"
    :style="{
      height: '100%',
      width: '80%'
    }"
    @closed="onClosedLeft"
  >
    <box-usermsg></box-usermsg>
    <box-menu-list></box-menu-list>


  </van-popup>
</template>

<script>
import BoxUsermsg from '@/components/UsermsgLeftMenu'
import BoxMenuList from '@/components/MenuListLeftMenu'
export default {
  data() {
    return {
      // 左侧菜单状态初始化（实际参数以created钩子为准）
      show: '',
    }
  },
  methods: {
    // 左侧菜单遮罩层关闭动画结束后触发
    onClosedLeft () {
      // 遮罩层关闭动画结束后将Vuex数据进行变更
      // 保证 Vuex 数据和左侧菜单实际状态同步
      this.$store.commit('change_leftMenu');
    }
  },
  computed: {
    // Vuex 数据
    mode_leftMenu () {
      return this.$store.state.mode_leftMenu
    } 
  },
  watch: {
    // 监听 Vuex 数据是否改变
    mode_leftMenu (val) {
      this.show = val
    }
  },
  created() {
    // 在 created 阶段就将内容赋值给 data 中的 show
    this.show = this.mode_leftMenu
  },
  components: {
    BoxUsermsg,
    BoxMenuList
  }
};
</script>
