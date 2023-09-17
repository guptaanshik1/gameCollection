import React from "react";
import { IGameContextData } from "./data";

export const GamesContext = React.createContext<IGameContextData | null>(null);

export const useGamesContext = () => {
  const context = React.useContext(GamesContext);
  if (!context)
    throw new Error("useGamesContext can not be used outside it's provider");
  return context;
};
