import { Footer, Header } from "@/components";
import React from "react";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="page-single">
        <div className="container">
          <div className="row ipad-width">
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="user-information">
                <div className="user-img">
                  <a href="#">
                    <img src="/assets/images/uploads/user-img.png" alt="" />
                    <br />
                  </a>
                  <a href="#" className="redbtn">
                    Change avatar
                  </a>
                </div>
                <div className="user-fav">
                  <p>Account Details</p>
                  <ul>
                    <li className="active">
                      <a href="userprofile.html">Profile</a>
                    </li>
                    <li>
                      <a href="userfavoritelist.html">Favorite movies</a>
                    </li>
                    <li>
                      <a href="userrate.html">Rated movies</a>
                    </li>
                  </ul>
                </div>
                <div className="user-fav">
                  <p>Others</p>
                  <ul>
                    <li>
                      <a href="#">Change password</a>
                    </li>
                    <li>
                      <a href="#">Log out</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className="form-style-1 user-pro">
                <form action="#" className="user">
                  <h4>01. Profile details</h4>
                  <div className="row">
                    <div className="col-md-6 form-it">
                      <label>Username</label>
                      <input type="text" placeholder="edwardkennedy" />
                    </div>
                    <div className="col-md-6 form-it">
                      <label>Email Address</label>
                      <input type="text" placeholder="edward@kennedy.com" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-it">
                      <label>First Name</label>
                      <input type="text" placeholder="Edward " />
                    </div>
                    <div className="col-md-6 form-it">
                      <label>Last Name</label>
                      <input type="text" placeholder="Kennedy" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-it">
                      <label>Country</label>
                      <select>
                        <option value="united">United States</option>
                        <option value="saab">Others</option>
                      </select>
                    </div>
                    <div className="col-md-6 form-it">
                      <label>State</label>
                      <select>
                        <option value="united">New York</option>
                        <option value="saab">Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <input className="submit" type="submit" value="save" />
                    </div>
                  </div>
                </form>
                <form action="#" className="password">
                  <h4>02. Change password</h4>
                  <div className="row">
                    <div className="col-md-6 form-it">
                      <label>Old Password</label>
                      <input type="text" placeholder="**********" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-it">
                      <label>New Password</label>
                      <input type="text" placeholder="***************" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-it">
                      <label>Confirm New Password</label>
                      <input type="text" placeholder="*************** " />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <input className="submit" type="submit" value="change" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
