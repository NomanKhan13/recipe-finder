import { useEffect, useState } from "react";

const useSearchResults = (searchTerm) => {
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    const fetchRecipes = async () => {
      if (!searchTerm) return;
      try {
        setStatus("loading");
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=1cece58df79445ab850176a7af6a6c92`
        );
        if (!response.ok) {
          throw new Error("Request failed");
        }
        const data = await response.json();
        setResults(data.results);
        setStatus("loaded");
      } catch (err) {
        console.log("Error", err);
        setStatus("error");
      }
    };
    fetchRecipes();
  }, [searchTerm]);

  return [results, status];
};

export default useSearchResults;
