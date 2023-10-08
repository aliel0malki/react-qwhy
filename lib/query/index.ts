import { useState, useEffect } from "react";

export interface IUseQueryReturnProps<DataProps> {
  status: number | undefined;
  isLoading: boolean;
  error: any;
  data: DataProps[] | DataProps | undefined | void;
}

// expect to pass apiurl & data type to ti
const useQuery = <ReturnResult>(
  qName: string,
  qFn: () => Promise<any[]>
): IUseQueryReturnProps<ReturnResult> => {
  console.log(qName);
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
  const [data, setData] = useState<
    ReturnResult[] | ReturnResult | undefined | void
  >(undefined);
  // use useEffect to run it on browser
  useEffect(() => {
    // Define async fetchData
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await qFn();
        setData(response);
        setStatus(200);
      } catch (error) {
        // try fetch again if tryFetch > 0
        if (tryFetch > 0) {
          // decrement tryFetch - 1
          setTryFetch(tryFetch - 1);
          return;
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
