import { connect } from 'react-redux';
import {  setStartPage, setEndPage, setCountPage, setPages, setCurrentPage, setUsers, setIsFetching,getUsersThunkCreator } from '../../redux/users-reduser';
import Pagination from './Pagination';

let mapStateToProps = (state) => {
  return ({
    startPage: state.usersPage.startPage,
    endPage: state.usersPage.endPage,
    countPage: state.usersPage.countPage,
    pages: state.usersPage.pages,
    currentPage: state.usersPage.currentPage,
    userCountPage: state.usersPage.userCountPage,
    totalCount: state.usersPage.totalCount
  })
}

// let dispatchStateToProps = (dispatch) => {
//   return {
//     setStartPage: (startPage) => dispatch(setStartPageCreator(startPage)),
//     setEndPage: (endPage) => dispatch(setEndPageCreator(endPage)),
//     setCountPage: (countPage) => dispatch(setCountPageCreator(countPage)),
//     setPages: (startPage,endPage) => dispatch(setPagesCreator(startPage,endPage)),
//     setCurrentPage: (currentPage) => dispatch(setCurrentPageCreator(currentPage)),
//     setUsers: (users) => dispatch(setUsersCreator(users)),
//     setIsFetching: (boolean) => dispatch(setIsFetchingCreator(boolean)),
//   }
// }

let dispatchObject = {
  setStartPage,
  setEndPage,
  setCountPage,
  setPages,
  setCurrentPage,
  setUsers,
  setIsFetching,
  getUsersThunkCreator,
}
let PaginationContainer = connect(mapStateToProps, dispatchObject)(Pagination)

export default PaginationContainer;