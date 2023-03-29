import Image from "next/image";
import React from "react";
import { TopSearch, MenuItem } from "@/components/header";

const titles = ["Home", "Movies", "Celebrities", "Blog", "Profile"];
const Header = () => {
  return (
    <header className="ht-header">
      <div className="container">
        <nav className="navbar navbar-default navbar-custom">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header logo">
            <div
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <div id="nav-icon1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <a href="#">
              <Image
                className="logo"
                src="/assets/images/logo1.png"
                alt=""
                width={119}
                height={58}
              />
            </a>
          </div>
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div
            className="collapse navbar-collapse flex-parent"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav flex-child-menu menu-left">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>
              {titles.map((title) => (
                <MenuItem key={title} title={title} />
              ))}
            </ul>
            <ul className="nav navbar-nav flex-child-menu menu-right">
              <li className="loginLink">
                <a href="#">LOG In</a>
              </li>
              <li className="btn signupLink">
                <a href="#">sign up</a>
              </li>
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </nav>

        {/* <!-- top search form --> */}
        <TopSearch />
      </div>
    </header>
  );
};

export default Header;
