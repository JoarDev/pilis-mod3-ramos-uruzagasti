import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { LocationProvider } from "./context/LocationContext";
import ErrorPage from "./error-page";
import "./index.css";
import FreeNFT from "./routes/freeNFT";
import NewLocation from "./routes/newLocation";
import Root from "./routes/root/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "newLocation",
    element: <NewLocation />,
  },
  {
    path: "freeNFT",
    element: <FreeNFT />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocationProvider>
        <RouterProvider router={router} />
    </LocationProvider>
  </React.StrictMode>
);