import Banner from "../Components/Banner";
import Client from "../Components/Client";
import FutureFinance from "../Components/FutureFinance";
import Legacy from "../Components/Legacy";
import PHILOSOPHY from "../Components/PHILOSOPHY";
import Trusted from "../Components/Trusted";




const Home = () => {
    return (
        <div>
            <Banner/>
            <FutureFinance/>
           <PHILOSOPHY/>
            <Trusted/>
           <Client/>
            <Legacy/>
            
        </div>
    );
};

export default Home;