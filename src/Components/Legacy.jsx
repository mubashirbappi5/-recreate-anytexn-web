import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import svg1 from "../assets/backgrounds/WaveLinesDesktop1.svg";
import svg2 from "../assets/backgrounds/WaveLinesDesktop2.svg";
import svg3 from "../assets/backgrounds/WaveLinesDesktop3.svg";
import svg4 from "../assets/backgrounds/WaveLinesDesktop4.svg";

const Legacy = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const normalized = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
      mouseX.set(normalized.x);
      mouseY.set(normalized.y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // eslint-disable-next-line react/prop-types
  const AnimatedSVG = ({ src, position, hoverDirection }) => {
    const xRange = hoverDirection === "up" ? [-10, 10] : [10, -10];
    const yRange = hoverDirection === "up" ? [-8, 8] : [8, -8];

    const x = useSpring(useTransform(smoothX, [-1, 1], xRange), {
      damping: 30,
      stiffness: 80,
    });
    const y = useSpring(useTransform(smoothY, [-1, 1], yRange), {
      damping: 30,
      stiffness: 80,
    });

    return (
      <motion.img
        src={src}
        alt="Decorative Wave"
        className="absolute opacity-40"
        style={{ ...position, width: "100%", x, y }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      />
    );
  };

  return (
    <div
      style={{ clipPath: "polygon(0 0, 100% 40%, 100% 100%, 0 100%)" }}
      className="relative text-white overflow-hidden bg-blue-800 py-10 sm:py-20"
    >
      <div className="relative container z-50 px-5 sm:px-20">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center sm:text-left">
          Legacy no longer
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto sm:mx-0 mb-8 text-center sm:text-left">
          Talk to us to find out how we can transform your organisation for the future
        </p>
        <div className="text-center sm:text-left">
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-lg sm:text-xl">
            Connect Us
          </button>
        </div>
      </div>

      {/* Animated SVGs */}
      <AnimatedSVG
        src={svg1}
        position={{ bottom: -10, left: 0 }}
        hoverDirection="up"
      />
      <AnimatedSVG
        src={svg2}
        position={{ bottom: 50, left: 0 }}
        hoverDirection="down"
      />
      <AnimatedSVG
        src={svg3}
        position={{ top: 0, right: 0 }}
        hoverDirection="up"
      />
      <AnimatedSVG
        src={svg4}
        position={{ bottom: 0, right: 0 }}
        hoverDirection="down"
      />
    </div>
  );
};

export default Legacy;
