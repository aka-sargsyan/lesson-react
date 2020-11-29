import React from 'react';
import User from './User';
import Preloader from '../comman/preloader/Preloader';
import PaginationContainer from './pagination/PaginationContainer';

const Users = (props) => {
  return (
    <div>
      {props.isFetching === true ? null : <Preloader /> }
      <div>
        <PaginationContainer />
      </div>
      {props.users.map(user => <User key={user.id} user={user} addFollow={props.addFollow} deleteFollow={props.deleteFollow} />)}
      <PaginationContainer />
    </div>
  )
}


export default Users;