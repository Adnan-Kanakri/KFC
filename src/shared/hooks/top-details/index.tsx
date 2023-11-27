import { useQuery, QueryOptions } from "react-query"
import { topDetailService } from "../../service/top-details";
import { IGetTopDetailsData } from "../../service/top-details/dtos";



export const useGetAllTopDetailsData = (option?: QueryOptions<Array<IGetTopDetailsData>>) => {
    const query = useQuery<Array<IGetTopDetailsData>>(
        ["getAllTopDetailsData"],
        async () => await topDetailService.getAllTopDetails(),
        option
    );
    const loading = !query.data && !query.error;
    const topDetailsData = query.data;
    return { ...query, loading, topDetailsData };
};



export const useGetAllSellerData = (id: string, option?: QueryOptions<Array<IGetTopDetailsData>>) => {
    const query = useQuery<Array<IGetTopDetailsData>>(
        ["useGetAllSellerData"],
        async () => await topDetailService.getAllTopSeller(id),
        option
    );
    const loading = !query.data && !query.error;
    const sellerData = query.data;
    return { ...query, loading, sellerData };
};