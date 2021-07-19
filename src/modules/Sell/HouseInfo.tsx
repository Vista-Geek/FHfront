import Label from "@components/Buttons/LabelButton";
import HouseInfoSection from "./HouseInfoSection";
import { SellForm } from "@interfaces/Sell.interface";
import { HandleInputChangeType } from "@interfaces/general.interface";

interface HouseInfoProps {
  typeOfSales: Array<string>;
  houseSize: Array<string>;
  handleInputChange: (e: HandleInputChangeType) => void;
  handleCustomInputChange: (name: string, value: unknown) => void;
  houseInfo: SellForm;
}

export default function HouseInfoComponent({
  typeOfSales,
  houseSize,
  handleInputChange,
  handleCustomInputChange,
  houseInfo: {
    title,
    description,
    location,
    price,
    typeOfSale,
    plotNumber,
    size,
  },
}: HouseInfoProps) {
  // FAKE DATA
  const listOfSomething = ["uno", "dos", "tres"];

  return (
    <div className="mt-8 font-herbo">
      <HouseInfoSection labelFor="title" labelTitle="Title">
        <input
          className="input-sells"
          id="title"
          type="text"
          placeholder="Your post title"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
      </HouseInfoSection>
      <HouseInfoSection labelFor="price" labelTitle="Price">
        <input
          className="input-sells"
          id="price"
          type="number"
          name="price"
          placeholder="House price"
          value={price}
          onChange={handleInputChange}
        />
      </HouseInfoSection>
      <HouseInfoSection labelFor="typeOfSale" labelTitle="Type of sale">
        {typeOfSales.map((item, index) => (
          <Label
            key={index}
            inputName="typeOfSale"
            itemName={item}
            handleCustomInputChange={handleCustomInputChange}
          />
        ))}
      </HouseInfoSection>
      <HouseInfoSection labelFor="location" labelTitle="Location">
        <select
          value={location}
          className="input-sells"
          name="location"
          onChange={handleInputChange}
        >
          <option value="">Select one</option>
          {listOfSomething.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </HouseInfoSection>
      <HouseInfoSection labelFor="plotNumber" labelTitle="Plot Number">
        <select
          value={plotNumber}
          className="input-sells"
          name="plotNumber"
          onChange={handleInputChange}
        >
          <option hidden>Select one</option>
          {listOfSomething.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </HouseInfoSection>
      <HouseInfoSection labelFor="size" labelTitle="Size">
        {houseSize.map((item, index) => (
          <Label
            key={index}
            inputName="size"
            itemName={item}
            handleCustomInputChange={handleCustomInputChange}
          />
        ))}
      </HouseInfoSection>
      <HouseInfoSection labelFor="description" labelTitle="Description">
        <textarea
          name="description"
          id="description"
          value={description}
          // maxLength={}
          className="input-sells h-32"
          onChange={handleInputChange}
        ></textarea>
      </HouseInfoSection>
    </div>
  );
}
