import React from "react";
import { IngredientType } from "../lib/ingregients";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { reorder, remove } from "../lib/reorder";
import Burger, { IngredientMap } from "./Burger";
import Actions from "./Actions";
import { FaCheck, FaEdit } from "react-icons/fa";

interface IProps {
  ingredients: IngredientType[];
}

const BurgerAssembly: React.FC<IProps> = ({
  ingredients: defaultIngredients,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const expand = () => setExpanded(true);
  const compress = () => setExpanded(false);

  const defaultMap = defaultIngredients.map((type, index) => ({
    type,
    id: `${type}${index}`,
  }));

  const [counter, setCounter] = React.useState(defaultMap.length);

  const [ingredients, setIngredients] = React.useState<IngredientMap[]>(
    defaultMap
  );

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      setIngredients(remove(ingredients, result.source.index));
      return null;
    }
    if (result.destination?.droppableId === "trash") {
      setIngredients(remove(ingredients, result.source.index));
      return null;
    }
    setIngredients(
      reorder(ingredients, result.source.index, result.destination.index)
    );
  };

  const onRemove = (id: string) => {
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  };

  const onAdd = (type: IngredientType) => {
    compress();
    const updatedIngredients = [
      { type, id: `${type}${counter}` },
      ...ingredients,
    ];
    setIngredients(updatedIngredients);
    setCounter(counter + 1);
  };

  React.useEffect(() => {
    setIsOpen(false);
  }, [ingredients]);

  return (
    <div className="relative mb-24">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex justify-center items-center">
          <Burger
            ingredients={ingredients}
            onRemove={onRemove}
            expanded={expanded}
            compress={compress}
          />
        </div>
      </DragDropContext>
      {expanded ? (
        <div
          className="h-16 w-16 rounded-full right-0 mr-8 cursor-pointer text-center fixed bottom-0 mb-12 z-50 text-3xl bg-blue-600 text-white flex justify-center items-center"
          onClick={compress}
        >
          <FaCheck />
        </div>
      ) : (
        <div className="h-full w-full absolute top-0 left-0 z-50 -mt-40 pb-40 transition-opacity duration-500 opacity-0 hover:opacity-100">
          <div className="absolute top-0 right-0 mt-4 mr-4 text-2xl cursor-pointer">
            <FaEdit onClick={expand} />
          </div>
        </div>
      )}
      <Actions onAdd={onAdd} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default BurgerAssembly;
