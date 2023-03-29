import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = () => {
  return (
    <div className="slider movie-items">
      <div className="container">
        <div className="row">
          <div className="social-link">
            <p>Follow us: </p>
            <a href="#">
              <i className="ion-social-facebook"></i>
            </a>
            <a href="#">
              <i className="ion-social-twitter"></i>
            </a>
            <a href="#">
              <i className="ion-social-googleplus"></i>
            </a>
            <a href="#">
              <i className="ion-social-youtube"></i>
            </a>
          </div>

          <div className="slick-multiItemSlider">
            <Carousel
              ssr={true} // means to render carousel on server-side.
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div className="movie-item">
                <Image
                  loading="lazy"
                  src="/assets/images/uploads/slider3.jpg"
                  alt=""
                  width={285}
                  height={437}
                />
                <div className="title-in">
                  <div className="cate">
                    <span className="blue">
                      <a href="#">Sci-fi</a>
                    </span>
                  </div>
                  <h6>
                    <a href="#">Interstellar</a>
                  </h6>
                  <p>
                    <BsStarFill color="#f5b50a" size={"16px"} />
                    <span>7.4</span> /10
                  </p>
                </div>
              </div>
              <div className="movie-item">
                <Image
                  loading="lazy"
                  src="/assets/images/uploads/slider1.jpg"
                  alt=""
                  width={285}
                  height={437}
                />
                <div className="title-in">
                  <div className="cate">
                    <span className="blue">
                      <a href="#">Sci-fi</a>
                    </span>
                  </div>
                  <h6>
                    <a href="#">Interstellar</a>
                  </h6>
                  <p>
                    <BsStarFill color="#f5b50a" size={"16px"} />
                    <span>7.4</span> /10
                  </p>
                </div>
              </div>
              <div className="movie-item">
                <Image
                  loading="lazy"
                  src="/assets/images/uploads/slider2.jpg"
                  alt=""
                  width={285}
                  height={437}
                />
                <div className="title-in">
                  <div className="cate">
                    <span className="blue">
                      <a href="#">Sci-fi</a>
                    </span>
                  </div>
                  <h6>
                    <a href="#">Interstellar</a>
                  </h6>
                  <p>
                    <BsStarFill color="#f5b50a" size={"16px"} />
                    <span>7.4</span> /10
                  </p>
                </div>
              </div>
              <div className="movie-item">
                <Image
                  loading="lazy"
                  src="/assets/images/uploads/slider4.jpg"
                  alt=""
                  width={285}
                  height={437}
                />
                <div className="title-in">
                  <div className="cate">
                    <span className="blue">
                      <a href="#">Sci-fi</a>
                    </span>
                  </div>
                  <h6>
                    <a href="#">Interstellar</a>
                  </h6>
                  <p>
                    <BsStarFill color="#f5b50a" size={"16px"} />
                    <span>7.4</span> /10
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
