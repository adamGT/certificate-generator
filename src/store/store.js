import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    userData: []
  },
  mutations: {
    ADD_USER_DATA: (state, data) => {
      state.userData.push(data)
    }
  },
  action: {
    addUserData (context, payload) {
      context.commit('adduserdata', payload)
    }
  }
})