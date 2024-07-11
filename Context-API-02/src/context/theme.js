//Better Approach for production code as everything is done in one file
import { createContext, useContext } from "react";

//Creating the Context
export const ThemeContext = createContext({
  //In context we can have variables as well as methods
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

//Making a provider for the context
export const ThemeProvider = ThemeContext.Provider;

//This is custom hook that returns useContext to us
export default function useTheme() {
  return useContext(ThemeContext);
}
