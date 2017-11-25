export default {
  activeInterviews (state) {
    const {
      activeMajor,
      interviewsPerPage,
      interviews,
      keyword
    } = state

    if (!activeMajor) {
      return
    }

    let lists = interviews.filter(item => item.major === activeMajor)

    if (keyword) {
      let filteredList = lists.filter(interview => interview.firstName.indexOf(keyword) >= 0 || interview.lastName.indexOf(keyword) >= 0)
      return filteredList.slice(0, interviewsPerPage)
    } else {
      return lists
    }
  }
}
