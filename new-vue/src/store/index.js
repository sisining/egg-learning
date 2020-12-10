import { createStore } from 'vuex'
import actions from "./action/actions";
import mutations from './mutations'
import getters from "./getters";
export default createStore({
  state: {
        // 存储token
    token: '',
    type:null,
    get userToken(){
    return localStorage.getItem('token')
    },
    set userToken(payload){
      return localStorage.setItem('token',payload)
    }
  },
  getters,
  mutations,
  actions,
  modules: {
  }
})
