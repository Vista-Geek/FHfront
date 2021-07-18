import Label from "@components/Buttons/LabelButton";
import HouseInfoSection from "./HouseInfoSection";

interface HouseInfoProps {
  typeOfSale: Array<string>;
  houseSize: Array<string>;
}

const regularClasses =
  "shadow appearance-none border rounded w-full py-2 px-3 bg-purpleCust-bg sm:bg-purpleCust-dark text-white leading-tight border-purpleCust focus:border-purpleCust focus:outline-none focus:shadow-outline ";

export default function HouseInfo({ typeOfSale, houseSize }: HouseInfoProps) {
  return (
    <div className="mt-8 font-herbo">
      <HouseInfoSection labelFor="title" labelTitle="Title">
        <input
          className={regularClasses}
          id="title"
          type="text"
          placeholder="Your post title"
        />
      </HouseInfoSection>
      <HouseInfoSection labelFor="price" labelTitle="Price">
        <input
          className={regularClasses}
          id="price"
          type="number"
          placeholder="House price"
        />
      </HouseInfoSection>
      <HouseInfoSection labelFor="typeOfSale" labelTitle="Type of sale">
        {typeOfSale.map((item, index) => (
          <Label key={index} inputName="typeOfSale" itemName={item} />
        ))}
      </HouseInfoSection>
      <HouseInfoSection labelFor="location" labelTitle="Location">
        <select defaultValue="Select one" className={regularClasses}>
          <option hidden>Select one</option>
        </select>
      </HouseInfoSection>
      <HouseInfoSection labelFor="plotNumber" labelTitle="Plot Number">
        <select defaultValue="Select one" className={regularClasses}>
          <option hidden>Select one</option>
        </select>
      </HouseInfoSection>
      <HouseInfoSection labelFor="size" labelTitle="Size">
        {houseSize.map((item, index) => (
          <Label key={index} inputName="size" itemName={item} />
        ))}
      </HouseInfoSection>
      <HouseInfoSection labelFor="description" labelTitle="Description">
        <textarea
          name="description"
          id="description"
          maxLength={270}
          className={regularClasses + "h-32"}
        ></textarea>
      </HouseInfoSection>
    </div>
  );
}
