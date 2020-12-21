import React from 'react'
import App from '../App';

// Redux
import { Provider } from "react-redux";
import store from "./app/store";

const Providers = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Providers
