import Image from "next/image";
import React from "react";

const SidebarCard = () => {
  return (
    <div className="celeb-item">
      <a href="#">
        <Image
          src="/assets/images/uploads/ava1.jpg"
          alt=""
          width={70}
          height={70}
        />
      </a>
      <div className="celeb-author">
        <h6>
          <a href="#">Samuel N. Jack</a>
        </h6>
        <span>Actor</span>
      </div>
    </div>
  );
};

export default SidebarCard;
