import styles from "./search.module.scss";
import SearchArrow from "../../../ui/icon/SearchArrow";
import { useRef } from "react";
import classNames from "classnames";

interface SearchProps {
  searchText: string;
  onSearchChange: (text: string) => void;
  onSearchClickButton: () => void;
  theme?: string
}
const Search = ({
  onSearchChange,
  onSearchClickButton,
  searchText,
  theme
}: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        inputRef.current?.blur();
      }}
    >
      <div className={styles.searchBarContainer}>
        <div className={classNames(styles.webflowStyleInput, theme && styles[theme])}>
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
