import {
  faBookmark,
  faPerson,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bookmarks = ({ bookmarksArray }) => {
  const truncateText = (text, limit) => {
    const strippedText = text.replace(/<\/?[^>]+(>|$)/g, "");
    if (strippedText.length <= limit) return strippedText;
    return strippedText.slice(0, limit) + " ...";
  };

  return (
    <section className="bookmarks">
      <ul>
        <li className="bookmark">
          <figure className="bookmark-image">
            <img src="https://img.spoonacular.com/recipes/716429-556x370.jpg" />
          </figure>
          <div className="bookmark-details">
            <h5>{`${"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs"
              .split(" ")
              .slice(0, 4)
              .join(" ")}...`}</h5>
            <ul>
              <li>
                <FontAwesomeIcon icon={faStopwatch} />
                <span>75 minutes</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPerson} />
                <span>4 Servings</span>
              </li>
            </ul>
            <p>
              {truncateText(
                `You can never have too many main course recipes, so give Pasta
              with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One
              serving contains <b>543 calories</b>, <b>17g of protein</b>, and
              <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe
              <b>covers 22%</b> of your daily requirements of vitamins and
              minerals. This recipe serves 2. A mixture of butter, white wine,
              pasta, and a handful of other ingredients are all it takes to make
              this recipe so yummy. 209 people have tried and liked this recipe.
              It is brought to you by fullbellysisters.blogspot.com. From
              preparation to the plate, this recipe takes approximately
              <b>45 minutes</b>. Taking all factors into account, this recipe
              <b>earns a spoonacular score of 83%</b>, which is tremendous. If
              you like this recipe, take a look at these similar recipes:
              <a href="https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187">
                Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
              </a>
              ,
              <a href="https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807">
                Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
              </a>
              , and
              <a href="https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669">
                Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
              </a>
              .`,
                500
              )}
            </p>
          </div>
          <FontAwesomeIcon icon={faBookmark} className="bookmark-icon" />
        </li>
        <li className="bookmark">
          <figure className="bookmark-image">
            <img src="https://img.spoonacular.com/recipes/716429-556x370.jpg" />
          </figure>
          <div className="bookmark-details">
            <h5>{`${"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs"
              .split(" ")
              .slice(0, 4)
              .join(" ")}...`}</h5>
            <ul>
              <li>
                <FontAwesomeIcon icon={faStopwatch} />
                <span>75 minutes</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPerson} />
                <span>4 Servings</span>
              </li>
            </ul>
            <p>
              {truncateText(
                `You can never have too many main course recipes, so give Pasta
              with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One
              serving contains <b>543 calories</b>, <b>17g of protein</b>, and
              <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe
              <b>covers 22%</b> of your daily requirements of vitamins and
              minerals. This recipe serves 2. A mixture of butter, white wine,
              pasta, and a handful of other ingredients are all it takes to make
              this recipe so yummy. 209 people have tried and liked this recipe.
              It is brought to you by fullbellysisters.blogspot.com. From
              preparation to the plate, this recipe takes approximately
              <b>45 minutes</b>. Taking all factors into account, this recipe
              <b>earns a spoonacular score of 83%</b>, which is tremendous. If
              you like this recipe, take a look at these similar recipes:
              <a href="https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187">
                Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
              </a>
              ,
              <a href="https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807">
                Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
              </a>
              , and
              <a href="https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669">
                Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
              </a>
              .`,
                500
              )}
            </p>
          </div>
          <FontAwesomeIcon icon={faBookmark} className="bookmark-icon" />
        </li>
        <li className="bookmark">
          <figure className="bookmark-image">
            <img src="https://img.spoonacular.com/recipes/716429-556x370.jpg" />
          </figure>
          <div className="bookmark-details">
            <h5>{`${"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs"
              .split(" ")
              .slice(0, 4)
              .join(" ")}...`}</h5>
            <ul>
              <li>
                <FontAwesomeIcon icon={faStopwatch} />
                <span>75 minutes</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPerson} />
                <span>4 Servings</span>
              </li>
            </ul>
            <p>
              {truncateText(
                `You can never have too many main course recipes, so give Pasta
              with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One
              serving contains <b>543 calories</b>, <b>17g of protein</b>, and
              <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe
              <b>covers 22%</b> of your daily requirements of vitamins and
              minerals. This recipe serves 2. A mixture of butter, white wine,
              pasta, and a handful of other ingredients are all it takes to make
              this recipe so yummy. 209 people have tried and liked this recipe.
              It is brought to you by fullbellysisters.blogspot.com. From
              preparation to the plate, this recipe takes approximately
              <b>45 minutes</b>. Taking all factors into account, this recipe
              <b>earns a spoonacular score of 83%</b>, which is tremendous. If
              you like this recipe, take a look at these similar recipes:
              <a href="https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187">
                Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
              </a>
              ,
              <a href="https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807">
                Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
              </a>
              , and
              <a href="https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669">
                Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
              </a>
              .`,
                500
              )}
            </p>
          </div>
          <FontAwesomeIcon icon={faBookmark} className="bookmark-icon" />
        </li>
        <li className="bookmark">
          <figure className="bookmark-image">
            <img src="https://img.spoonacular.com/recipes/716429-556x370.jpg" />
          </figure>
          <div className="bookmark-details">
            <h5>{`${"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs"
              .split(" ")
              .slice(0, 4)
              .join(" ")}...`}</h5>
            <ul>
              <li>
                <FontAwesomeIcon icon={faStopwatch} />
                <span>75 minutes</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPerson} />
                <span>4 Servings</span>
              </li>
            </ul>
            <p>
              {truncateText(
                `You can never have too many main course recipes, so give Pasta
              with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One
              serving contains <b>543 calories</b>, <b>17g of protein</b>, and
              <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe
              <b>covers 22%</b> of your daily requirements of vitamins and
              minerals. This recipe serves 2. A mixture of butter, white wine,
              pasta, and a handful of other ingredients are all it takes to make
              this recipe so yummy. 209 people have tried and liked this recipe.
              It is brought to you by fullbellysisters.blogspot.com. From
              preparation to the plate, this recipe takes approximately
              <b>45 minutes</b>. Taking all factors into account, this recipe
              <b>earns a spoonacular score of 83%</b>, which is tremendous. If
              you like this recipe, take a look at these similar recipes:
              <a href="https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187">
                Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
              </a>
              ,
              <a href="https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807">
                Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
              </a>
              , and
              <a href="https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669">
                Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
              </a>
              .`,
                500
              )}
            </p>
          </div>
          <FontAwesomeIcon icon={faBookmark} className="bookmark-icon" />
        </li>
      </ul>
    </section>
  );
};

export default Bookmarks;
