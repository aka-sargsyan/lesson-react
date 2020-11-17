const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";

let initialState = {
  users: [],
  pageSize: 20,
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
export let setCurrentPageCreator = (current) => ({ type: SET_CURRENT_PAGE, current });
export let setUsersTotalCountCreator = (totalUsers) => ({ type: SET_USERS_TOTAL_COUNT, totalUsers });

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
      return { ...state, users: action.users }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.current }

    case SET_USERS_TOTAL_COUNT:
      return { ...state, totalCount: action.totalUsers }

    default: return state
  }
}

export default usersReduser;