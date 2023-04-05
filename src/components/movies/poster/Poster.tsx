import React, { FC } from "react";
import Image from "next/image";
import { BsPlayFill, BsTicketPerforated } from "react-icons/bs";

interface PosterProps {
  image: string;
  title: string;
  videoId: string;
}

const Poster: FC<PosterProps> = ({ image, title, videoId }) => {
  return (
    <div className="col-md-4 col-sm-12 col-xs-12">
      <div className="movie-img sticky-sb">
        {image && (
          <Image
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt={title}
            width={400}
            height={600}
          />
        )}
        <div className="movie-btn">
          <div className="btn-transform transform-vertical red">
            <div>
              <a className="item item-1 redbtn">
                <BsPlayFill /> Watch Trailer
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/embed/o-0hcF97wy0"
                className="item item-2 redbtn fancybox-media hvr-grow"
              >
                <BsPlayFill />
              </a>
            </div>
          </div>
          <div className="btn-transform transform-vertical">
            <div>
              <a className="item item-1 yellowbtn">
                <BsTicketPerforated /> Buy ticket
              </a>
            </div>
            <div>
              <a className="item item-2 yellowbtn">
                <BsTicketPerforated />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
