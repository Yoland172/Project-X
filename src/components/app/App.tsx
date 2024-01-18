import { Navigate, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import styles from "./App.module.scss";
import FilmPage from "../filmPage/FilmPage";
import HomePage from "../homePage/HomePage";

export const SearchContext = React.createContext<any>("");

function App() {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className={styles.App}>
      <SearchContext.Provider value={{ searchText, setSearchText }}>
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route path="/film/:id" element={<FilmPage />} />
          <Route path="*" element={<Navigate to={"/home"} />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
