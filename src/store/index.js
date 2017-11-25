import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      activeMajor: null,
      interviewsPerPage: 20,
      interviews: [],
      keyword: null
    },
    actions,
    mutations,
    getters
  })
}
