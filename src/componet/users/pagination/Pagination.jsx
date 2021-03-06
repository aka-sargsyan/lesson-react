import React from 'react';
import styleCss from './PaginationStyle.module.css';

class Pagination extends React.Component {
  componentDidMount() {
    // this.props.setStartPage(1);
    // this.props.setEndPage(10);
    this.props.setPages(this.props.startPage, this.props.endPage);
  }

  setCurrentPage = (page) => {
    this.props.getUsersThunkCreator(page,this.props.userCountPage)
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