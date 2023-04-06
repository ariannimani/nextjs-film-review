import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div id="preloader">
      <Image
        className="logo"
        src="/assets/images/logo1.png"
        alt=""
        width={119}
        height={58}
      />
      <div id="status">
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
