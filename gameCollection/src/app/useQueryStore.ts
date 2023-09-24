import { create } from "zustand";
import { IQueryObject } from "./../data/common";

interface IQueryOjectStore {
  queryObject: IQueryObject;
  setSearchText: (searchText: string) => void;
  setGenreId: (id: number) => void;
  setPlatformId: (id: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useQueryStore = create<IQueryOjectStore>((set) => ({
  queryObject: {},
  setSearchText: (searchText: string) =>
    set(() => ({ queryObject: { search: searchText } })),
  setGenreId: (genreId: number) =>
    set((state) => ({ queryObject: { ...state.queryObject, genreId } })),
  setPlatformId: (platformId: number) =>
    set((state) => ({ queryObject: { ...state.queryObject, platformId } })),
  setSortOrder: (sortOrder: string) =>
    set((state) => ({
      queryObject: { ...state.queryObject, order: sortOrder },
    })),
}));

export default useQueryStore;
