// import { Opponent } from "../pages/main/tabs/GameList";

export interface Opponent {
    name: string;
    score: string;
  }

export type Game = {
    
    title: string;
    plain: string;
    Opponents: Opponent[];
    description: string;
    author: string;
    image: string;
};