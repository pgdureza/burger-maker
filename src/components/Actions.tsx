import React from "react";
import { FaPlus, FaQuestion } from "react-icons/fa";
import { IngredientType } from "../lib/ingregients";
import Drawer from "./Drawer";
import IngredientSelection from "./IngredientSelection";
import Instructions from "./Instructions";

interface IProps {
  onAdd: (type: IngredientType) => void;
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}

const Actions: React.FC<IProps> = ({ onAdd, isOpen, setIsOpen }) => {
  const [content, setContent] = React.useState<React.ReactNode | null>(null);
  const open = (id: string) => () => {
    setIsOpen(true);
    if (id === "add") {
      setContent(<IngredientSelection onAdd={onAdd} />);
    } else if (id === "instructions") {
      setContent(<Instructions />);
    }
  };
  const close = () => setIsOpen(false);

  return (
    <div>
      <div className="fixed top-0 right-0 mr-8 mt-4">
        <div
          className="cursor-pointer text-2xl bg-green-600 opacity-75 rounded-full p-2 flex justify-center items-center text-white mb-4"
          onClick={open("add")}
        >
          <FaPlus />
        </div>
        <div
          className="cursor-pointer text-2xl bg-indigo-300 opacity-75 rounded-full p-2 flex justify-center items-center text-white mb-4"
          onClick={open("instructions")}
        >
          <FaQuestion />
        </div>
      </div>
      <Drawer isOpen={isOpen} close={close}>
        {content}
      </Drawer>
    </div>
  );
};

export default Actions;
