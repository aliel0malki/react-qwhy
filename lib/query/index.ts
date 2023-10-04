import { useState, useEffect } from "react";

// interface of returned vars
interface UseQueryReturnProps<DataProps> {
  status: number | undefined;
  isLoading: boolean;
  error: any;
  data: DataProps[] | DataProps | undefined;
}

// expect to pass apiurl & data type to ti
const useQuery = <ReturnResult>(
  apiUrl: string
): UseQueryReturnProps<ReturnResult> => {
  // Define returned values
  // status => return status code of fetched api
  const [status, setStatus] = useState<number>();
  // isLoading => True when Fetching
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // error => return error when fetch is error
  const [error, setError] = useState<any>(null);
  // tryFetch => I fetch not success fetch it again ( 3 try only )
  const [tryFetch, setTryFetch] = useState<number>(3);
  // data => return data fetched if fetch success
  const [data, setData] = useState<ReturnResult[] | ReturnResult | undefined>(
    undefined
  );
  // use useEffect to run it on browser
  useEffect(() => {
    // Define async fetchData
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(apiUrl);
        const responseData = await response.json();

        if (Array.isArray(responseData)) {
          setData(responseData);
        } else {
          setData([responseData]);
        }
        setStatus(response.status);
      } catch (error) {
        // try fetch again if tryFetch > 0
        if (tryFetch > 0) {
          // decrement tryFetch - 1
          setTryFetch(tryFetch - 1);
        } else {
          // When tryFetch is == 0
          setStatus(404);
          setError(error);
          console.error(
            "An error occurred while fetching data\n####### Error #######\n",
            error
          );
        }
      }

      setIsLoading(false);
    };

    fetchData();
  }, [tryFetch]);

  return {
    status,
    isLoading,
    data,
    error,
  };
};

export { useQuery };
