import { FormEvent, useState } from "react";

interface AddIngredientFormProps {
  onAdd: (name: string) => void;
}

export function AddIngredientForm({ onAdd }: AddIngredientFormProps) {
  const [name, setName] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onAdd(name);
    setName("");
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <label htmlFor="ingredientName">Add ingredient</label>
      <div className="row">
        <input
          id="ingredientName"
          placeholder="e.g. avocado"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}