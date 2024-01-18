import styles from "./search.module.scss";
import SearchArrow from "../../../assets/icon/SearchArrow";

interface searchProps {
  tryToFindFilmsByTyiping: (text: string) => void;
  tryFindFilmBySearch: () => void;
  setSearchText: (setSearchText: string) => void;
  searchText: string;
}
const Search = ({
  tryToFindFilmsByTyiping,
  tryFindFilmBySearch,
  setSearchText,
  searchText,
}: searchProps) => {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.webflowStyleInput}>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(event) => {
            setSearchText(event.currentTarget.value);
            tryToFindFilmsByTyiping(event.currentTarget.value);
          }}
        ></input>
        <button type="submit" onClick={tryFindFilmBySearch}>
          <SearchArrow width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default Search;
