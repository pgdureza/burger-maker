import React from "react";
import ingredients, { IngredientType } from "../lib/ingregients";

interface IProps {
  type: IngredientType;
}

const Ingredient: React.FC<IProps> = ({ type }) => {
  return <img className="w-full" alt={type} src={ingredients[type].src} />;
};

export default Ingredient;
