import App from "./App";
import MoreInfo from "./pages/moreInfo";
import { createBrowserRouter } from "react-router-dom";
import ZooData from "./components/animals";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ZooData />,
      },
      {
        path: "/animals/:id",
        element: <MoreInfo />,
      },
    ],
  },
]);
