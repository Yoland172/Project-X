import styles from "./search.module.scss";
import SearchArrow from "../../../../assets/icon/SearchArrow";
import { useRef } from "react";

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
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        inputRef.current?.blur();
      }}
    >
      <div className={styles.searchBarContainer}>
        <div className={styles.webflowStyleInput}>
          <input
            ref={inputRef}
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
    </form>
  );
};

export default Search;
