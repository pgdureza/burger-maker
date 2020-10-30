import bacon from "../images/bacon.png";
import beefPatty from "../images/beef-patty.png";
import bellpeppers from "../images/bellpeppers.png";
import bunBottom from "../images/bun-bottom.png";
import bunMiddle from "../images/bun-middle.png";
import bunTop from "../images/bun-top.png";
import cheeseCheddar from "../images/cheese-cheddar.png";
import cheeseMelted from "../images/cheese-melted.png";
import chickenPatty from "../images/chicken-patty.png";
import egg from "../images/egg.png";
import lettuce from "../images/lettuce.png";
import mushrooms from "../images/mushrooms.png";
import onions from "../images/onions.png";
import pickles from "../images/pickles.png";
import tomatoes from "../images/tomatoes.png";

export type IngredientType =
  | "bunBottom"
  | "bunMiddle"
  | "bunTop"
  | "bacon"
  | "beefPatty"
  | "bellpeppers"
  | "cheeseCheddar"
  | "cheeseMelted"
  | "chickenPatty"
  | "egg"
  | "lettuce"
  | "mushrooms"
  | "onions"
  | "pickles"
  | "tomatoes";

interface IngredientData {
  src: string;
  height: number;
}

const ingredients: Record<IngredientType, IngredientData> = {
  bacon: { src: bacon, height: 30 },
  beefPatty: { src: beefPatty, height: 20 },
  bellpeppers: { src: bellpeppers, height: 10 },
  bunBottom: { src: bunBottom, height: 20 },
  bunMiddle: { src: bunMiddle, height: 15 },
  bunTop: { src: bunTop, height: 50 },
  cheeseCheddar: { src: cheeseCheddar, height: 10 },
  cheeseMelted: { src: cheeseMelted, height: 10 },
  chickenPatty: { src: chickenPatty, height: 20 },
  egg: { src: egg, height: 10 },
  lettuce: { src: lettuce, height: 10 },
  mushrooms: { src: mushrooms, height: 10 },
  onions: { src: onions, height: 10 },
  pickles: { src: pickles, height: 10 },
  tomatoes: { src: tomatoes, height: 15 },
};

export default ingredients;
