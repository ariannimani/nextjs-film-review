import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sb-search sb-it">
        <h4 className="sb-title">Search</h4>
        <input type="text" placeholder="Enter keywords" />
      </div>
      <div className="sb-cate sb-it">
        <h4 className="sb-title">Categories</h4>
        <ul>
          <li>
            <a href="#">Awards (50)</a>
          </li>
          <li>
            <a href="#">Box office (38)</a>
          </li>
          <li>
            <a href="#">Film reviews (72)</a>
          </li>
          <li>
            <a href="#">News (45)</a>
          </li>
          <li>
            <a href="#">Global (06)</a>
          </li>
        </ul>
      </div>
      <div className="sb-recentpost sb-it">
        <h4 className="sb-title">most popular</h4>
        <div className="recent-item">
          <span>01</span>
          <h6>
            <a href="#">Korea Box Office: Beauty and the Beast Wins Fourth</a>
          </h6>
        </div>
        <div className="recent-item">
          <span>02</span>
          <h6>
            <a href="#">Homeland Finale Includes Shocking Death </a>
          </h6>
        </div>
        <div className="recent-item">
          <span>03</span>
          <h6>
            <a href="#">Fate of the Furious Reviews What the Critics Saying</a>
          </h6>
        </div>
      </div>
      <div className="sb-tags sb-it">
        <h4 className="sb-title">tags</h4>
        <ul className="tag-items">
          <li>
            <a href="#">Batman</a>
          </li>
          <li>
            <a href="#">film</a>
          </li>
          <li>
            <a href="#">homeland</a>
          </li>
          <li>
            <a href="#">Fast & Furious</a>
          </li>
          <li>
            <a href="#">Dead Walker</a>
          </li>
          <li>
            <a href="#">King</a>
          </li>
          <li>
            <a href="#">Beauty</a>
          </li>
        </ul>
      </div>
      <div className="ads">
        <img src="images/uploads/ads1.png" alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
