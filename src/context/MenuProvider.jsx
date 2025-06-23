import { useState, useEffect } from "react";
import { MenuContext } from "./MenuContext";

export const MenuProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleMenu = () => {
    setActiveMenu((prev) => !prev);
  };

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <MenuContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        handleMenu,
        isDesktop,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
