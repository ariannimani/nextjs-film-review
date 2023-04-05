import React, { FC } from "react";

interface HeroProps {
  title: string;
  parentName: string;
  childName: string;
}

const Hero: FC<HeroProps> = ({ title, parentName, childName }) => {
  return (
    <div className="hero common-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hero-ct">
              <h1>{title}</h1>
              <ul className="breadcumb">
                <li className="active">
                  <a href="#">{parentName}</a>
                </li>
                <li>
                  <span className="ion-ios-arrow-right"></span> {childName}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
