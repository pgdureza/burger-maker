import React from "react";
import ingredientsLib, { IngredientType } from "../lib/ingregients";
import Ingredient from "./Ingredient";
import styled from "styled-components";

const BASEHEIGHT = 210;
const EXTENDED_BASEHEIGHT = 100;

interface IProps {
  ingredients: IngredientType[];
}

interface IIngredientPlacement {
  index: number;
  height: number;
  extended: boolean;
}

interface IRoot {
  height: number;
}

const Root = styled.div<IRoot>`
  ${({ height }) => `
    margin-top: 200px;
    height: ${18 + height / 16}rem;
  `}
`;

const IngredientPlacement = styled.div<IIngredientPlacement>`
  ${({ index, height, extended }) => `
    margin-top: ${
      (height - (extended ? BASEHEIGHT : EXTENDED_BASEHEIGHT)) / 16
    }rem;
    z-index: ${100 - index};
  `}
`;

const Burger: React.FC<IProps> = ({ ingredients }) => {
  return (
    <Root
      className="relative mx-auto max-w-sm w-full"
      height={ingredients.reduce(
        (accum, curr) => accum + ingredientsLib[curr].height,
        0
      )}
    >
      {ingredients
        .reverse()
        .map((ingredient: IngredientType, index: number) => (
          <IngredientPlacement
            key={index}
            className="relative w-full"
            index={index}
            height={ingredientsLib[ingredient].height}
            extended={false}
          >
            <Ingredient type={ingredient} />
          </IngredientPlacement>
        ))}
    </Root>
  );
};

export default Burger;
