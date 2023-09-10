import { apiInstance } from "@shared/lib/apiClient";
import { Game } from "@shared/types";
import { endpoints } from "@shared/constants";

export const getGames = async (): Promise<Game[]> => {
  return await apiInstance.get<Game[]>({ endpoint: endpoints.gameList });
};
