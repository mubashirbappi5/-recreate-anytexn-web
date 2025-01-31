
import { motion } from "framer-motion";
import bg1 from '../assets/backgrounds/WaveLinesDesktop3.svg'
const Banner = () => {
  // Animation variants for the background pan
  const backgroundPan = {
    animate: {
      x: ["0%", "-10%", "0%"],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Animation variants for the fade-in effect
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
    className="relative h-screen flex items-center justify-center bg-blue-400 overflow-hidden bg-cover bg-center"
    style={{ backgroundImage: `url(${bg1})` }}
  >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 " 
        variants={backgroundPan}
        animate="animate"
      ></motion.div>

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0 }}
        >
          Embrace the Future of Finance
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.2 }}
        >
          Reimagine financial services with AnyTechs open platform, distributed
          banking solution that powers transformation.
        </motion.p>

        <motion.button
          className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-600 transition-colors"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.4 }}
        >
          Reach Out to Us
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;