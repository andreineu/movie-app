// import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";

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
function App() {
  return (
    <div className="site-wrapper dark:bg-gray-800 dark:text-gray-200">
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <div className="content-wrapper mt-16">
            <Routes>
              <Route path="/" element={<MainPage />} />
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
