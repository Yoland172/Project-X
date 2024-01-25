import styles from "./search.module.scss";
import SearchArrow from "../../../../assets/icon/SearchArrow";

interface searchProps {
  searchText: string;
  onSearchChange: (text: string) => void;
  onSearchClickButton: () => void;
}
const Search = ({
  onSearchChange,
  onSearchClickButton,
  searchText,
}: searchProps) => {
  
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.webflowStyleInput}>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(event) => onSearchChange(event.target.value)}
        ></input>
        <button type="submit" onClick={onSearchClickButton}>
          <SearchArrow width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default Search;
