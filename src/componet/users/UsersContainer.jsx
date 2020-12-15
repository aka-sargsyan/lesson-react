import { connect } from 'react-redux';
import { addFollow, deleteFollow, setUsers, setIsFetching, setClickedButton } from '../redux/users-reduser';
import UsersAPIComponent from './UsersAPIComponent';


let mapStateToProps = (state) => {
  return ({
    usersPage: state.usersPage,
    isFetching: state.usersPage.isFetching,
    clickedButton: state.usersPage.clickedButton,
    clickUserId: state.usersPage.clickUserId,
    currentPage: state.usersPage.currentPage,
    userCountPage: state.usersPage.userCountPage
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
  addFollow,
  deleteFollow,
  setUsers,
  setIsFetching,
  setClickedButton
}

let UsersContainer = connect(mapStateToProps, dispatchObject)(UsersAPIComponent)

export default UsersContainer;