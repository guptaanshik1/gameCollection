import axios, { AxiosRequestConfig } from "axios";
import { IFetchResponse } from "../data/common";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c0c02e72286d476297bc63655942796c",
  },
});

class ApiClient<T> {
  endpoint: string;
  params: Object | undefined;

  constructor(endpoint: string, params?: Object) {
    this.endpoint = endpoint;
    this.params = params;
  }

  get = (config?: AxiosRequestConfig) => {
    return axiosInstance.get<IFetchResponse<T>>(this.endpoint, config);
  };
}

export default ApiClient;
