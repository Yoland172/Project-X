import { useState } from "react";
import Search from "./Search";
import { getFilms } from "../../../api/requests";
import FilmList from "./FilmList";
import { FilmItemMainPage } from "../../../types/types";

const SearchContainer = () => {
  const [searchText, setSearchText] = useState<string>();
  const [filmList, setFilmList] = useState<FilmItemMainPage[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [filmsCount, setFilmsCount] = useState<number>(0);

  const [currentImage, setCurrentImage] = useState<string>("");

  const tryToFindFilmsByTyiping = (searchText: string) => {
    if (searchText) {
      getFilms(searchText, 1).then((res) => {
        if (res.Response === "True") {
          setFilmList(res.Search);
          setFilmsCount(res.totalResults);
          setPageNumber(1);
        } else {
          switch (res.Error) {
            case "Too many results.":
              console.log("tutu");
          }
        }
      });
    } else {
      setFilmList([]);
      setIsFetching(false);
      setFilmsCount(0);
    }
  };

  const tryFindFilmBySearch = () => {
    if (searchText) {
      setIsFetching(true);
      getFilms(searchText, 1).then((res) => {
        if (res.Response === "True") {
          setIsFetching(false);
          setFilmList(res.Search);
          setFilmsCount(res.totalResults);
          setPageNumber(1);
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
    <>
      <Search
        tryToFindFilmsByTyiping={tryToFindFilmsByTyiping}
        tryFindFilmBySearch={tryFindFilmBySearch}
        setSearchText={setSearchText}
      />
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
          if (searchText && (pageNumber + 0.1) * 10 - filmsCount <= 0) {
            console.log('NextPage')
            setIsFetching(true);
            getFilms(searchText, pageNumber + 1).then((res) => {
              if (res.Response === "True") {
                setIsFetching(false);
                setFilmList(res.Search);
                setPageNumber(pageNumber + 1);
              } else {
                setIsFetching(false);
                switch (res.Error) {
                  case "Too many results.":
                    console.log("tutu");
                }
              }
            });
          }
        }}
        prevPage={() => {
          if (searchText && pageNumber > 1) {
            console.log('prevPage')
            setIsFetching(true);
            getFilms(searchText, pageNumber - 1).then((res) => {
              if (res.Response === "True") {
                setIsFetching(false);
                setFilmList(res.Search);
                setPageNumber(pageNumber - 1);
              } else {
                setIsFetching(false);
                switch (res.Error) {
                  case "Too many results.":
                    console.log("tutu");
                }
              }
            });
          }
        }}
        pageNumber={pageNumber}
      />
    </>
  );
};

export default SearchContainer;