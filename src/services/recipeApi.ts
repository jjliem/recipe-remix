import { mockRecipes } from "../data/mockRecipes";
import { Ingredient } from "../types/Ingredient";
import { Recipe } from "../types/Recipe";

export async function fetchRecipesByIngredients(_ingredients: string[]): Promise<Recipe[]> {
  return Promise.resolve(mockRecipes);
}

export function matchIngredients(recipeIngredients: string[], pantry: Ingredient[]) {
  const pantryNames = pantry.map((p) => p.name.toLowerCase());
  const matches = recipeIngredients.filter((r) => pantryNames.includes(r.toLowerCase()));
  const missing = recipeIngredients.filter((r) => !pantryNames.includes(r.toLowerCase()));
  return { matches, missing };
}

export async function fetchRecipeById(id: string): Promise<Recipe | undefined> {
  return Promise.resolve(mockRecipes.find((recipe) => recipe.id === id));
}