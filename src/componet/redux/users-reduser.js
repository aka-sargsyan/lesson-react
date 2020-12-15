const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_CLICKED_BUTTON = "SET_CLICKED_BUTTON";

// pagination action type start
const START_PAGE = "START_PAGE";
const END_PAGE = "END_PAGE";
const COUNT_PAGE = "COUNT_PAGE";
const PAGES = "PAGES";
const CURRENT_PAGE = "CURRENT_PAGE";
// pagination action type end

let initialState = {
  users: [],
  clickedButton: false,
  clickUserId: null,
  isFetching: true,

  followingInProgress: [],

  startPage: 0,
  endPage: 0,
  countPage: 0,
  currentPage: 1,
  userCountPage: 10,
  totalCount: 0,
  pages: [],

}

export let addFollow = (userId) => ({ type: FOLLOW, userId });
export let deleteFollow = (userId) => ({ type: UNFOLLOW, userId });
export let setUsers = (users) => ({ type: SET_USERS, users });
export let setIsFetching = (boolean) => ({ type: SET_IS_FETCHING, boolean });
export let setClickedButton = (boolean, userId) => ({ type: SET_CLICKED_BUTTON, boolean, userId });

// pagination action creator start
export let setUsersTotalCount = (totalUsers) => ({ type: SET_USERS_TOTAL_COUNT, totalUsers });
export let setStartPage = (startPage) => ({ type: START_PAGE, startPage });
export let setEndPage = (endPage) => ({ type: END_PAGE, endPage });
export let setCountPage = (countPage) => ({ type: COUNT_PAGE, countPage });
export let setPages = (startPage, endPage) => ({ type: PAGES, startPage, endPage });
export let setCurrentPage = (currentPage) => ({ type: CURRENT_PAGE, currentPage });
// pagination action creator end

let addPages = (startPage, endPage) => {
  let pages = [];
  for (let i = startPage; i <= endPage; i++) {
    if (i === startPage) {
      pages.push("«");
      pages.push(i);
    } else if (i === endPage) {
      pages.push(i);
      pages.push("»");
    } else {
      pages.push(i);
    }
  }
  return pages;
}

const usersReduser = (state = initialState, action) => {
  switch (action.type) {

    case FOLLOW:
      return {
        ...state, users: state.users.map(user => {
          if (user.id === action.userId) {
            user.followed = true;
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
            user.followed = false;
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


    case SET_IS_FETCHING:
      return { ...state, isFetching: action.boolean }

    case SET_CLICKED_BUTTON:
      return { ...state, clickedButton: action.boolean, clickUserId: action.userId }

    // start pagination
    case SET_USERS_TOTAL_COUNT:
      return { ...state, totalCount: action.totalUsers }

    case START_PAGE:
      return { ...state, startPage: action.startPage }

    case END_PAGE:
      return { ...state, endPage: action.endPage }

    case COUNT_PAGE:
      return { ...state, countPage: action.countPage }

    case PAGES:
      return { ...state, pages: addPages(action.startPage, action.endPage) }

    case CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    // end pagination

    default: return state
  }
}

export default usersReduser;