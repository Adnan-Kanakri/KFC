import { IGetTopDetailsData } from "../../top-details/dtos";

export interface IGetAllExploreDate {
  id: any;
  name: string;
  imageUrl: string;
  details: Array<IGetTopDetailsData>;
}
