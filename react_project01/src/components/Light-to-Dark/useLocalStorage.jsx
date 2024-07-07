//This is our Custom Hook that we will be using to store the theme in local storage area
import { useState } from "react";
import { useEffect } from "react";

export default function useLocalStorage(key, defaultValue) {
  //This will extract the currentValue from the localStorage and will set in value
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      //If everything is good we take the current value from our local storage with given key or take it from string value of defaultValue
      //If the key does not exist in local storage, it falls back to the defaultValue (converted to a string)
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error.message);
      currentValue = defaultValue; //if there is any error we set this to the default value received
    }

    return currentValue;
  });

  //Now saving the extracted value in localStorage with key as given
  //Everytime the key or value changes useEffect will re render the page
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  //returning the [value,setValue]
  return [value, setValue];
}
