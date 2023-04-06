import React from "react";

const ReplyForm = () => {
  return (
    <div className="reply-container">
      <form action="#">
        <div className="row">
          <div className="col-md-10">
            <input type="text" placeholder="Reply message" />
          </div>
          <div className="col-md-2">
            <button>SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReplyForm;
