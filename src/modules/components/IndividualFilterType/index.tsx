import React, { ChangeEvent, Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface CheckboxProps {
  filterTitle: string;
  apiFilterTitle: string;
  filters: Array<string>;
  handleObjeto: (nombreObjeto: string, nuevoObjeto: string[]) => void;
}

export default function IndividualFilterType({
  apiFilterTitle,
  filterTitle,
  filters,
  handleObjeto,
}: CheckboxProps) {
  const router = useRouter();

  // Un useState cuyo valor es un array
  // con la misma cantidad de elementos que el 'filters'
  // y rellena cada elemento del array con un 'false'
  const [checkedState, setCheckedState] = useState(
    new Array(filters.length).fill(false)
  );
  // Función que maneja el cambio de estado de los checkboxes (el child)
  const handleOnChange = (position: number) => {
    // Función que mapea todos los elementos del array
    // para cambiarle su valor dependiendo del estado del checkbox (true/false)
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    // Compara los checkboxes según la función 'updatedCheckedState'
    // y le cambia el nombre a los elementos según el boolean
    // (el nombre que le pone es el de los filtros)
    const checkFilters = updatedCheckedState.map(
      (item, index) => item && filters[index]
    );
    setCheckedState(checkFilters);
  };

  useEffect(() => {
    // Filtra los elementos que no son 'false'
    const filterNames = checkedState.filter((element) => element !== false);
    handleObjeto(apiFilterTitle, filterNames);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedState, apiFilterTitle]);

  return (
    <div className="mt-8">
      <h5 className="text-xl">{filterTitle}</h5>
      <div className="mt-3 grid grid-cols-2">
        {filters.map((item, index) => (
          <Fragment key={index}>
            <label className="inline-flex items-center text-lg">
              <input
                type="checkbox"
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
                className="form-checkbox bg-purpleCust-bg text-purpleCust border-purpleCust rounded p-2 focus:outline-none focus:ring-none focus:shadow-none"
              />
              <span className="ml-2">{item}</span>
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
