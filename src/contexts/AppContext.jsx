import { createContext, useState } from "react";
export const AppContext = createContext({
  handleToggleMenu: () => {},
  isMobileMenuOpen: false,
});

export const AppProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <AppContext.Provider value={{ isMobileMenuOpen, handleToggleMenu }}>
      {children}
    </AppContext.Provider>
  );
};
