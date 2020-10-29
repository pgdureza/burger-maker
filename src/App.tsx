import React from "react";
import "./assets/main.css";
import Burger from "./components/Burger";

const App: React.FC = () => {
  return (
    <div className="text-red-900">
      <Burger
        ingredients={[
          "bunTop",
          "bacon",
          "tomatoes",
          "cheeseMelted",
          "lettuce",
          "cheeseCheddar",
          "egg",
          "chickenPatty",
          "bunMiddle",
          "lettuce",
          "beefPatty",
          "bunBottom",
        ]}
      />
    </div>
  );
};

export default App;
