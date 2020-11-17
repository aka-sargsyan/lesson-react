import React from 'react';
import User from './User';
import * as axius from 'axios';

class Users extends React.Component {

  componentDidMount() {
    axius.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).
      then(response => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      }
      );
  }

  setPageCount = () => {
    let total = Math.ceil(this.props.usersPage.totalCount / this.props.usersPage.pageSize);
    let array = [];
    for (let i = 1; i <= total; i++) {
      array.push(i);
    }
    return array;
  }

  setCurrentPage = (page) => {
    this.props.setCurrentPage(page);
    axius.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPage.pageSize}`).
      then(response => this.props.setUsers(response.data.items));
  }

  render() {

    return (
      <div>
        <div>
          {this.setPageCount().map(page => <span onClick={() => this.setCurrentPage(page)}>{page}</span>)}
        </div>
        {this.props.usersPage.users.map(user => <User key={user.id} user={user} addFollow={this.props.addFollow} deleteFollow={this.props.deleteFollow} />)}
      </div>
    )
  }
}

export default Users;