import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LocationProvider } from "./context/LocationContext";
import { UserProvider } from './context/UserContext';

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "newLocation",
    element: <NewLocation />,
  }
]); */
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LocationProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </LocationProvider>
    </BrowserRouter>
  </React.StrictMode>
);