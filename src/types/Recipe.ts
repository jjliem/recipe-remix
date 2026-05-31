export type MealType = "breakfast" | "lunch" | "dinner" | "snack";

export interface Recipe {
  id: string;
  title: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  mealType: MealType;
  prepTime: number;
  calories: number;
}

export interface RecipeFilters {
  mealType?: MealType;
  maxPrepTime?: number;
  maxCalories?: number;
}