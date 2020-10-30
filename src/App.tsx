import React from "react";
import "./assets/main.css";
import BurgerAssembly from "./components/BurgerAssembly";

const App: React.FC = () => {
  return (
    <div className="text-blue-600 flex items-center justify-center min-h-screen">
      <BurgerAssembly ingredients={["bunTop", "beefPatty", "bunBottom"]} />
    </div>
  );
};

export default App;
