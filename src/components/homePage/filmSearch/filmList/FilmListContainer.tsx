import { useContext, useState } from "react";
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
}

const FilmListContainer = ({
  filmList,
  setFilmList,
  isFetching,
  setIsFetching,
  filmsCount,
}: FilmListContainerProp) => {
  const { searchText } = useContext(SearchContext);

  const [currentImage, setCurrentImage] = useState<string>("");

  const checkIfHasNextPage = () => (currentPage + 0.1) * 10 - filmsCount <= 0;
  const checkIfHasPreviousPage = () => currentPage > 1;

  const { currentPage, setNextPage, setPreviousPage} =
    usePagination(1);

    

  const nextPage = () => {
    if (searchText && checkIfHasNextPage()) {
      setIsFetching(true);
      getFilms(searchText, currentPage + 1).then((res) => {
        if (res.Response === "True") {
          setIsFetching(false);
          setFilmList(res.Search);
          setNextPage();
        } else {
          setIsFetching(false);
          switch (res.Error) {
            case "Too many results.":
              console.log("tutu");
          }
        }
      });
    }
  };

  const prevPage = () => {
    if (searchText && checkIfHasPreviousPage()) {
      setIsFetching(true);
      getFilms(searchText, currentPage - 1).then((res) => {
        if (res.Response === "True") {
          setIsFetching(false);
          setFilmList(res.Search);
          setPreviousPage();
        } else {
          setIsFetching(false);
          switch (res.Error) {
            case "Too many results.":
              console.log("tutu");
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
      nextPage={nextPage}
      prevPage={prevPage}
      pageNumber={currentPage}
    />
  );
};

export default FilmListContainer;
