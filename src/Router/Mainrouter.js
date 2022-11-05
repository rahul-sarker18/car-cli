import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Chatchout from "../pages/Chatchout/Chatchout";
import About from "../pages/Home-page/About/About";
import Home from "../pages/Home-page/Home";
import Services from "../pages/Home-page/services/Services";
import Login from "../pages/Log-Sign/Login";
import Signup from "../pages/Log-Sign/Signup";
import Orders from "../pages/orders/Orders";
import Privatrout from "./Privatrout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      { path: "/home", element: <Home></Home> },
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/services", element: <Services></Services> },
      { path: "/order", element: <Privatrout><Orders></Orders></Privatrout>},
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
      
      {
        path: "/chatchout/:id",
        element: <Privatrout> <Chatchout></Chatchout></Privatrout>,
        loader: ({ params }) =>
          fetch(`https://cor-doctor-sarver-rahul-sarker18.vercel.app/services/${params.id}`),
      },
    ],
  },
]);

export default router;