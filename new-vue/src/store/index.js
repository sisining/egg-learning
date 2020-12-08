import { createStore } from 'vuex'
import actions from "./action/actions";
import mutations from './mutations'

export default createStore({
  state: {
        // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''

  },
  mutations,
  actions,
  modules: {
  }
})
