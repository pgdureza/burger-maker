import React from "react";
import ingredients, { IngredientType } from "../lib/ingregients";
import Ingredient from "./Ingredient";

interface IProps {
  onAdd: (type: IngredientType) => void;
}

const IngredientSelection: React.FC<IProps> = ({ onAdd }) => {
  const onClick = (type: IngredientType) => () => {
    onAdd(type);
  };

  return (
    <div>
      <div className="text-green-600 text-xl sm:text-2xl md:text-3xl text-center border-b shadow-sm p-5 sticky top-0 left-0 bg-white z-50">
        Select Ingredients
      </div>
      <div className="p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid">
        {Object.keys(ingredients).map((key) => (
          <div
            key={key}
            className="hover:scale-110 transform transition-transform duration-200 cursor-pointer mb-8"
            onClick={onClick(key as IngredientType)}
          >
            <Ingredient type={key as IngredientType} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientSelection;
