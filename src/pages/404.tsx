import Image from "next/image";
import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div className="page-single-2">
      <div className="container">
        <div className="row">
          <div className="middle-content">
            <Image
              className="md-logo"
              src="/assets/images/logo1.png"
              alt="Logo"
              width={120}
              height={120}
            />
            <Image
              src="/assets/images/uploads/err-img.png"
              alt="Error404"
              width={600}
              height={600}
            />
            <h1>Page not found</h1>
            <Link href="/" className="redbtn">
              go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
