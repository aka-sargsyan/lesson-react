export const getUsersPage = (state) => {
  return state.usersPage
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
}
export const getClickedButton = (state) => {
  return state.usersPage.clickedButton
}
export const getClickUserId = (state) => {
  return state.usersPage.clickUserId
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
}
export const getUserCountPage = (state) => {
  return state.usersPage.userCountPage
}

export const getUserisAuthFetching = (state) => {
  return state.auth.isAuthFetching
}



