import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import FilmPage from "../filmPage/FilmPage";
import HomePage from "../homePage/HomePage";
import React, { useState } from "react";

export const SearchContext = React.createContext<any>("");

function App() {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <div className={styles.App}>
        <SearchContext.Provider value={{searchText:"Batman", setSearchText}}>
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
