import Link from "next/link";
import React, { FC } from "react";

interface MenuItemProps {
  id: number;
  name: string;
  link: string;
}

const MenuItem: FC<MenuItemProps> = ({ id, name, link }) => {
  return (
    <li className="dropdown first">
      <Link
        href={`${link}`}
        key={id}
        className="btn btn-default dropdown-toggle lv1"
      >
        {name}
      </Link>
    </li>
  );
};

export default MenuItem;
