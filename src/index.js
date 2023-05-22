import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import phoneReducer from './phoneState';
import phonesSaga from './phoneSaga';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    phones: phoneReducer
  },
  middleware: [saga]
});

saga.run(phonesSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
