import React from "react";

const BiographyCard = ({ biography, type = "long", setActiveTab }) => {
  return (
    <>
      {type === "short" ? (
        <>
          <p>{biography}</p>

          <p className="time">
            <a
              className="cursor-class"
              onClick={() => setActiveTab("biography")}
            >
              See full bio
            </a>
          </p>
        </>
      ) : (
        <div className="row">
          <p>{biography}</p>
        </div>
      )}
    </>
  );
};

export default BiographyCard;
