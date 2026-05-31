import { fetchRecipesByIngredients, matchIngredients } from "../services/recipeApi";
import { Ingredient } from "../types/Ingredient";
import { Recipe, RecipeFilters } from "../types/Recipe";

export interface RecipeWithMatch extends Recipe {
  matches: string[];
  missing: string[];
}

export async function getFilteredRecipes(
  pantry: Ingredient[],
  filters: RecipeFilters
): Promise<RecipeWithMatch[]> {
  const ingredientNames = pantry.map((item) => item.name);
  const recipes = await fetchRecipesByIngredients(ingredientNames);

  return recipes
    .map((recipe) => {
      const { matches, missing } = matchIngredients(recipe.ingredients, pantry);
      return { ...recipe, matches, missing };
    })
    .filter((recipe) => recipe.matches.length >= 3)
    .filter((recipe) => !filters.mealType || recipe.mealType === filters.mealType)
    .filter((recipe) => !filters.maxPrepTime || recipe.prepTime <= filters.maxPrepTime)
    .filter((recipe) => !filters.maxCalories || recipe.calories <= filters.maxCalories)
    .sort((a, b) => b.matches.length - a.matches.length || a.missing.length - b.missing.length);
}