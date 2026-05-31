import { Recipe } from "../types/Recipe";

export const mockRecipes: Recipe[] = [
  {
    id: "r1",
    title: "Spinach Tomato Omelet",
    image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=60",
    ingredients: ["eggs", "spinach", "tomato", "olive oil", "salt"],
    instructions: [
      "Whisk eggs with a pinch of salt.",
      "Saute spinach and tomato in olive oil.",
      "Pour eggs into pan and cook until set."
    ],
    mealType: "breakfast",
    prepTime: 15,
    calories: 320
  },
  {
    id: "r2",
    title: "Quick Veggie Toast",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=60",
    ingredients: ["bread", "tomato", "olive oil", "garlic", "spinach"],
    instructions: [
      "Toast bread slices.",
      "Top with chopped tomato and spinach.",
      "Drizzle with olive oil and rub with garlic."
    ],
    mealType: "lunch",
    prepTime: 10,
    calories: 280
  },
  {
    id: "r3",
    title: "Chicken Rice Bowl",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=60",
    ingredients: ["chicken", "rice", "soy sauce", "spinach", "eggs"],
    instructions: [
      "Cook chicken until done.",
      "Assemble cooked rice with chicken and spinach.",
      "Top with fried egg and drizzle soy sauce."
    ],
    mealType: "dinner",
    prepTime: 30,
    calories: 560
  },
  {
    id: "r4",
    title: "Yogurt Fruit Snack",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=60",
    ingredients: ["yogurt", "banana", "honey", "nuts"],
    instructions: [
      "Spoon yogurt into a bowl.",
      "Top with sliced banana and nuts.",
      "Finish with honey."
    ],
    mealType: "snack",
    prepTime: 5,
    calories: 240
  }
];