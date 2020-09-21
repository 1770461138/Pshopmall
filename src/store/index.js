import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
const store = new Vuex.Store({
  state,
  getters,
  mutations,//mutations的唯一目的就是修改state
  actions,
  modules: {
  }
})
export default store
