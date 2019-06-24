import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 【严格模式】请在发布环境中禁用此项，以避免性能损失
  strict: true,
  state: {
    mode_leftMenu: false
  },
  mutations: {
    change_leftMenu (state) {
      state.mode_leftMenu = !state.mode_leftMenu
      // console.log(`Vuex=${state.mode_leftMenu}`)
    }
  },
  actions: {

  }
})
