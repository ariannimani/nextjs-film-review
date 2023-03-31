import Image from "next/image";
import React from "react";

const TrailerCard = () => {
  return (
    <div className="item">
      <div className="trailer-img">
        <Image
          src="/assets/images/uploads/trailer7.jpg"
          alt="photo by Barn Images"
          width={4096}
          height={2737}
        />
      </div>
      <div className="trailer-infor">
        <h4 className="desc">Wonder Woman</h4>
        <p>2:30</p>
      </div>
    </div>
  );
};

export default TrailerCard;
