import React from "react";

interface IProps {
  isOpen: boolean;
  close: VoidFunction;
}

const Drawer: React.FC<IProps> = ({ isOpen, close, children }) => {
  const drawerClasses = isOpen ? "" : "translate-x-full";
  const overlayClasses = isOpen
    ? "opacity-1"
    : "opacity-0 transform translate-x-full";

  return (
    <div>
      <div
        onClick={close}
        className={`z-999 w-full fixed top-0 left-0 h-full bg-black bg-opacity-75 transition-opacity ${overlayClasses}`}
      ></div>
      <div
        className={`z-999 fixed right-0 top-0 h-full w-2/5 min-w-48 max-w-lg bg-white overflow-scroll transition-transform transform duration-200 ${drawerClasses}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;
