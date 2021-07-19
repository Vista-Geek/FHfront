import { TypeOfSale, HouseSize } from "./Sell.interface";

export interface ProductI {
  // la imagen será de tipo string con la DB
  image: string ;
  title: string;
  description: string;
  features: ProductFeatureI;
  author: ProductAuthorI;
  price: number;
}

export interface ProductFeatureI {
  location: string;
  plotNumber: string;
  size: HouseSize;
  typeOfSale: TypeOfSale;
}
export interface ProductAuthorI {
  authorName: string;
  stars: number;
  // la imagen será de tipo string con la DB
  avatar: any;
  discord: string;
  isAuthor?: boolean;
}
