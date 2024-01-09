import SearchArrow from "../../../assets/icon/SearchArrow";
import styles from "./search.module.scss";
import {FilmItemMainPage} from "../../../types/types";


interface searchProps {
  tryToFindFilmsByTyiping: (text:string) => void,
  setFilmList: (array: any) => void,
  filmList:FilmItemMainPage[],
  setIsFetching:(isFetching:boolean) => void,
  tryFindFilmBySearch:()=>void,
  setSearchText:(setSearchText:string) => void
  removeFilmsCount:() => void
}
const Search = ({ tryToFindFilmsByTyiping, setFilmList,filmList,setIsFetching,tryFindFilmBySearch,setSearchText,removeFilmsCount }: searchProps) => {
  return (<div className={styles.searchBarContainer}>
    <div className={styles.webflowStyleInput}>
      <input type="text" placeholder="Search..." onChange={(event) => {
          setSearchText(event.target.value)
         if ( event.target.value)
         { tryToFindFilmsByTyiping(event.target.value)} 
         else {
        setFilmList([]);
        setIsFetching(false);
        removeFilmsCount();
      }
      }}></input>
      <button type="submit" onClick={()=> {tryFindFilmBySearch()}}><SearchArrow /></button>
    </div>
  </div>)
}

export default Search;


const test = () => {
  return (2)
}

const x: ReturnType<typeof test> = 9;