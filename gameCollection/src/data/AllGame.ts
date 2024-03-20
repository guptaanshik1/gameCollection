export interface IAllGamesResponse {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: IAllGameResult[];
}

export interface IRating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface IAddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
  image?: any;
  year_end?: any;
  year_start?: any;
  games_count: number;
  image_background: string;
}

export interface IPlatformPlatforms {
  platform: IPlatform;
  released_at: string;
  requirements_en?: any;
  requirements_ru?: any;
}

export interface IPlatformForParent {
  id: number;
  name: string;
  slug: string;
}

export interface IParentPlatform {
  platform: IPlatformForParent;
}

export interface IGenre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface IStore {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
}

export interface Store {
  id: number;
  store: Store;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

export interface Esrb_rating {
  id: number;
  name: string;
  slug: string;
}

export interface IShortScreenshot {
  id: number;
  image: string;
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
  ratings: IRating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: IAddedByStatus;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game?: any;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: IPlatformPlatforms[];
  parent_platforms: IParentPlatform[];
  genres: IGenre[];
  stores: IStore[];
  clip?: any;
  tags: Tag[];
  esrb_rating: Esrb_rating;
  short_screenshots: IShortScreenshot[];
}

export interface IGameDetail {
  achievements_count: number;
  added: number;
  added_by_status: IAddedByStatus;
  additions_count: number;
  background_image: string;
  background_image_additional: string;
  creators_count: number;
  description: string;
  description_raw: string;
  developers: IDeveloper[];
  dominant_color: string;
  game_series_count: number;
  genres: IGenre[];
  esrb_rating: Esrb_rating;
  id: number;
  metacritic: number;
  name: string;
  name_original: string;
  parent_achievements_count: number;
  parent_platforms: IParentPlatform[];
  platforms: IPlatformPlatforms[];
  publishers: IPublisher[];
  rating: number;
  rating_top: number;
  ratings: IRating[];
  ratings_count: number;
  reactions: Record<number, number>;
  released: string;
  reviews_count: number;
  reviews_text_count: number;
  screenshots_count: number;
  slug: string;
  stores: IStore[];
  suggestions_count: number;
  tags: Tag[];
  twitch_count: number;
  website: string;
  youtube_count: number;
}

export interface IDeveloper {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}

export interface IPublisher {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}

export interface IGameTrailer {
  id: number;
  name: string;
  preview: string;
  data: Record<number | string, string>;
}
