import { useState } from "react";
import FilmListContainer from "./filmList/FilmListContainer";
import SearchContainer from "./search/SearchContainer";
import { FilmItemMainPage } from "../../../types/uiTypes";
import usePagination from "../../../lib/hooks/usePagination";

const FilmSearchContainer = () => {
  const [filmList, setFilmList] = useState<FilmItemMainPage[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [filmsCount, setFilmsCount] = useState<number>(0);
  const { resetPageState, currentPage, setNextPage, setPreviousPage } = usePagination(1);

  return (
    <>
      <SearchContainer
        setFilmsCount={(filmsCount: number) => setFilmsCount(filmsCount)}
        setIsFetching={(status: boolean) => setIsFetching(status)}
        setFilmList={(filmList: FilmItemMainPage[]) => setFilmList(filmList)}
        resetPageState={resetPageState}
      />
      <FilmListContainer
        filmList={filmList}
        setFilmList={(filmList: FilmItemMainPage[]) => setFilmList(filmList)}
        isFetching={isFetching}
        setIsFetching={(status: boolean) => setIsFetching(status)}
        filmsCount={filmsCount}
        currentPage={currentPage}
        setNextPage={setNextPage}
        setPreviousPage={setPreviousPage}
      />
    </>
  );
};

export default FilmSearchContainer;
