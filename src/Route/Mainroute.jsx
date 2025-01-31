
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
const Mainroute = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      children:[{
        index:true,
        element:<Home/>

      }]
    },
  ]);
  

export default Mainroute;