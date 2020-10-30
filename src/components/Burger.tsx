import React from "react";
import ingredientsLib, { IngredientType } from "../lib/ingregients";
import Ingredient from "./Ingredient";
import styled, { css } from "styled-components";
import { FaMinus } from "react-icons/fa";
import {
  Draggable,
  DraggableProvided,
  Droppable,
  DroppableProvided,
} from "react-beautiful-dnd";

const BASEHEIGHT = 180;

export interface IngredientMap {
  type: IngredientType;
  id: string;
}

const Root = styled.div<{ expanded: boolean; count: number }>`
  transition: all 0.5s ease;
  height: ${({ count, expanded }) =>
    expanded ? count * BASEHEIGHT : BASEHEIGHT}px;
`;

interface IProps {
  ingredients: IngredientMap[];
  onRemove: (id: string) => void;
  expanded: boolean;
  compress: VoidFunction;
}

interface IIngredientPlacement {
  index: number;
  height: number;
  expanded: boolean;
}

const IngredientPlacement = styled.div<IIngredientPlacement>`
  ${({ index, height, expanded }) => `
    transition: all 0.5s ease;
    margin-top: ${expanded ? 0 : (height - BASEHEIGHT) / 16}rem;
    z-index: ${50 - index};
    ${
      expanded &&
      css`
        &:hover {
          transform: scale(1.1);
        }
      `
    }
  `}
`;

const Burger: React.FC<IProps> = ({
  ingredients,
  onRemove,
  compress,
  expanded,
}) => {
  const onRemoveClick = (id: string) => () => {
    onRemove(id);
  };

  React.useEffect(() => {
    if (ingredients.length === 0) {
      compress();
    }
  }, [ingredients, compress]);

  return (
    <Root
      className="mx-auto max-w-xs w-full relative"
      expanded={expanded}
      count={ingredients.length}
    >
      <Droppable droppableId="burger">
        {(provided: DroppableProvided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {ingredients.map((ingredient: IngredientMap, index: number) => (
              <Draggable
                key={ingredient.id}
                draggableId={ingredient.id}
                index={index}
              >
                {(provided: DraggableProvided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <IngredientPlacement
                      className="relative w-full"
                      index={index}
                      height={ingredientsLib[ingredient.type].height}
                      expanded={expanded}
                    >
                      <Ingredient type={ingredient.type} />
                      {expanded && (
                        <div
                          onClick={onRemoveClick(ingredient.id)}
                          className="remove cursor-pointer absolute top-0 p-2 right-0 rounded-full bg-red-500 mr-2 mt-2 text-white flex justify-center items-cehnter text-xs opacity-50"
                        >
                          <FaMinus />
                        </div>
                      )}
                    </IngredientPlacement>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </Root>
  );
};

export default Burger;
