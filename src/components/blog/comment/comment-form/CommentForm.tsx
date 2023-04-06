import React from "react";

const CommentForm = () => {
  return (
    <div className="comment-form">
      <h4>Leave a comment</h4>
      <form action="#">
        <div className="row">
          <div className="col-md-4">
            <input type="text" placeholder="Your name" />
          </div>
          <div className="col-md-4">
            <input type="text" placeholder="Your email" />
          </div>
          <div className="col-md-4">
            <input type="text" placeholder="Website" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <textarea name="message" id="" placeholder="Message"></textarea>
          </div>
        </div>
        <input className="submit" type="submit" placeholder="submit" />
      </form>
    </div>
  );
};

export default CommentForm;
