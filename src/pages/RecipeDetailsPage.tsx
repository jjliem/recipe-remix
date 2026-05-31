import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { usePantry } from "../hooks/usePantry";
import { fetchRecipeById, matchIngredients } from "../services/recipeApi";
import { Recipe } from "../types/Recipe";

export function RecipeDetailsPage() {
  const { id } = useParams();
  const { pantry } = usePantry();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (!id) return;
    void fetchRecipeById(id).then((data) => setRecipe(data ?? null));
  }, [id]);

  if (!recipe) {
    return (
      <section className="card">
        <p>Recipe not found.</p>
        <Link to="/recipes">Back to recipes</Link>
      </section>
    );
  }

  const { matches } = matchIngredients(recipe.ingredients, pantry);

  return (
    <section className="card details">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h3>Ingredients</h3>
      <ul className="list">
        {recipe.ingredients.map((ingredient) => {
          const hasIt = matches.some((match) => match.toLowerCase() === ingredient.toLowerCase());
          return (
            <li key={ingredient}>
              {ingredient} {hasIt ? "(in pantry)" : "(missing)"}
            </li>
          );
        })}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {recipe.instructions.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <Link to="/recipes">Back to recipes</Link>
    </section>
  );
}