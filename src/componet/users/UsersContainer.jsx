import { connect } from 'react-redux';
import { addFollow, deleteFollow, setUsers, setUsersTotalCount, setCurrentPage, setIsFetching } from '../redux/users-reduser';
import UsersAPIComponent from './UsersAPIComponent';


let mapStateToProps = (state) => {
  return ({
    usersPage: state.usersPage,
    isFetching: state.usersPage.isFetching,
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
  setIsFetching
}

let UsersContainer = connect(mapStateToProps, dispatchObject)(UsersAPIComponent)

export default UsersContainer;