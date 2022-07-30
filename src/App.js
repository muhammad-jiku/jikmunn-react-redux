import React from 'react';
import './App.css';
import HooksJerseyContainer from './components/HooksJerseyContainer';
import HooksKitContainer from './components/HooksKitContainer';
import JerseyContainer from './components/JerseyContainer';
import KitContainer from './components/KitContainer';
// import { Provider } from 'react-redux';
// import store from './redux/store/index';

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <JerseyContainer />
      <HooksJerseyContainer />
      <KitContainer />
      <HooksKitContainer />
    </div>
    // </Provider>
  );
}

export default App;
