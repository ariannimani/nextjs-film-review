import Link from "next/link";
import React, { FC } from "react";

interface DataItemProps {
  //FIXME: fix any type
  title: string;
  crew: any;
  category?: string;
}
const DataItem: FC<DataItemProps> = ({ title, data, category }) => {
  return (
    <div className="sb-it">
      <h6>{title}: </h6>
      {category ? (
        <p>
          {data.map((item) => (
            <Link key={item.id} href={`/${category}/${item.id}`}>
              {item.name}{" "}
            </Link>
          ))}
        </p>
      ) : (
        <p>
          {data.map((item) => (
            <a key={item.name}>{item.name} </a>
          ))}
        </p>
      )}
    </div>
  );
};

export default DataItem;
