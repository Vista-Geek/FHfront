// custom function to transform house value
export const convertStringToCurrency = (currency: string) => {
  const arr = currency.split("").reverse();
  const newArray: string[] = [];
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    newArray.push(arr[index]);
    if (count === 2) {
      if (arr.length - 1 === index) break;
      newArray.push(",");
      count = 0;
    } else {
      count++;
    }
  }
  return newArray.reverse().join("");
};
