import BiographyCard from "@/components/biography-card/BiographyCard";
import React from "react";

const Biography = ({ data }) => {
  return (
    <div>
      <BiographyCard biography={data} />
    </div>
  );
};

export default Biography;
