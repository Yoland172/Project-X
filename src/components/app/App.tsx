import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import FilmPage from "../filmPage/FilmPage";
import HomePage from "../homePage/HomePage";

function App() {
  return (
    <div className={styles.App}>
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
    </div>
  );
}

export default App;
