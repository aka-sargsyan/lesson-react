import { connect } from 'react-redux';
import { setUsers, setIsFetching, setClickedButton,getUsersThunkCreator,followThunkCreator } from '../redux/users-reduser';
import { getClickedButton, getClickUserId, getCurrentPage, getIsFetching, getUserCountPage, getUserisAuthFetching, getUsersPage } from '../redux/users-reselect';
import UsersAPIComponent from './UsersAPIComponent';


// let mapStateToProps = (state) => {
//   return ({
//     usersPage: state.usersPage,
//     isFetching: state.usersPage.isFetching,
//     clickedButton: state.usersPage.clickedButton,
//     clickUserId: state.usersPage.clickUserId,
//     currentPage: state.usersPage.currentPage,
//     userCountPage: state.usersPage.userCountPage,
//     isAuthFetching: state.auth.isAuthFetching
//   })
// }

// with selectors 
let mapStateToProps = (state) => {
  return ({
    usersPage: getUsersPage(state),
    isFetching: getIsFetching(state),
    clickedButton: getClickedButton(state),
    clickUserId: getClickUserId(state),
    currentPage: getCurrentPage(state),
    userCountPage: getUserCountPage(state),
    isAuthFetching: getUserisAuthFetching(state)
  })
}

// let dispatchStateToProps = (dispatch) => {
//   return {
//     addFollow: (userId) => dispatch(followSuccessCreator(userId)),
//     deleteFollow: (userId) => dispatch(unFollowSuccessCreator(userId)),
//     setUsers: (users) => dispatch(setUsersCreator(users)),
//     setUsersTotalCount: (totalUsers) => dispatch(setUsersTotalCountCreator(totalUsers)),
//     setCurrentPage: (current) => dispatch(setCurrentPageCreator(current)),
//     setIsFetching: (boolean) => dispatch(setIsFetchingCreator(boolean)),
//   }
// }

let dispatchObject = {
  setUsers,
  setIsFetching,
  setClickedButton,
  getUsersThunkCreator,
  followThunkCreator
}

let UsersContainer = connect(mapStateToProps, dispatchObject)(UsersAPIComponent)

export default UsersContainer;