// import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/UI/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import ShowPage from "./pages/ShowPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/UI/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Browse from "./pages/Browse";
import NotFoundPage from "./pages/NotFoundPage";
// dark bg-gray-800 text-white
function App() {
  const darkThemeOff = () => {
    let element = document.getElementById("root");
    element.classList.remove("dark");
  }
  const darkThemeOn = () => {
    let element = document.getElementById("root");
    element.classList.add("dark");
  }
  return (
    <div className="site-wrapper dark:bg-gray-800 dark:text-gray-200">
      <BrowserRouter>
        <ScrollToTop>
          <Header themeHandlerOn={darkThemeOn} themeHandlerOff={darkThemeOff}/>
          <div className="content-wrapper mt-16">
            {/* <Movie /> */}
            <Routes>
              <Route path="/" element={<MainPage />} />
              {/* <Route path="/movie" element={} */}
              <Route path="/movie/:movieID" element={<MoviePage />} />
              <Route path="/tv/:movieID" element={<ShowPage />} />
              <Route path="/search/:query" element={<SearchPage />} />

              <Route path="/Browse" element={<Browse />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
