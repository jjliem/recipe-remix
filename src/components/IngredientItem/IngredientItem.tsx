import { Ingredient } from "../../types/Ingredient";

interface IngredientItemProps {
  ingredient: Ingredient;
  onRemove: (id: string) => void;
}

export function IngredientItem({ ingredient, onRemove }: IngredientItemProps) {
  return (
    <li className="item-row">
      <span>{ingredient.name}</span>
      <button type="button" onClick={() => onRemove(ingredient.id)}>
        Remove
      </button>
    </li>
  );
}