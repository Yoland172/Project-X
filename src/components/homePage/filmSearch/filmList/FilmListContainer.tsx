import { useContext, useEffect, useState } from "react";
import FilmList from "./FilmList";
import usePagination from "../../../../lib/hooks/usePagination";
import SearchContext from "../../../../lib/contexts/SearchContext";
import { getFilms } from "../../../../api/requests";
import { FilmItemMainPage } from "../../../../types/uiTypes";

interface FilmListContainerProp {
  filmList: FilmItemMainPage[];
  setFilmList: (filmList: FilmItemMainPage[]) => void;
  isFetching: boolean;
  setIsFetching: (status: boolean) => void;
  filmsCount: number;
  currentPage: number;
  setNextPage: () => void;
  setPreviousPage: () => void;
}

const FilmListContainer = ({
  filmList,
  setFilmList,
  isFetching,
  setIsFetching,
  filmsCount,
  currentPage,
  setNextPage,
  setPreviousPage,
}: FilmListContainerProp) => {
  const { searchText } = useContext(SearchContext);

  const [currentImage, setCurrentImage] = useState<string>("");

  const checkIfHasNextPage = () => (currentPage + 0.1) * 10 - filmsCount <= 0;
  const checkIfHasPreviousPage = () => currentPage > 1;

  useEffect(() => {
    filmList.length === 0 && setCurrentImage("");
  }, [filmList]);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  const pageNavigate = (
    page: number,
    paginationCondition: () => boolean,
    setPage: () => void
  ) => {
    if (searchText && paginationCondition()) {
      setIsFetching(true);
      getFilms(searchText, page).then((res) => {
        if (res.Response === "True") {
          setIsFetching(false);
          setFilmList(res.Search);
          setPage();
        } else {
          setIsFetching(false);
          switch (res.Error) {
            case "Too many results.":
              console.log("error");
          }
        }
      });
    }
  };

  return (
    <FilmList
      currentImage={currentImage}
      filmList={filmList}
      isFetching={isFetching}
      setCurrentImage={(currentImage: string) => {
        setCurrentImage(currentImage);
      }}
      removeCurrentImage={() => {
        setCurrentImage("");
      }}
      filmsCount={filmsCount}
      nextPage={() => {
        pageNavigate(currentPage + 1, checkIfHasNextPage, setNextPage);
      }}
      prevPage={() => {
        pageNavigate(currentPage - 1, checkIfHasPreviousPage, setPreviousPage);
      }}
      pageNumber={currentPage}
    />
  );
};

export default FilmListContainer;
