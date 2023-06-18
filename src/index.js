import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { NotificationContextProvider } from "./contexts/NotificationContext/NotificationContext";
import store from "./store/store";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
       <NotificationContextProvider>
         <ErrorBoundary>
          <App />
         </ErrorBoundary>
      </NotificationContextProvider>
    </Provider>
  </React.StrictMode>
);
