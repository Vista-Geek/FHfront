export interface SellForm {
  dataCenter: DataCenters;
  serverName: ServersNames;
  title: string;
  price: string;
  typeOfSale: TypeOfSale;
  location: string;
  plotNumber: string;
  size: HouseSize;
  server: string;
  description: string;
  image: string;
}
export type DataCenters =
  | "Aether"
  | "Chaos"
  | "Crystal"
  | "Elemental"
  | "Gaia"
  | "Korea";

export type ServersNames =
  | "Balmung"
  | "Brynhildr"
  | "Coeurl"
  | "Diabolos"
  | "Goblin"
  | "Malboro"
  | "Mateus"
  | "Zalera";

export type TypeOfSale = "FC" | "Relocation";
export type HouseSize = "Short" | "Medium" | "Large";
