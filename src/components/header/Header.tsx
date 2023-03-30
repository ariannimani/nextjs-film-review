import Image from "next/image";
import React from "react";
import { TopSearch, MenuItem } from "@/components/header";
import Link from "next/link";

const titles = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Movies", link: "/movies" },
  { id: 3, name: "Celebrities", link: "/celebrities" },
  { id: 4, name: "Blog", link: "/blog" },
  { id: 5, name: "Profile", link: "/profile" },
];
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
            <Link href={`/`}>
              <Image
                className="logo"
                src="/assets/images/logo1.png"
                alt=""
                width={119}
                height={58}
              />
            </Link>
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
                <MenuItem
                  key={title.id}
                  id={title.id}
                  name={title.name}
                  link={title.link}
                />
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
