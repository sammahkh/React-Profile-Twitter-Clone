import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
