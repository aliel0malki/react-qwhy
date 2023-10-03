interface UseQueryReturnProps<DataProps> {
    status: number | undefined;
    isLoading: boolean;
    error: any;
    data: DataProps[] | DataProps | undefined;
}
declare const useQuery: <ReturnResult>(apiUrl: string) => UseQueryReturnProps<ReturnResult>;
export { useQuery };
