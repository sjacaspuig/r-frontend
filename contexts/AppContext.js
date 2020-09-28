import { useContext, useEffect, useState, useMemo, createContext } from 'react';

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const toggleContactModal = () => {
    setContactModal(!contactModal);
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const values = useMemo(
    () => ({
      menu,
      contactModal,
      toggleMenu,
      toggleContactModal
    }),
    [menu, contactModal]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useAppContext;
