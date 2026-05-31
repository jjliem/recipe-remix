interface MissingIngredientsBadgeProps {
  missingCount: number;
}

export function MissingIngredientsBadge({ missingCount }: MissingIngredientsBadgeProps) {
  let className = "badge green";
  let label = "All ingredients available";

  if (missingCount >= 3) {
    className = "badge red";
    label = `${missingCount} ingredients missing`;
  } else if (missingCount >= 1) {
    className = "badge yellow";
    label = `${missingCount} ingredients missing`;
  }

  return <span className={className}>{label}</span>;
}