import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Responsive.css'
import App from './App';
import 'react-notifications-component/dist/theme.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

