import React from 'react';
import Users from './Users';
import { usersAPI } from '../../api/api';
// import { getUsersThunkCreator } from '../redux/users-reduser';

class UsersAPIComponent extends React.Component {

  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage,this.props.userCountPage)
    // this.props.setIsFetching(false);
    // usersAPI.getUsers(this.props.currentPage, this.props.userCountPage).then(response => {
    //   this.props.setIsFetching(true);
    //   this.props.setUsers(response.items);
    // })
  }

  render() {
    return <Users /*totalCount={this.props.totalCount}*/ users={this.props.usersPage.users}
      addFollow={this.props.addFollow} deleteFollow={this.props.deleteFollow}
      isFetching={this.props.isFetching} setClickedButton={this.props.setClickedButton}
      clickedButton={this.props.clickedButton} clickUserId={this.props.clickUserId} followThunkCreator={this.props.followThunkCreator}/>
  }
}

export default UsersAPIComponent;