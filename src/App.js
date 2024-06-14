import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import RecipeDetail from "./RecipeDetail";
import Header from "./Header";
import SearchResults from "./SearchResults";
import useSearchResults from "./useSearchResults";
import useMeal from "./useMeal";
import {
  createBrowserRouter,
  Outlet,
  redirect,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Bookmarks from "./Bookmarks";
import ErrorPage from "./ErrorPage";

const App = () => {
  const [search, setSearch] = useState("");
  const [mealId, setMealId] = useState("");

  const [recipes, recipesStatus] = useSearchResults(search);
  const [meal, mealStatus] = useMeal(mealId);
  const navigate = useNavigate();
  const handleSearch = (term) => {
    setMealId();
    setSearch(term);
    navigate("/");
  };
  const handleMeal = (id) => setMealId(id);

  const [bookmarkedMeals, setBookmarks] = useState([]);
  const handleBookmark = (bookmarkMeal) => {
    const bookmarksCopy = [...bookmarkedMeals];
    bookmarksCopy.push(bookmarkMeal);
    const uniqueBookmarks = new Set(bookmarksCopy);
    setBookmarks([...uniqueBookmarks]);
  };
  const removeBookmark = (bookmarkMeal) => {
    const bookmarksCopy = [...bookmarkedMeals];
    const filteredBookmarks = bookmarksCopy.filter(
      (b) => b.id !== bookmarkMeal.id
    );
    setBookmarks(filteredBookmarks);
    console.log(filteredBookmarks);
  };

  return (
    <section>
      <div className="container">
        <Header onSearchSubmit={handleSearch} />
        <Outlet
          context={{
            recipes,
            recipesStatus,
            handleMeal,
            meal,
            mealStatus,
            handleBookmark,
            bookmarkedMeals,
            removeBookmark,
          }}
        />
      </div>
    </section>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <>
            <SearchResults />
            <RecipeDetail />
          </>
        ),
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router={router} />);
