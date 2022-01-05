import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-32 bg-indigo-900 dark:bg-gray-900 text-white text-xl font-semibold flex ">
      <nav className="w-[800px] mx-auto flex items-center justify-between">
        <a href="https://www.themoviedb.org/">
          <img
            className="w-40"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="TMDB Logo"
          />
          <span>Made with TMDB API</span>
        </a>
        <ul className="flex gap-4 ">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
