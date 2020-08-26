import React from "react";

const Pagination = (props) => (
  <>
    <nav className="d-flex justify-content-center justify-content-md-end">
      <ul className="pagination pagination-sm text-gray-400">
        <li className="page-item">
          <a className="page-link page-link-arrow" href="/#">
            <i className="fa fa-caret-left"></i>
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="/#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/#">
            4
          </a>
        </li>
        <li className="page-item">
          <a className="page-link page-link-arrow" href="/#">
            <i className="fa fa-caret-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  </>
);

export default Pagination;
