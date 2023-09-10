import { apiClient } from "@shared/lib/apiClient";
import { ItemId } from "@shared/types";
import { AxiosResponse } from "axios";

const getMaxItemID = async (): Promise<ItemId> => {
  try {
    const response: AxiosResponse<ItemId> = await apiClient.get("/maxitem.json?print=pretty");
    return response.data;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export { getMaxItemID };
