import { Link } from "react-router-dom";
import { RecipeWithMatch } from "../../hooks/useRecipes";
import { MissingIngredientsBadge } from "../MissingIngredientsBadge/MissingIngredientsBadge";

interface RecipeCardProps {
  recipe: RecipeWithMatch;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="card recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h3>{recipe.title}</h3>
      <p>
        {recipe.matches.length} matches • {recipe.prepTime} min • {recipe.calories} cal
      </p>
      <MissingIngredientsBadge missingCount={recipe.missing.length} />
      <p className="hint">Matches: {recipe.matches.join(", ") || "None"}</p>
      <Link to={`/recipe/${recipe.id}`}>View details</Link>
    </article>
  );
}