import Vuex from 'vuex'

export const store = new Vuex.Store({
    state: {
        userData: []
    },
    mutations: {
        ADD_USER_DATA: (state, data) => {
            state.userData.push(data)
          }
    }
});


export default store;