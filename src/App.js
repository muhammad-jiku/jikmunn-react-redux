import React from 'react';
import './App.css';
// import HooksJerseyContainer from './components/HooksJerseyContainer';
// import HooksKitContainer from './components/HooksKitContainer';
// import ItemContainer from './components/ItemContainer';
// import JerseyContainer from './components/JerseyContainer';
// import KitContainer from './components/KitContainer';
// import NewKitContainer from './components/NewKitContainer';
import UsersContainer from './components/UsersContainer';
// import { Provider } from 'react-redux';
// import store from './redux/store/index';

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      {/* <ItemContainer jersey />
      <ItemContainer />
      <JerseyContainer />
      <HooksJerseyContainer />
      <KitContainer />
      <HooksKitContainer />
      <NewKitContainer /> */}
      <UsersContainer />
    </div>
    // </Provider>
  );
}

export default App;
