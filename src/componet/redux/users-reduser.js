const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
// let initialState = {
//   users: [
//     {
//       id: 1,
//       follow: true,
//       photoUrl: 'https://i.pinimg.com/originals/cf/9a/05/cf9a0518c324fb8e147a265fbb477be3.jpg',
//       fullName: 'Artak Sargsyan',
//       status: 'I am happy',
//       location: { cauntry: 'Armenia', city: 'Yegvard' }
//     },
//     {
//       id: 2,
//       follow: false,
//       photoUrl: '',
//       fullName: 'name1',
//       status: 'I am happy',
//       location: { cauntry: 'Armenia', city: 'Yegvard' }
//     }
//   ],
//   aaaa: 5
// }

let initialState = {
  users: [
    // {
    //   id: 0,
    //   follow: true,
    //   photoUrl: 'https://i.pinimg.com/originals/cf/9a/05/cf9a0518c324fb8e147a265fbb477be3.jpg',
    //   fullName: 'Artak Sargsyan',
    //   status: 'I am happy',
    //   location: { cauntry: 'Armenia', city: 'Yegvard' }
    // },
    // {
    //   id: 1,
    //   follow: false,
    //   photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZA3tqVzQkbqwTDh6Migvu09lsHb7chbuuOFbj7IJDo2miPxUn3Q&s',
    //   fullName: 'Hasmik Petrosyan',
    //   status: 'I am fine',
    //   location: { cauntry: 'Armenia', city: 'Axck' }
    // },
    // {
    //   id: 2,
    //   follow: true,
    //   photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwGtFuHd1_nN3l7di2sjhzpb7fbS8B9LrPkk0DqqngesoyOPl&s',
    //   fullName: 'Ani Sargsyan',
    //   status: 'I am good',
    //   location: { cauntry: 'Armenia', city: 'Yegvard' }
    // },
  ],
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  nextPage: 1,
  backPage: 1,
  isFetching: true,
  followingInProgress: [],
}

export let followSuccessCreator = (userId) => ({ type: FOLLOW, userId });
export let unFollowSuccessCreator = (userId) => ({ type: UNFOLLOW, userId });
export let setUsersCreator = (users) => ({ type: SET_USERS, users });

const usersReduser = (state = initialState, action) => {
  switch (action.type) {

    case FOLLOW:
      return {
        ...state, users: state.users.map(user => {
          if (user.id === action.userId) {
            user.follow = true;
            return user;
          } else {
            return user;
          }
        })
      }

    case UNFOLLOW:
      return {
        ...state, users: state.users.map(user => {
          if (user.id === action.userId) {
            user.follow = false;
            return user;
          } else {
            return user;
          }
        })
      }
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] }

    default: return state
  }
}

export default usersReduser;