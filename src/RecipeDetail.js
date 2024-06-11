import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStopwatch,
  faCircleMinus,
  faCirclePlus,
  faCheck,
  faSpinner,
  faPerson,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const RecipeDetail = () => {
  const { meal, mealStatus, handleBookmark } = useOutletContext();
  const [serving, setServing] = useState(1);
  console.log(meal);

  const handleServingCount = (operation) => {
    if (operation === "decrement") {
      setServing((prevCount) => (prevCount <= 1 ? 1 : prevCount++));
    }
    if (operation === "increment") {
      console.log("heyy");
      setServing((prevCount) => prevCount + 1);
    }
  };

  const bookmarkMeal = () => {};

  return (
    <div className="recipe">
      {mealStatus === "idle" && (
        <h3 style={{ textAlign: "center" }}>
          Start searching to get recipes...
        </h3>
      )}
      {mealStatus === "Error" && (
        <h3 style={{ textAlign: "center" }}>Oops there is some error...</h3>
      )}
      {mealStatus === "loading" && (
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          size="2xl"
          className="loader-svg"
        />
      )}
      {mealStatus === "loaded" && (
        <>
          <figure>
            <img src={meal.image} />
            <h2>
              <span>{meal.title}</span>
            </h2>
          </figure>
          <div className="recipe-details">
            <ul>
              <li>
                <FontAwesomeIcon icon={faStopwatch} />
                <span>{meal.readyInMinutes} minutes</span>
              </li>
              <li>
                {/* <FontAwesomeIcon icon={faPerson} /> */}
                <span>{meal.servings} Servings</span>
                <FontAwesomeIcon
                  icon={faCircleMinus}
                  onClick={() => handleServingCount("decrement")}
                />
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  onClick={() => handleServingCount("increment")}
                />
              </li>
              <li>
                <FontAwesomeIcon icon={faThumbsUp} />
                {meal.aggregateLikes}
              </li>
            </ul>
            <p>
              <span>Bookmark</span>
              <FontAwesomeIcon icon={faBookmark} onClick={bookmarkMeal} />
            </p>
          </div>
          <div className="recipe-ingredients">
            <h3>RECIPE INGREDIENTS</h3>
            <ul>
              {meal?.extendedIngredients?.map((ingredient) => {
                return (
                  <li>
                    <FontAwesomeIcon icon={faCheck} />
                    <span>
                      {ingredient.amount} {ingredient.unit} {ingredient.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="recipe-directions">
            <h3>How to cook it</h3>
            <p>
              Ready to cook? Choose your preferred way to follow the recipe!
            </p>

            <a
              href={meal.sourceUrl}
              className="recipe-link btn"
              target="_blank"
            >
              Read Full Recipe
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetail;
