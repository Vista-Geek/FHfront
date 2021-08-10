export interface Houses {
  title: string;
  location: string;
  price: number;
  typeOfSale: string;
  size: number;
  description: string;
  dataCenters: {
    dCenter: string;
    server: string;
  };
}
