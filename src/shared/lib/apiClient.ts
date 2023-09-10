import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";
import { BASE_URL } from "@shared/constants";

type RequestParams = {
  endpoint: string;
  options?: AxiosRequestConfig;
};

type BaseHeaders = {
  "X-RapidAPI-key": string;
  "X-RapidAPI-Host": string;
};

class ApiInstance {
  private _axiosInstance: AxiosInstance;
  private _baseHeaders: BaseHeaders = {
    "X-RapidAPI-key": process.env.X_RAPIDAPI_KEY!,
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  };
  constructor(baseUrl: string) {
    this._axiosInstance = axios.create({
      baseURL: baseUrl,
    });
  }

  async get<T>({ endpoint = "", options = {} }: RequestParams): Promise<T> {
    const response: AxiosResponse<T> = await this._axiosInstance.get(endpoint, {
      headers: this._baseHeaders,
      ...options,
    });
    return response.data;
  }

  async post<T>({ endpoint = "", options = {} }: RequestParams): Promise<T> {
    const response: AxiosResponse<T> = await axios.post(endpoint, options);
    return response.data;
  }
}

export const apiInstance = new ApiInstance(BASE_URL);
