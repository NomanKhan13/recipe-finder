import {
  faBookmark,
  faPerson,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOutletContext } from "react-router-dom";

const Bookmarks = () => {
  const { bookmarkedMeals, removeBookmark } = useOutletContext();
  const truncateText = (text, limit) => {
    const strippedText = text.replace(/<\/?[^>]+(>|$)/g, "");
    if (strippedText.length <= limit) return strippedText;
    return strippedText.slice(0, limit) + " ...";
  };

  return (
    <section className="bookmarks">
      {!bookmarkedMeals.length && (
        <h2 style={{ textAlign: "center" }}>No Bookmarked Meals</h2>
      )}
      <ul>
        {bookmarkedMeals.map((bookmarkedMeal) => {
          return (
            <li className="bookmark">
              <figure className="bookmark-image">
                <img src={bookmarkedMeal.image} />
              </figure>
              <div className="bookmark-details">
                <h5>{`${bookmarkedMeal.title
                  .split(" ")
                  .slice(0, 4)
                  .join(" ")}...`}</h5>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faStopwatch} />
                    <span>{bookmarkedMeal.readyInMinutes} minutes</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPerson} />
                    <span>{bookmarkedMeal.servings} Servings</span>
                  </li>
                </ul>
                <p>{truncateText(bookmarkedMeal.summary, 500)}</p>
              </div>
              <FontAwesomeIcon
                icon={faBookmark}
                className="bookmark-icon"
                onClick={(e) => removeBookmark(bookmarkedMeal)}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Bookmarks;
