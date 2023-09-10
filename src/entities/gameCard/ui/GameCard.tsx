import { Game } from "@shared/types";
import { Card } from "antd";

type GameCard = Omit<Game, "short_description" | "genre" | "platform" | "developer">;

export const GameCard: React.FC = ({ id, title, release_date: releaseDate, thumbnail, publisher }: GameCard) => {
  return <>{title}</>;
};
