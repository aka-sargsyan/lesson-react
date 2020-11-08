import {connect} from 'react-redux';
import { followSuccessCreator, setUsersCreator, unFollowSuccessCreator } from '../redux/users-reduser';
import Users from './Users';


let mapStateToProps = (state) => {
  return ({usersPage: state.usersPage})
} 

let dispatchStateToProps = (dispatch) => {
  return {
    addFollow: (userId) => dispatch(followSuccessCreator(userId)),
    deleteFollow: (userId) => dispatch(unFollowSuccessCreator(userId)),
    setUsers: (users) => dispatch(setUsersCreator(users))
  }
}

let UsersContainer = connect(mapStateToProps,dispatchStateToProps)(Users)

export default UsersContainer;