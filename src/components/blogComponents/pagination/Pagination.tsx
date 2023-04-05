import React from "react";

const Pagination = () => {
  return (
    <ul className="pagination">
      <li className="icon-prev">
        <a href="#">
          <i className="ion-ios-arrow-left"></i>
        </a>
      </li>
      <li className="active">
        <a href="#">1</a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li>
        <a href="#">4</a>
      </li>
      <li>
        <a href="#">...</a>
      </li>
      <li>
        <a href="#">21</a>
      </li>
      <li>
        <a href="#">22</a>
      </li>
      <li className="icon-next">
        <a href="#">
          <i className="ion-ios-arrow-right"></i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
