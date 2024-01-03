import { useEffect, useState } from "react";
import Search from "./Search";
import { getFilms } from "../../api/requests";
import FilmList from "./FilmList";
import Skeleton from "../../Helpers/Skeleton/Skeleton";
import FilmItem from "../../types/types";


const SearchContainer = () => {
  const [searchText, setSearchText] = useState<string>();
  const [filmList, setFilmList] = useState<any>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [currentImage, setCurrentImage] = useState<string>('')

  useEffect(() => {
    if (filmList){
    if(filmList.length != 0) {
      console.log('tutu');
    }
  }
  }, [filmList])

  return (
    <>
      <Search
        tryToFindFilmsByTyiping={(searchText: string) => {
          if (searchText) {
            getFilms(searchText, 1).then((res) => {
              if (res.Response == "True") {
                setFilmList(res.Search);
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
        setSearchText={setSearchText}
      />
      <FilmList currentImage={currentImage} filmList={filmList} isFetching={isFetching}
        setCurrentImage={(currentImage: string) => { setCurrentImage(currentImage) }}
        removeCurrentImage={() => { setCurrentImage("") }}
      />

    </>
  )
}

export default SearchContainer;