import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalContextStorage = ({ children }) => {
  const [imagem, setImage] = React.useState(null);
  const [imagem2, setImage2] = React.useState(null);
  return (
    <GlobalContext.Provider value={{ imagem, imagem2, setImage, setImage2 }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
