import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Router, RouterProvider } from 'react-router-dom';
import { Route } from '@mui/icons-material';
import { router } from './app/router/Router';
import { StoreProvider } from './app/context/StoreContext';

import { Provider } from 'react-redux';
import { store } from './app/store/configureStore';
import { fetchProductAsync } from './features/catalog/catlogSlice';

// const store = configureStore();



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* use react router */}
    {/* <StoreProvider> */}
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>    
    {/* </StoreProvider>     */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
