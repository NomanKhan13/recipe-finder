import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <FontAwesomeIcon icon={faUtensils} />
          <span>ForkIt</span>
        </Link>
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
      </form>
      <div className="bookmark-list">
        <Link to="/bookmarks">
          <FontAwesomeIcon icon={faBookmark} size="lg" />
          <span>Bookmark</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
