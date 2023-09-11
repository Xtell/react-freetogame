import {Game} from "@shared/types";
import {Card} from "antd";
import React from "react";

type GameCard = Omit<Game, "short_description" | "genre" | "platform" | "developer">;

export const GameCard: React.FC<GameCard> = ({
                                               id,
                                               title,
                                               release_date: releaseDate,
                                               thumbnail,
                                               publisher
                                             }) => {
  return <Card title={title}/>
};
