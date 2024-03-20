import React from "react";
import { IContextData } from "./data";

export const GameDetailsPageContext = React.createContext<IContextData | null>(
  null
);

export const useGameDetailsPageContext = () => {
  const context = React.useContext(GameDetailsPageContext);
  if (!context)
    throw new Error(
      "useGameDetailsPageContext can not be used outside it's provider"
    );
  return context;
};
