import React from 'react';
import Users from './Users';
import { usersAPI } from '../../api/api';

class UsersAPIComponent extends React.Component {

  componentDidMount() {
    usersAPI.getUsers(this.props.currentPage, this.props.userCountPage).then(response => {
      this.props.setIsFetching(true);
      this.props.setUsers(response.items);
    }
    )
  }

  render() {
    return <Users /*totalCount={this.props.totalCount}*/ users={this.props.usersPage.users}
      addFollow={this.props.addFollow} deleteFollow={this.props.deleteFollow}
      isFetching={this.props.isFetching} setClickedButton={this.props.setClickedButton}
      clickedButton={this.props.clickedButton} clickUserId={this.props.clickUserId} />
  }
}

export default UsersAPIComponent;