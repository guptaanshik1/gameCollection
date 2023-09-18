export interface IPlatformList {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image?: any;
  year_start?: any;
  year_end?: any;
}

export interface IPlatforms {
  id: number;
  name: string;
  slug: string;
  platforms: IPlatformList[];
}
