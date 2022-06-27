import styles from "./searchBar.module.scss";

const SearchBar = ({ onSearchChange }) => (
  <input
    type="search"
    placeholder="search..."
    onChange={onSearchChange}
    className={styles.searchBar}
  />
);
export default SearchBar;
