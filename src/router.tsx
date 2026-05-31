import { createHashRouter } from "react-router-dom";
import { App } from "./App";
import { PantryPage } from "./pages/PantryPage";
import { RecipesPage } from "./pages/RecipesPage";
import { RecipeDetailsPage } from "./pages/RecipeDetailsPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <PantryPage /> },
      { path: "recipes", element: <RecipesPage /> },
      { path: "recipe/:id", element: <RecipeDetailsPage /> }
    ]
  }
]);