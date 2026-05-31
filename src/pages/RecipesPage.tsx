import { useEffect, useState } from "react";
import { RecipeCard } from "../components/RecipeCard/RecipeCard";
import { RecipeFilters } from "../components/RecipeFilters/RecipeFilters";
import { usePantry } from "../hooks/usePantry";
import { getFilteredRecipes, RecipeWithMatch } from "../hooks/useRecipes";
import { RecipeFilters as RecipeFiltersType } from "../types/Recipe";

export function RecipesPage() {
  const { pantry } = usePantry();
  const [filters, setFilters] = useState<RecipeFiltersType>({});
  const [recipes, setRecipes] = useState<RecipeWithMatch[]>([]);

  useEffect(() => {
    void getFilteredRecipes(pantry, filters).then(setRecipes);
  }, [pantry, filters]);

  return (
    <section>
      <RecipeFilters filters={filters} onChange={setFilters} />
      {!recipes.length ? (
        <p className="card">No remix recipes found. Add more pantry ingredients.</p>
      ) : (
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </section>
  );
}