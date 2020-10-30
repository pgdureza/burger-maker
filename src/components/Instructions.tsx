import React from "react";
import { FaCheck, FaEdit, FaMinus, FaPlus, FaSort } from "react-icons/fa";

const Instructions: React.FC = () => {
  return (
    <div>
      <div className="text-xl sm:text-2xl md:text-3xl text-center border-b shadow-sm p-5 sticky top-0 left-0 bg-white z-50">
        Instructions
      </div>
      <ul className="p-5">
        <li className="mb-8 flex flex-wrap">
          Click on{" "}
          <span className="text-sm inline-block mx-4 text-green-500">
            <FaPlus />
          </span>{" "}
          to add a new ingredient
        </li>
        <li className="mb-8">
          Hover over burger and click on{" "}
          <span className="text-sm inline-block mx-4 text-blue-600">
            <FaEdit />
          </span>{" "}
          to rearrange ingredients, then click on{" "}
          <span className="text-sm inline-block mx-4 text-blue-600">
            <FaCheck />
          </span>{" "}
          when done.
        </li>
        <li className="mb-8 flex">
          Click on{" "}
          <span className="text-sm inline-block mx-4 text-red-500">
            <FaMinus />
          </span>{" "}
          after hovering on an ingredient to remove it.
        </li>
      </ul>
    </div>
  );
};

export default Instructions;
