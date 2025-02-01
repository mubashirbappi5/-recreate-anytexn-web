import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";


const Root = () => {
    return (
        <div>
          <header className=" md:fixed z-20 md:w-full md:bg-transparent bg-blue-400">
          <Navber/>
          </header>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;