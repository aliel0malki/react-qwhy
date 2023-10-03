import { useState, useEffect } from "react";

interface UseQueryReturnProps<DataProps> {
  status: number | undefined;
  isLoading: boolean;
  error: any;
  data: DataProps[] | DataProps | undefined;
}

const useQuery = <ReturnResult>(
  apiUrl: string
): UseQueryReturnProps<ReturnResult> => {
  const [status, setStatus] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ReturnResult[] | ReturnResult | undefined>(
    undefined
  );
  const [error, setError] = useState<any>(null);

  useEffect(() => {
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
        console.error(
          "An error occurred while fetching data\n####### Error #######\n",
          error
        );
        setStatus(404);
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [apiUrl]);

  return {
    status,
    isLoading,
    data,
    error,
  };
};

export { useQuery };
