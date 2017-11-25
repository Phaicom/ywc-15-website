// import Vue from 'vue'

export default {
  SET_ACTIVE_MAJOR: (state, {
    major
  }) => {
    state.activeMajor = major
  },

  SET_KEYWORD: (state, {
    keyword
  }) => {
    state.keyword = keyword
  },

  SET_INTERVIEWS: (state, {
    interviews
  }) => {
    state.interviews = interviews
  }
}
