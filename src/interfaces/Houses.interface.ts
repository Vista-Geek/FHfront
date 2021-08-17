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

export interface GetHouseByFilterParams {
  size?: string;
  typeOfSale?: string;
  server?: string;
  location?: string;
  dataCenter?: string;
}

export interface FilterResponseI {
  messageStatus: string;
  data: Data;
  status: number;
}

export interface Data {
  result: Houses[];
}
