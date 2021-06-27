import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/index";
import { StyleRoot } from "radium";

import "./assets/css/header.scss";
import "./assets/css/layout.scss";
import "./assets/css/subHeader.scss";
import "./assets/css/categories.scss";
import "./assets/css/products.scss";
import "./assets/css/activities.scss";
import "./assets/css/footer.scss";
import "./assets/css/test.scss";

const middlewares = [ReduxThunk];
const store = createStore(reducers, {}, applyMiddleware(...middlewares));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyleRoot>
        <App />
      </StyleRoot>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
