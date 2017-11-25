import Vue from 'vue'

const logRequests = !!process.env.DEBUG_API

export function fetchInterview () {
  logRequests && console.log(`fetching...`)
  const api = 'https://ywc15.ywc.in.th/api/interview'
  return Vue.axios.get(api)
    .then((response) => {
      logRequests && console.log(`get data ${response}.`)
      return response.data
    })
    .catch((error) => {
      logRequests && console.log(`get data error ${error}!`)
      throw error
    })
}
