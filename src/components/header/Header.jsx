import { Link } from "react-router-dom";
import HeaderForm from "./HeaderForm";

import HeaderThemeButtons from "./HeaderThemeButtons";

const Header = () => {
  return (
    <header className=" fixed inset-x-0 top-0 bg-indigo-900 dark:bg-gray-800 text-white z-50 shadow-2xl ">
      <div className="site-container flex justify-between h-16 items-center">
        <div className="flex items-center gap-10">
          <Link to="/" className="logo text-2xl font-bold">
            Movie-app
          </Link>
          <ul className="flex gap-10 font-semibold">
            <li>
              <Link to="/browse">Browse</Link>
            </li>
          </ul>
        </div>
        <HeaderThemeButtons />
        <HeaderForm />
      </div>
    </header>
  );
};

export default Header;
