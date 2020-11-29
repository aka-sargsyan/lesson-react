import React from 'react';
import * as axius from 'axios';
import Users from './Users';

class UsersAPIComponent extends React.Component {

  componentDidMount() {
    this.props.setIsFetching('false');
    axius.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).
      then(response => {
        this.props.setIsFetching('true');
        this.props.setUsers(response.data.items);
      }
      );

  }

  render() {
    return <Users /*totalCount={this.props.totalCount}*/ users={this.props.usersPage.users}
      addFollow={this.props.addFollow} deleteFollow={this.props.deleteFollow}
      isFetching={this.props.isFetching} />
  }
}

export default UsersAPIComponent;