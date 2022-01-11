import { useEffect } from "react";

const HeaderThemeButtons = () => {
  let theme;
  useEffect(() => {
    theme = localStorage.getItem("react-movie-theme")
      ? (theme = localStorage.getItem("react-movie-theme"))
      : null;

    theme === "dark" ? darkThemeOn() : darkThemeOff();
  }, []);
  const darkThemeOff = () => {
    let element = document.getElementById("root");
    localStorage.setItem("react-movie-theme", "light");
    element.classList.remove("dark");
  };
  const darkThemeOn = () => {
    let element = document.getElementById("root");
    localStorage.setItem("react-movie-theme", "dark");
    element.classList.add("dark");
  };
  return (
    <div className="flex items-center">
      <p className="text-sm">Site Theme</p>
      <button
        className="bg-zinc-200 h-5 w-5 m-1  font-sm rounded  text-zinc-900"
        onClick={darkThemeOff}
      ></button>
      <button
        className="bg-zinc-600 h-5 w-5 m-1 font-sm rounded text-zinc-300"
        onClick={darkThemeOn}
      ></button>
    </div>
  );
};

export default HeaderThemeButtons;
