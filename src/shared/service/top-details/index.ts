import ApiService from "../../utils/base-api/api-service";
import { IGetTopDetailsData } from "./dtos";

class TopDetailService extends ApiService {
  constructor() {
    super({
      baseURL: `${process.env.REACT_APP_PUBLIC_BASE_API}`,
    });
  }

  getAllTopDetails(): Promise<Array<IGetTopDetailsData>> {
    return this.get("/top-details");
  }

  getAllTopSeller(id: string): Promise<Array<IGetTopDetailsData>> {
    return this.get("/top-details", {
      params: {
        id: id,
      },
    });
  }
}

export const topDetailService = new TopDetailService();
