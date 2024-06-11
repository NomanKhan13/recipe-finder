import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOutletContext } from "react-router-dom";

const SearchResults = () => {
  const { recipes, recipesStatus, handleMeal } = useOutletContext();

  return (
    <div className="search-results">
      {recipesStatus === "idle" && null}
      {recipesStatus === "Error" && (
        <h3 style={{ textAlign: "center" }}>Oops there is some error...</h3>
      )}
      {recipesStatus === "loading" && (
        <FontAwesomeIcon icon={faSpinner} spin size="2xl" />
      )}
      {recipesStatus === "loaded" && (
        <ul className="results">
          {recipes.map((recipe) => {
            return (
              <li key={recipe.id} onClick={() => handleMeal(recipe.id)}>
                <figure>
                  <img src={recipe.image} />
                </figure>
                <span>{recipe.title}</span>
              </li>
            );
          })}
        </ul>
      )}

      <div className="pagination">
        <button className="btn">Page 1</button>
        <button className="btn">Page 2</button>
      </div>
      <p className="copyright">
        &copy Copyright by
        <a href="https://twitter.com/nomanstwt" target="_blank">
          Noman Khan
        </a>
        . You can use it. Don't claim as your own.
      </p>
    </div>
  );
};
export default SearchResults;
