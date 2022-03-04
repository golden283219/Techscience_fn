import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRoute from './route/AppRoute'
import { store, persistor } from './redux/store'
import './App.scss'

const App = () => {
  return (
      <Provider store={ store }>
          <PersistGate loading={ null } persistor={ persistor }>
              <AppRoute />
          </PersistGate>
      </Provider>
  );
}

export default App;
