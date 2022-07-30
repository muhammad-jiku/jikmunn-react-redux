import React from 'react';
import './App.css';
import HooksJerseyContainer from './components/HooksJerseyContainer';
import JerseyContainer from './components/JerseyContainer';
// import KitContainer from './components/HooksJerseyContainer';
// import { Provider } from 'react-redux';
// import store from './redux/store/index';

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <JerseyContainer />
      <HooksJerseyContainer />
      {/* <KitContainer /> */}
    </div>
    // </Provider>
  );
}

export default App;
