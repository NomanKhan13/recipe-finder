import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import RecipeDetail from "./RecipeDetail";
import Header from "./Header";
import SearchResults from "./SearchResults";
import useSearchResults from "./useSearchResults";
import useMeal from "./useMeal";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Bookmarks from "./Bookmarks";
import ErrorPage from "./ErrorPage";

const App = () => {
  const [search, setSearch] = useState("");
  const [mealId, setMealId] = useState("");

  const [recipes, recipesStatus] = useSearchResults(search);
  const [meal, mealStatus] = useMeal(mealId);

  const handleSearch = (term) => setSearch(term);
  const handleMeal = (id) => setMealId(id);

  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmark = (bookmarkId) => {
    const bookmarksCopy = [...bookmarks];
    bookmarksCopy.push(bookmarkId);
    setBookmarks(bookmarksCopy);
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
  {
    path: "/bookmarks",
    element: <Bookmarks />,
  },
]);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router={router} />);
