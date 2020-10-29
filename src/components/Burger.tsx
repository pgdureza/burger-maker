import React from "react";
import ingredientsLib, { IngredientType } from "../lib/ingregients";
import Ingredient from "./Ingredient";
import styled from "styled-components";
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  Droppable,
  DroppableProvided,
  DropResult,
} from "react-beautiful-dnd";
import { reorder, remove } from "../lib/reorder";

const BASEHEIGHT = 180;

interface IngredientMap {
  type: IngredientType;
  id: string;
}

interface IProps {
  ingredients: IngredientType[];
}

interface IIngredientPlacement {
  index: number;
  height: number;
  expanded?: boolean;
}

interface IRoot {
  height: number;
  expanded: boolean;
}

const Root = styled.div<IRoot>`
  ${({ expanded }) => `
    transition: all 0.55s ease;
    margin-top: ${expanded ? 0 : 20}vh;
  `}
`;

const IngredientPlacement = styled.div<IIngredientPlacement>`
  ${({ index, height, expanded }) => `
    transition: all 0.55s ease;
    margin-top: ${expanded ? 0 : (height - BASEHEIGHT) / 16}rem;
    z-index: ${100 - index};
  `}
`;

const Burger: React.FC<IProps> = ({ ingredients: defaultIngredients }) => {
  const defaultMap = defaultIngredients.map((type, index) => ({
    type,
    id: `${type}${index}`,
  }));

  const [ingredients, setIngredients] = React.useState<IngredientMap[]>(
    defaultMap
  );

  console.log({ ingredients });

  const [expanded, setExpanded] = React.useState(false);

  const expand = () => setExpanded(true);
  const compress = () => setExpanded(false);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      setIngredients(remove(ingredients, result.source.index));
    } else {
      setIngredients(
        reorder(ingredients, result.source.index, result.destination.index)
      );
    }
  };
  return (
    <Root
      expanded={expanded}
      onMouseEnter={expand}
      onMouseLeave={compress}
      className="relative mx-auto max-w-md w-full py-20 px-16"
      height={ingredients.reduce(
        (accum, curr) => accum + ingredientsLib[curr.type].height,
        0
      )}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided: DroppableProvided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {ingredients
                .reverse()
                .map((ingredient: IngredientMap, index: number) => (
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
                        </IngredientPlacement>
                      </div>
                    )}
                  </Draggable>
                ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Root>
  );
};

export default Burger;
