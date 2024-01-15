import SearchArrow from "../../../assets/icon/SearchArrow";
import styles from "./search.module.scss";
interface searchProps {
  tryToFindFilmsByTyiping: (text: string) => void;
  tryFindFilmBySearch: () => void;
  setSearchText: (setSearchText: string) => void;
}
const Search = ({
  tryToFindFilmsByTyiping,
  tryFindFilmBySearch,
  setSearchText,
}: searchProps) => {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.webflowStyleInput}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchText(event.target.value);
            tryToFindFilmsByTyiping(event.target.value);
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
