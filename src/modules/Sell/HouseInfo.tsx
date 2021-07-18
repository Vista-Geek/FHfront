import Label from "@components/Buttons/LabelButton";
import HouseInfoSection from "./HouseInfoSection";

interface HouseInfoProps {
  typeOfSale: Array<string>;
  houseSize: Array<string>;
  postData?(key: string, value: string): any;
}

export default function HouseInfo({
  typeOfSale,
  houseSize,
  postData,
}: HouseInfoProps) {
  const regularClasses =
    "shadow appearance-none border rounded w-full py-2 px-3 bg-purpleCust-bg sm:bg-purpleCust-dark text-white leading-tight border-purpleCust focus:border-purpleCust focus:outline-none focus:shadow-outline ";

  const addPostData = (inputName: string, content: string) => {
    postData(inputName, content);
  };

  // FAKE DATA
  const listOfSomething = ["uno", "dos", "tres"];

  return (
    <div className="mt-8 font-herbo">
      <HouseInfoSection labelFor="title" labelTitle="Title">
        <input
          className={regularClasses}
          id="title"
          type="text"
          placeholder="Your post title"
          onChange={(e) => addPostData("postTitle", e.target.value)}
        />
      </HouseInfoSection>
      <HouseInfoSection labelFor="price" labelTitle="Price">
        <input
          className={regularClasses}
          id="price"
          type="number"
          placeholder="House price"
          onChange={(e) => addPostData("postPrice", e.target.value)}
        />
      </HouseInfoSection>
      <HouseInfoSection labelFor="typeOfSale" labelTitle="Type of sale">
        {typeOfSale.map((item, index) => (
          <Label
            key={index}
            inputName="typeOfSale"
            itemName={item}
            postData={() => addPostData("typeOfSale", item)}
          />
        ))}
      </HouseInfoSection>
      <HouseInfoSection labelFor="location" labelTitle="Location">
        <select
          defaultValue="Select one"
          className={regularClasses}
          onChange={(e) => addPostData("location", e.target.value)}
        >
          <option hidden>Select one</option>
          {listOfSomething.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </HouseInfoSection>
      <HouseInfoSection labelFor="plotNumber" labelTitle="Plot Number">
        <select
          defaultValue="Select one"
          className={regularClasses}
          onChange={(e) => addPostData("plotNumber", e.target.value)}
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
            postData={() => addPostData("houseSize", item)}
          />
        ))}
      </HouseInfoSection>
      <HouseInfoSection labelFor="description" labelTitle="Description">
        <textarea
          name="description"
          id="description"
          // maxLength={}
          className={regularClasses + "h-32"}
          onChange={(e) => addPostData("postDescription", e.target.value)}
        ></textarea>
      </HouseInfoSection>
    </div>
  );
}
