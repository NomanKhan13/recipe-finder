import { useEffect, useState } from "react";

const useMeal = (recipeId) => {
  const [meal, setMeal] = useState({});
  const [mealStatus, setMealStatus] = useState("idle");
  useEffect(() => {
    const fetchMeal = async (recipeId) => {
      if (!recipeId) {
        setMealStatus("idle");
        return;
      }
      try {
        setMealStatus("loading");
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=1cece58df79445ab850176a7af6a6c92`
        );
        if (!response.ok) {
          throw new Error("Fetch meal failed");
        }
        const data = await response.json();
        setMeal(data);
        setMealStatus("loaded");
      } catch (err) {
        console.log("error", err);
        setMealStatus("error");
      }
    };
    fetchMeal(recipeId);
  }, [recipeId]);

  return [meal, mealStatus];
};

export default useMeal;
