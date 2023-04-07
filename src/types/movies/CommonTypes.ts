export interface ReviewsResult {
  id: number;
  page: number;
  results: ReviewProps[];
  total_pages: number;
  total_results: number;
}

export interface ReviewProps {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface AuthorDetails {
  name: string;
  username: string;
  avatar_path?: string;
  rating: number;
}

export interface CreditsResult {
  cast: CastProps[];
  crew: CrewProps[];
  id: number;
}

export interface CastProps {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  character: string;
  credit_id: string;
  order: number;
}

export interface CrewProps {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface VideosResult {
  id: number;
  results: VideoProps[];
}

export interface VideoProps {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  published_at: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  id: string;
}
