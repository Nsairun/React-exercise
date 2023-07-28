/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */

const { createContext, useContext, useState } = require('react');

const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [data, setData] = useState(null);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
