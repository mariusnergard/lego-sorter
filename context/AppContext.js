import React, { useEffect, useState } from 'react';

const AppContext = React.createContext();

const AppContextProvider = ({
  children,
  pageProps,
  env,
  user,
}) => {
  // Indicates if the left menu is open
  const [isMenuOpen, toggleMenuOpen] = useState(false);

  const [useForwardTo, setForwardTo] = useState('/');

  // Placeholder for a custom theme - not functional, but placeholders are set in components/styles/GlobalCSSVars.js
  const [useCustomTheme, setCustomTheme] = useState({});

  // Gets the Mesh version from package.json
  const [useMeshVersion, setMeshVersion] = useState(env.npm_package_version);

  const [useUser, setUser] = useState(user);

  useEffect(() => {
    // Get menu state from local storage
    const navOpen = (Object.prototype.hasOwnProperty.call(localStorage, 'meshNavOpen')) ? (localStorage.getItem('meshNavOpen') === 'true') : true;
    toggleMenuOpen(navOpen);
  }, []);



  return (
    <AppContext.Provider value={{
      useMeshVersion,
      isMenuOpen,
      toggleMenuOpen,
      useUser,
      useForwardTo,
      setForwardTo,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
