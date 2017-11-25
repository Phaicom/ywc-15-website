import {
  fetchInterview
} from '../api'

export default {
  FETCH_INTERVIEWS_DATA: ({
    commit,
    dispatch,
    state
  }, {
    major,
    keyword
  }) => {
    commit('SET_ACTIVE_MAJOR', {
      major
    })

    commit('SET_KEYWORD', {
      keyword
    })

    if (state.interviews.length <= 0) {
      return fetchInterview()
        .then(interviews => {
          interviews.sort((a, b) => {
            return a.interviewRef.localeCompare(b.interviewRef)
          })

          commit('SET_INTERVIEWS', {
            interviews
          })
        })
    }
  }
}
