import { Navigate, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import styles from "./App.module.scss";
import FilmPage from "../filmPage/FilmPage";
import HomePage from "../homePage/HomePage";
import SearchContext from "../../lib/contexts/SearchContext";
import { ROUTE_FILM_PAGE, ROUTE_HOME_PAGE } from "../../lib/constants";

function App() {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className={styles.App}>
      <SearchContext.Provider value={{ searchText, setSearchText }}>
        <Routes>
          <Route path={ROUTE_HOME_PAGE} element={<HomePage />} />
          <Route path={ROUTE_FILM_PAGE} element={<FilmPage />} />
          <Route path="*" element={<Navigate to={"/home"} />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
