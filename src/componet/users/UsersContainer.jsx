import {connect} from 'react-redux';
import { followSuccessCreator, setCurrentPageCreator, setUsersCreator, setUsersTotalCountCreator, unFollowSuccessCreator } from '../redux/users-reduser';
import Users from './Users';


let mapStateToProps = (state) => {
  return ({
    usersPage: state.usersPage,
    pageSize: state.pageSize,
    totalCount: state.totalCount,
    currentPage: state.currentPage
  })
} 

let dispatchStateToProps = (dispatch) => {
  return {
    addFollow: (userId) => dispatch(followSuccessCreator(userId)),
    deleteFollow: (userId) => dispatch(unFollowSuccessCreator(userId)),
    setUsers: (users) => dispatch(setUsersCreator(users)),
    setUsersTotalCount: (totalUsers) => dispatch(setUsersTotalCountCreator(totalUsers)),
    setCurrentPage: (current) => dispatch(setCurrentPageCreator(current)),
  }
}

let UsersContainer = connect(mapStateToProps,dispatchStateToProps)(Users)

export default UsersContainer;