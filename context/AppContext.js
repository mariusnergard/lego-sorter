import React, { useEffect, useState } from 'react';

const AppContext = React.createContext();

const AppContextProvider = ({
  children,
}) => {
  // Indicates if the left menu is open
  const [useSetCounts, setSetCounts] = useState([]);

  const addToCount = (setId) => {
    const setCounts = useSetCounts.map((set) => {
      if (set.id === setId) {
        set.collected += 1;
      }
      return set;
    });
    setSetCounts(setCounts);
  };

  return (
    <AppContext.Provider value={{
      useSetCounts,
      setSetCounts,
      addToCount,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
