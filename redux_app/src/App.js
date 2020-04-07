import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
//to provide store to react, a provider component is used
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
