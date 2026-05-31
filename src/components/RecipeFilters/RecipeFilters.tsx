import { MealType, RecipeFilters as RecipeFiltersType } from "../../types/Recipe";

interface RecipeFiltersProps {
  filters: RecipeFiltersType;
  onChange: (filters: RecipeFiltersType) => void;
}

export function RecipeFilters({ filters, onChange }: RecipeFiltersProps) {
  return (
    <section className="card form">
      <h2>Filters</h2>
      <div className="filters-grid">
        <label>
          Meal type
          <select
            value={filters.mealType ?? ""}
            onChange={(event) =>
              onChange({
                ...filters,
                mealType: (event.target.value || undefined) as MealType | undefined
              })
            }
          >
            <option value="">Any</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
        </label>
        <label>
          Max prep time (minutes)
          <input
            type="number"
            min="1"
            value={filters.maxPrepTime ?? ""}
            onChange={(event) =>
              onChange({
                ...filters,
                maxPrepTime: event.target.value ? Number(event.target.value) : undefined
              })
            }
          />
        </label>
        <label>
          Max calories
          <input
            type="number"
            min="1"
            value={filters.maxCalories ?? ""}
            onChange={(event) =>
              onChange({
                ...filters,
                maxCalories: event.target.value ? Number(event.target.value) : undefined
              })
            }
          />
        </label>
      </div>
    </section>
  );
}