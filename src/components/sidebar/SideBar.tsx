import Image from "next/image";
import React from "react";
import SidebarCard from "./sidebar-card/SidebarCard";

const celebrities = [1, 2, 3, 4];
const SideBar = () => {
  return (
    <div className="col-md-4">
      <div className="sidebar">
        <div className="ads">
          <Image
            src="/assets/images/uploads/ads1.png"
            alt=""
            width={336}
            height={296}
          />
        </div>
        <div className="celebrities">
          <h4 className="sb-title">Spotlight Celebrities</h4>
          {celebrities.map((celeb) => (
            <SidebarCard key={celeb} />
          ))}

          <a href="#" className="btn">
            See all celebrities<i className="ion-ios-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
