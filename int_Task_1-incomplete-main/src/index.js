import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Router
import { BrowserRouter as Router } from "react-router-dom";

//REDUX
import { Provider } from "react-redux";
import { store } from "./Redux/store";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

ReactDOM.render(
  <Provider store={store}>
      <Router>
          <App />
      </Router>
  </Provider>,
  document.getElementById("root")
);

