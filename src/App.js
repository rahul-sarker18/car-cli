import { RouterProvider } from "react-router-dom";
import router from "./Router/Mainrouter";

function App() {
  return <div  className="max-w-7xl mx-auto">
    <RouterProvider router={router}></RouterProvider>
  </div>;
}

export default App;
