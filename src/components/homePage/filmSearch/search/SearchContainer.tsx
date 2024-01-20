import { useContext, useEffect} from "react";
import Search from "./Search";
import { getFilms } from "../../../../api/requests";
import { FilmItemMainPage } from "../../../../types/uiTypes";
import usePagination from "../../../../lib/hooks/usePagination";
import SearchContext from "../../../../lib/contexts/SearchContext";

interface SerachContainerProp {
  setFilmList: (filmList: FilmItemMainPage[]) => void;
  setFilmsCount: (filmsCounet:number) => void,
  setIsFetching:(status:boolean) => void
}

const SearchContainer = ({ setFilmList,setFilmsCount,setIsFetching }: SerachContainerProp) => {
  const { searchText, setSearchText } = useContext(SearchContext);

  useEffect(() => {
    tryFindFilmBySearch();
  }, []);

  const { resetPageState } =
  usePagination(1);

  const tryToFindFilmsByTyping = (searchText: string) => {
    if (searchText) {
      getFilms(searchText, 1).then((res) => {
        if (res.Response === "True") {
          setFilmList(res.Search);
          setFilmsCount(res.totalResults);
          resetPageState();
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
          resetPageState();
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
      <Search
        searchText={searchText}
        onSearchChange={(text) => {
          setSearchText(text);
          tryToFindFilmsByTyping(text);
        }}
        onSearchClickButton={tryFindFilmBySearch}
      />
  );
};

export default SearchContainer;
