import { useState } from "react";
import FilmListContainer from "./filmList/FilmListContainer";
import SearchContainer from "./search/SearchContainer";
import { FilmItemMainPage } from "../../../types/uiTypes";

const FilmSearchContainer = () => {
  const [filmList, setFilmList] = useState<FilmItemMainPage[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [filmsCount, setFilmsCount] = useState<number>(0);

  return (
    <>
      <SearchContainer
        setFilmsCount={(filmsCount: number) => setFilmsCount(filmsCount)}
        setIsFetching={(status: boolean) => setIsFetching(status)}
        setFilmList={(filmList: FilmItemMainPage[]) => setFilmList(filmList)}
      />
      <FilmListContainer
        filmList={filmList}
        setFilmList={(filmList: FilmItemMainPage[]) => setFilmList(filmList)}
        isFetching={isFetching}
        setIsFetching={(status: boolean) => setIsFetching(status)}
        filmsCount={filmsCount}
      />
    </>
  );
};

export default FilmSearchContainer;
