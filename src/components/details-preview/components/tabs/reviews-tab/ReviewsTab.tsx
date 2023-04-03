import React, { FC, useState } from "react";
import { ReviewProps, ReviewResult } from "@/components/details-preview/types";
import { Review } from "@/components/details-preview/components";
import { TopBarFilter, Pagination } from "@/components";

interface ReviewsTabProps {
  data: ReviewResult;
}

const ReviewsTab: FC<ReviewsTabProps> = ({ data }) => {
  const [reviewNumber, setReviewNumber] = useState(5);
  const selectedReviews: ReviewProps[] = data.results.slice(0, reviewNumber);

  return (
    <div id="reviews" className="tab review active">
      <div className="row">
        <div className="rv-hd">
          <div className="div"></div>
          <a href="#" className="redbtn">
            Write Review
          </a>
        </div>
        <TopBarFilter total={data.total_results} title="reviews" />

        {selectedReviews.map((review) => (
          <Review
            key={review.id}
            author={review.author}
            content={review.content}
            created_at={review.created_at}
          />
        ))}
        <Pagination
          page={data.page}
          title={"Reviews"}
          total_pages={data.total_pages}
          perPageNumber={reviewNumber}
          setPerPageNumber={setReviewNumber}
        />
      </div>
    </div>
  );
};

export default ReviewsTab;
