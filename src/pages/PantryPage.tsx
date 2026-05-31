import { AddIngredientForm } from "../components/AddIngredientForm/AddIngredientForm";
import { PantryList } from "../components/PantryList/PantryList";
import { usePantry } from "../hooks/usePantry";

export function PantryPage() {
  const { pantry, addIngredient, removeIngredient, clearPantry } = usePantry();

  return (
    <section>
      <AddIngredientForm onAdd={addIngredient} />
      <button type="button" onClick={clearPantry} className="danger-btn">
        Clear pantry
      </button>
      <PantryList pantry={pantry} onRemove={removeIngredient} />
    </section>
  );
}