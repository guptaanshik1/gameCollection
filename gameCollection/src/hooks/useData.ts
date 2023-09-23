import { useState } from "react";
import { AxiosRequestConfig } from "axios";

const useData = <T>(
  endpoint: string,
  requestObject?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<Array<T>>([]);
  const [error, setError] = useState("");

  // useEffect(
  //   () => {
  //     const fetchGames = async () => {
  //       try {
  //         setIsLoading(true);
  //         const { data } = await apiClient.get<IFetchResponse<>>(endpoint, {
  //           ...requestObject,
  //         });
  //         setData(data?.results);
  //         setIsLoading(false);
  //       } catch (err) {
  //         console.error(err);
  //         setIsLoading(false);
  //         setError((err as AxiosError)?.message);
  //       }
  //     };
  //     fetchGames();
  //   },
  //   deps ? [...deps] : []
  // );

  return {
    data,
    setData,
    error,
    setError,
    endpoint,
    requestObject,
    deps,
  };
};

export default useData;
