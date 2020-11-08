import React from 'react';
import User from './User';


const Users = (props) => {

  let users = [
    {
      id: 0,
      follow: true,
      photoUrl: 'https://i.pinimg.com/originals/cf/9a/05/cf9a0518c324fb8e147a265fbb477be3.jpg',
      fullName: 'Artak Sargsyan',
      status: 'I am happy',
      location: { cauntry: 'Armenia', city: 'Yegvard' }
    },
    {
      id: 1,
      follow: false,
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZA3tqVzQkbqwTDh6Migvu09lsHb7chbuuOFbj7IJDo2miPxUn3Q&s',
      fullName: 'Hasmik Petrosyan',
      status: 'I am fine',
      location: { cauntry: 'Armenia', city: 'Axck' }
    },
    {
      id: 2,
      follow: true,
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwGtFuHd1_nN3l7di2sjhzpb7fbS8B9LrPkk0DqqngesoyOPl&s',
      fullName: 'Ani Sargsyan',
      status: 'I am good',
      location: { cauntry: 'Armenia', city: 'Yegvard' }
    },
  ];

  if(props.usersPage.users.length === 0){
    props.setUsers(users);
  }

  return (
    <div>
      {props.usersPage.users.map(user => <User user={user} addFollow={props.addFollow} deleteFollow={props.deleteFollow} />)}
    </div>
  )
}
export default Users;