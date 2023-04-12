import Link from "next/link";
import Image from "next/image";
import React, { FC, useState } from "react";
import { TopSearch, MenuItem } from "@/components/header/components";
import { SignIn, SignUp } from "../auth";
import { getUserFromCookie } from "../../../lib/auth";
import { User } from "@prisma/client";
import { cookies } from "next/headers";

type HeaderProps = {
  user: User;
};

const titles = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Movies", link: "/movies" },
  { id: 3, name: "Tv Shows", link: "/tv-shows" },
  { id: 4, name: "Celebrities", link: "/celebrities" },
  { id: 5, name: "Blog", link: "/blog" },
  { id: 6, name: "Profile", link: "/profile" },
];

export const getServerSideProps = async () => {
  //FIXME: fix getUserFromCookie
  // const user = await getUserFromCookie(cookies());
  const user = "Yes";
  return { props: { user } };
};

const Header: FC<HeaderProps> = ({ user }) => {
  console.log({ user });
  const [authForm, setAuthForm] = useState("");

  const handleOutsideClickHandler = () => {
    setAuthForm("");
  };

  return (
    <>
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
                  <a onClick={() => setAuthForm("signIn")}>LOG In</a>
                </li>
                <li className="btn signupLink">
                  <a onClick={() => setAuthForm("signUp")}>sign up</a>
                </li>
              </ul>
            </div>
            {/* <!-- /.navbar-collapse --> */}
          </nav>

          {/* <!-- top search form --> */}
          <TopSearch />
        </div>
      </header>

      {authForm && (
        <div className="overlay openform">
          {authForm === "signIn" ? (
            <SignIn onBlur={handleOutsideClickHandler} />
          ) : (
            <SignUp onBlur={handleOutsideClickHandler} />
          )}
        </div>
      )}
    </>
  );
};

export default Header;
