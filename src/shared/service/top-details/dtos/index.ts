export interface IGetAllSeller {
  id: string;
  imageUrl: string;
}

export interface IGetTopDetailsData {
  id: any;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  bestSeller: Array<IGetAllSeller>;
}
