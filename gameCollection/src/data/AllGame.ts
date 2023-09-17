export interface IAllGamesResponse {
  count: number;
  next?: string;
  previous?: string;
  results: IAllGameResult[];
}

export interface Rating {}

export interface Added_by_statu {}

export interface Esrb_rating {
  id: number;
  slug: string;
  name: string;
}

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Requirement {
  minimum: string;
  recommended: string;
}

export interface Platform {
  platform: Platform;
  released_at: string;
  requirements: Requirement;
}

export interface IAllGameResult {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: Added_by_statu;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: Esrb_rating;
  platforms: Platform[];
}
