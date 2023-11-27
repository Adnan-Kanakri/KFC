import { useQuery, QueryOptions } from "react-query"
import { exploreService } from "../../service/explore";
import { IGetAllExploreDate } from "../../service/explore/dtos";



export const useGetAllExploreData = (option?: QueryOptions<Array<IGetAllExploreDate>>) => {
    const query = useQuery<Array<IGetAllExploreDate>>(
        ["getAllExploreData"],
        async () => await exploreService.getAllExplore(),
        option
    );
    const loading = !query.data && !query.error;
    const exploreData = query.data;
    return { ...query, loading, exploreData };
};


export const useGetExploreDetailsData = (id: string, option?: QueryOptions<Array<IGetAllExploreDate>>) => {
    const query = useQuery<Array<IGetAllExploreDate>>(
        ["useGetExploreDetailsData"],
        async () => await exploreService.getExploreDetails(id),
        option
    );
    const loading = !query.data && !query.error;
    const exploreData = query.data;
    return { ...query, loading, exploreData };
};