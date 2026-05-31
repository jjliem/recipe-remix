import { useContext } from "react";
import { PantryContext } from "../context/PantryContext";

export function usePantry() {
  const context = useContext(PantryContext);
  if (!context) {
    throw new Error("usePantry must be used within a PantryProvider");
  }
  return context;
}