import React, { useEffect, useState } from "react";
import IndividualFilterType from "@components/IndividualFilterType";
import router from "next/router";

export default function FilterColumn() {
  const [objeto, setObjeto] = useState({});

  useEffect(() => {
    console.log(objeto);
    router.push(
      {
        pathname: router.pathname,
        query: objeto,
      },
      undefined,
      {
        // Hace que no se reinicie la página con cada cambio
        shallow: true,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objeto]);

  const handleObjeto = (nombreObjeto: string, nuevoObjeto: string[]) => {
    setObjeto({
      ...objeto,
      [nombreObjeto]: nuevoObjeto.join(","),
    });
  };

  const serversNames = [
    "Balmung",
    "Brynhildr",
    "Coeurl",
    "Diabolos",
    "Goblin",
    "Malboro",
    "Mateus",
    "Zalera",
  ];
  const ubications = [
    "The Lavender Beds",
    "The Mist",
    "The Goblet",
    "Shirogane",
  ];
  const size = ["Small", "Medium", "Large"];
  const saleType = ["Free Company", "Relocation"];

  return (
    <div className="mt-8">
      <select
        defaultValue="Data Center"
        className="rounded-full bg-purpleCust-card text-lg h-8 w-40 py-0 border-none"
      >
        <option hidden>Data Center</option>
        <option>Éter</option>
        <option>Primal</option>
        <option>Crystal</option>
        <option>Chaos</option>
        <option>Luz</option>
        <option>No filter</option>
      </select>

      <IndividualFilterType
        filterTitle="Servers"
        apiFilterTitle="server"
        filters={serversNames}
        handleObjeto={handleObjeto}
      />
      <IndividualFilterType
        filterTitle="Ubication"
        apiFilterTitle="location"
        filters={ubications}
        handleObjeto={handleObjeto}
      />
      <IndividualFilterType
        filterTitle="Size"
        apiFilterTitle="size"
        filters={size}
        handleObjeto={handleObjeto}
      />
      <IndividualFilterType
        filterTitle="Type of Sale"
        apiFilterTitle="typeOfSale"
        filters={saleType}
        handleObjeto={handleObjeto}
      />
    </div>
  );
}
