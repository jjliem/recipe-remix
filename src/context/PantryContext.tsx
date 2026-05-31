import { createContext, ReactNode, useMemo, useState } from "react";
import { mockPantry } from "../data/mockPantry";
import { Ingredient } from "../types/Ingredient";

export interface PantryContextValue {
  pantry: Ingredient[];
  addIngredient: (name: string) => void;
  removeIngredient: (id: string) => void;
  clearPantry: () => void;
}

export const PantryContext = createContext<PantryContextValue | undefined>(undefined);

export function PantryProvider({ children }: { children: ReactNode }) {
  const [pantry, setPantry] = useState<Ingredient[]>(mockPantry);

  const value = useMemo(
    () => ({
      pantry,
      addIngredient: (name: string) => {
        const trimmed = name.trim();
        if (!trimmed) return;
        setPantry((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            name: trimmed.toLowerCase()
          }
        ]);
      },
      removeIngredient: (id: string) => {
        setPantry((prev) => prev.filter((item) => item.id !== id));
      },
      clearPantry: () => setPantry([])
    }),
    [pantry]
  );

  return <PantryContext.Provider value={value}>{children}</PantryContext.Provider>;
}