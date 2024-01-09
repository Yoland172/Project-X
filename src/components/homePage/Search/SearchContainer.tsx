import {useState } from "react";
import Search from "./Search";
import { getFilms } from "../../../api/requests";
import FilmList from "./FilmList";


const SearchContainer = () => {
  const [searchText, setSearchText] = useState<string>();
  const [filmList, setFilmList] = useState<any>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [filmsCount, setFilmsCount] = useState<number>(0);


  const [currentImage, setCurrentImage] = useState<string>('');

  return (
    <>
      <Search
        tryToFindFilmsByTyiping={(searchText: string) => {
          if (searchText) {
            getFilms(searchText, 1).then((res) => {
              if (res.Response == "True") {
                setFilmList(res.Search);
                setFilmsCount(res.totalResults);
                setPageNumber(1);
              } else {
                switch (res.Error) {

                  case 'Too many results.': console.log("tutu")
                }
              }
            })
          }
        }}

        tryFindFilmBySearch={() => {
          if (searchText) {
            setIsFetching(true)
            getFilms(searchText, 1).then((res) => {
              if (res.Response == "True") {
                setIsFetching(false);
                setFilmList(res.Search);
                setFilmsCount(res.totalResults)
                setPageNumber(1);
              } else {
                setIsFetching(false)
                switch (res.Error) {

                  case 'Too many results.': console.log("tutu")
                }
              }
            })
          }
        }}
        setFilmList={setFilmList} setIsFetching={setIsFetching} filmList={filmList}
        setSearchText={setSearchText} removeFilmsCount={() => setFilmsCount(0)}
      />
      <FilmList currentImage={currentImage} filmList={filmList} isFetching={isFetching}
        setCurrentImage={(currentImage: string) => { setCurrentImage(currentImage) }}
        removeCurrentImage={() => { setCurrentImage("") } } filmsCount={filmsCount}

        nextPage = {() => {
          if (searchText) {
            setIsFetching(true)
            getFilms(searchText, pageNumber+1).then((res) => {
              if (res.Response == "True") {
                setIsFetching(false);
                setFilmList(res.Search);
                setPageNumber(pageNumber+1);
              } else {
                setIsFetching(false)
                switch (res.Error) {
                  case 'Too many results.': console.log("tutu")
                }
              }
            })
          }
        }}

        prevPage = {() => {
          if (searchText && pageNumber>1) {
            setIsFetching(true)
            getFilms(searchText, pageNumber-1).then((res) => {
              if (res.Response == "True") {
                setIsFetching(false);
                setFilmList(res.Search);
                setPageNumber(pageNumber-1);
              } else {
                setIsFetching(false)
                switch (res.Error) {
                  case 'Too many results.': console.log("tutu")
                }
              }
            })
          }
        }}

        pageNumber={pageNumber}
      />

    </>
  )
}

export default SearchContainer;