import { useContext, useEffect } from "react";
import Search from "./Search";
import { getFilms } from "../../../../api/requests";
import { FilmItemMainPage } from "../../../../types/uiTypes";
import usePagination from "../../../../lib/hooks/usePagination";
import SearchContext from "../../../../lib/contexts/SearchContext";
import ThemeContext from "../../../../lib/contexts/ThemeContext";

interface SerachContainerProp {
  setFilmList: (filmList: FilmItemMainPage[]) => void;
  setFilmsCount: (filmsCounet: number) => void;
  setIsFetching: (status: boolean) => void;
  resetPageState: () => void;
}

const SearchContainer = ({
  setFilmList,
  setFilmsCount,
  setIsFetching,
  resetPageState,
}: SerachContainerProp) => {
  const { searchText, setSearchText } = useContext(SearchContext);
  const {theme} =useContext(ThemeContext);

  useEffect(() => {
    tryFindFilmBySearch();
  }, []);

  const findFilms = (
    page: number,
    searchTextFromInnput: string,
    setIsFetching?: (status: boolean) => void | null
  ) => {
    if (setIsFetching) setIsFetching(true);
    getFilms(searchTextFromInnput, page).then((res) => {
      if (res.Response === "True") {
        if (setIsFetching) setIsFetching(false);
        setFilmList(res.Search);
        setFilmsCount(res.totalResults);
        resetPageState();
      } else {
        if (setIsFetching) setIsFetching(false);
        switch (res.Error) {
          case "Too many results.":
            console.log("error");
        }
      }
    });
  };

  const tryToFindFilmsByTyping = (searchText: string) => {
    if (searchText) {
      findFilms(1, searchText);
    } else {
      setFilmList([]);
      setIsFetching(false);
      setFilmsCount(0);
    }
  };

  const tryFindFilmBySearch = () => {
    if (searchText) {
      findFilms(1, searchText, setIsFetching);
    }
  };

  return (
    <Search
      searchText={searchText}
      onSearchChange={(text) => {
        setSearchText(text);
        tryToFindFilmsByTyping(text);
      }}
      onSearchClickButton={tryFindFilmBySearch}
      theme={theme}
    />
  );
};

export default SearchContainer;
