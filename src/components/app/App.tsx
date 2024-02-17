import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import styles from "./App.module.scss";
import FilmPage from "../filmPage/FilmPage";
import HomePage from "../homePage/HomePage";
import SearchContext from "../../lib/contexts/SearchContext";
import { ROUTE_FILM_PAGE, ROUTE_HOME_PAGE } from "../../lib/constants";
import ThemeContext from "../../lib/contexts/ThemeContext";
import classNames from "classnames";
import { getThemeFromStorage } from "../../lib/helpers/themeHelper";

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const [theme, setTheme] = useState<string>(getThemeFromStorage());

  return (
    <div className={classNames(styles.App, theme && styles[theme])}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <SearchContext.Provider value={{ searchText, setSearchText }}>
          <Routes>
            <Route path={ROUTE_HOME_PAGE} element={<HomePage />} />
            <Route path={ROUTE_FILM_PAGE} element={<FilmPage />} />
            <Route path="*" element={<Navigate to={"/home"} />} />
          </Routes>
        </SearchContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
