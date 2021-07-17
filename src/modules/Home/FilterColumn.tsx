import React from "react";
import IndividualFilterType from "@components/IndividualFilterType";

export default function FilterColumn() {
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

      <IndividualFilterType filterTitle="Servers" filters={serversNames} />
      <IndividualFilterType filterTitle="Ubication" filters={ubications} />
      <IndividualFilterType filterTitle="Size" filters={size} />
      <IndividualFilterType filterTitle="Type of Sale" filters={saleType} />
    </div>
  );
}
