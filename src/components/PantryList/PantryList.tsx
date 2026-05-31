import { Ingredient } from "../../types/Ingredient";
import { IngredientItem } from "../IngredientItem/IngredientItem";

interface PantryListProps {
  pantry: Ingredient[];
  onRemove: (id: string) => void;
}

export function PantryList({ pantry, onRemove }: PantryListProps) {
  if (!pantry.length) {
    return <p className="card">Your pantry is empty.</p>;
  }

  return (
    <section className="card">
      <h2>Pantry Items</h2>
      <ul className="list">
        {pantry.map((ingredient) => (
          <IngredientItem key={ingredient.id} ingredient={ingredient} onRemove={onRemove} />
        ))}
      </ul>
    </section>
  );
}