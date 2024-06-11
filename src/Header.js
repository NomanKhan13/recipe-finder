import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = ({ onSearchSubmit }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchTerm = formData.get("search");
    onSearchSubmit(searchTerm);
    e.target.reset();
  };

  return (
    <div className="header">
      {
        // logo
        // icon(utensils) text
        // searchbar
        // input icon(search)
        // Bookmark
        // icon(bookmark) text
      }
      <h1>
        <FontAwesomeIcon icon={faUtensils} />
        ForkIt
      </h1>
      <form className="search-form" onSubmit={handleFormSubmit}>
        <input
          placeholder="Search over 100 recipes... "
          autoFocus
          name="search"
        />
        <button
          className="btn"
          style={{ display: "inline-block", borderRadius: "0 2rem 0 0 " }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {/* <div className="autocomplete-search">
          <ul>
            {["1", "1", "1", "1", "1", "1"].map((i) => (
              <li>Chicken</li>
            ))}
          </ul>
        </div> */}
      </form>
      <div className="bookmark-list">
        <FontAwesomeIcon icon={faBookmark} size="lg" />
        Bookmark
      </div>
    </div>
  );
};

export default Header;
