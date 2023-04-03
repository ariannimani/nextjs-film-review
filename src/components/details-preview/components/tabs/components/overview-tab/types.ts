import {
  CreditsProps,
  MovieData,
  ReviewProps,
  ReviewResult,
  VideoProps,
} from "@/components/details-preview/types";

export interface OverviewTabContent {
  movie: MovieData;
  reviews: ReviewResult;
  credits: CreditsProps;
  videos: VideoProps[];
}
