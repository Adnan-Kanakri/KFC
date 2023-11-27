import ApiService from "../../utils/base-api/api-service";
import { IGetAllExploreDate } from "./dtos";

class ExploreService extends ApiService {
  constructor() {
    super({
      baseURL: `${process.env.REACT_APP_PUBLIC_BASE_API}`,
    });
  }

  getAllExplore(): Promise<Array<IGetAllExploreDate>> {
    return this.get("/explore-menu");
  }

  getExploreDetails(id: string): Promise<Array<IGetAllExploreDate>> {
    return this.get("/explore-menu", {
      params: {
        id: id ?? "1",
      },
    });
  }
}

export const exploreService = new ExploreService();
