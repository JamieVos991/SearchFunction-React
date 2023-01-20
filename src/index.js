import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux';
import filteredGamesReducers from './Reducers/filteredGamesReducer';

const store = createStore(filteredGamesReducers);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);