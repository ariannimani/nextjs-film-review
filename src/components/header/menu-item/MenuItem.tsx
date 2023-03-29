import React, { FC } from "react";

interface MenuItemProps {
  title: string;
}

const MenuItem: FC<MenuItemProps> = ({ title }) => {
  return (
    <li className="dropdown first">
      <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
        {title} <i className="fa fa-angle-down" aria-hidden="true"></i>
      </a>
    </li>
  );
};

export default MenuItem;
