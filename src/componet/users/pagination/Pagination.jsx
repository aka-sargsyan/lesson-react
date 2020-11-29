import React from 'react';
import styleCss from './PaginationStyle.module.css';
import * as axius from 'axios';

class Pagination extends React.Component {
  componentDidMount() {
    this.props.setStartPage(1);
    this.props.setEndPage(10);
    this.props.setPages(1, 10);
  }

  setCurrentPage = (page) => {
    this.props.setIsFetching(false);
    axius.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.userCountPage}`).
          then(response => {
        this.props.setIsFetching(true);
        this.props.setUsers(response.data.items)
      });
  }

  clickPage = (event) => {
    let value = event.currentTarget.innerText;

    if (value === "«") {
      let currentPage = this.props.currentPage;
      let startPage = this.props.startPage - 1;
      let endPage = startPage + 9;
      this.props.setStartPage(startPage);
      this.props.setEndPage(endPage);
      this.props.setPages(startPage, endPage);
      if (currentPage > endPage) {
        this.props.setCurrentPage(Number(endPage));
        this.setCurrentPage(Number(endPage));
      }
    } else if (value === "»") {
      let currentPage = this.props.currentPage;
      let endPage = this.props.endPage + 1;
      let startPage = endPage - 9;
      this.props.setStartPage(startPage);
      this.props.setEndPage(endPage);
      this.props.setPages(startPage, endPage);
      if (currentPage < startPage) {
        this.props.setCurrentPage(Number(startPage));
        this.setCurrentPage(Number(startPage));
      }
    } else {
      this.props.setCurrentPage(Number(value));
      this.setCurrentPage(Number(value));
    }
  }
  render() {
    return (
      <div className={styleCss.pagination}>
        <ul >
          {this.props.pages.map((page, index) => <li key={index}>
            {(page === "«" & this.props.startPage === 1) || (page === "»" & this.props.endPage === this.props.countPage) ?
              <button disabled className={styleCss.notAllowed}>{page}</button>
              : <button className={page === this.props.currentPage ? styleCss.active : styleCss.notActive} onClick={this.clickPage}>{page}</button>}
          </li>)}
        </ul>
      </div>
    )
  }
}

export default Pagination;