import React, { FC, useState } from "react";
import { ReviewProps, ReviewResult } from "@/components/movie/types";
import Review from "../../../movie-review/MovieReview";
import TopBarFilter from "../top-bar-filter/TopBarFilter";
import Pagination from "../pagination/Pagination";

interface ReviewsTabProps {
  reviews: ReviewResult;
}

const ReviewsTab: FC<ReviewsTabProps> = ({ reviews }) => {
  const [reviewNumber, setReviewNumber] = useState(5);
  const selectedReviews: ReviewProps[] = reviews.results.slice(0, reviewNumber);

  return (
    <div id="reviews" className="tab review active">
      <div className="row">
        <div className="rv-hd">
          <div className="div"></div>
          <a href="#" className="redbtn">
            Write Review
          </a>
        </div>
        <TopBarFilter total={reviews.total_results} title="reviews" />

        {selectedReviews.map((review) => (
          <Review
            key={review.id}
            author={review.author}
            content={review.content}
            created_at={review.created_at}
          />
        ))}
        <Pagination
          page={reviews.page}
          title={"Reviews"}
          total_pages={reviews.total_pages}
          perPageNumber={reviewNumber}
          setPerPageNumber={setReviewNumber}
        />
      </div>
    </div>
  );
};

export default ReviewsTab;
