//In this project we have created a custom hook that stores the theme in the local storage and based on that we update our style

//This is our custom hook
import useLocalStorage from "./useLocalStorage";
import "./styles.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  function handleThemeChange() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  console.log(theme);
  return (
    // Here we will manage css with data-theme property
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello there !!</p>
        <button onClick={handleThemeChange}>Change Theme</button>
      </div>
    </div>
  );
}
