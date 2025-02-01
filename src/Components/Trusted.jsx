
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';



const Trusted = () => {

    const [counterOn,setcounterOn]=useState(false)
    return (
        <div>
            <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>
            
            {
                counterOn && <CountUp end={100} start={0} delay={0} duration={2} /> 
            }
            </ScrollTrigger>
        </div>
    );
};

export default Trusted;