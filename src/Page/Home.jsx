import Banner from "../Components/Banner";
import Client from "../Components/Client";
import Legacy from "../Components/Legacy";
import Trusted from "../Components/Trusted";




const Home = () => {
    return (
        <div>
            <Banner/>

            <Trusted/>
           <Client/>
            <Legacy/>
            
        </div>
    );
};

export default Home;