import React from 'react';
import './App.css';
import Principal from './Componentes/Principal';
import { GlobalContext, GlobalContextStorage } from './GlobalContext';
import AntesEdepois from './Componentes/AntesEdepois/AntesEdepois';

const App = () => {
  const global = React.useContext(GlobalContext);
  console.log(global);
  return (
    <div>
      <GlobalContextStorage>
        <Principal />
        <AntesEdepois />
      </GlobalContextStorage>
    </div>
  );
};

export default App;
