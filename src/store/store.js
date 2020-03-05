import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token:''
  },
  mutations: {
    settoken(state,token){
      state.token=token
    }
  },
  actions: {

  },
  getters:{

  }
})

export default store