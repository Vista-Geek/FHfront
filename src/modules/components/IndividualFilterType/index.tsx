import React from 'react';

interface CheckboxProps {
  filterTitle: string;
  filters: Array<string>;
}

export default function IndividualFilterType({ filterTitle, filters }: CheckboxProps) {
  return (
    <div className="mt-8">
      <h5 className="text-xl">{filterTitle}</h5>
      <div className="mt-3 grid grid-cols-2">
        {filters.map((server, index) => (
          <label className="inline-flex items-center text-lg" key={index}>
            <input type="checkbox" className="form-checkbox text-purpleCust-text " />
            <span className="ml-2">{server}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
