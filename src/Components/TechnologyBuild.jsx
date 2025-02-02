import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const sections = [
  {
    subtitle: "Customer focused",
    title: 'Purpose-built financial services',
    content:
      "Elevate customer experience and achieve agile financial product innovation with the worlds first, consumer-centric, real-time transaction account processing and credit limit system"
     ,
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    subtitle: "Agile and adaptable",
    title:'Agile and adaptable for growth',
    content:'Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.',
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
  },
  {
    subtitle: "Compliance ready",
    title: "Manage compliance with ease",
    content:"Navigate through the evolving regulatory landscape with confidence by streamlining compliancmanagement through real-time risk monitoring solutions powered by Al andmachine learning.Transform your compliance strategy with flexible and diversifiedpolicy rules, powered by cutting-edge technology that isdesigned for seamless integration with core banking and cardpayment systems.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
  },
  {
    subtitle:'Secure and safe',
    title: "Highly secure and safe",
    content:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure..",
    image: "https://swiperjs.com/demos/images/nature-4.jpg",
  },
];

const FinanceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      swiperRef.current.autoplay.stop();
    }
  };

  return (
    <div className="max-w-5xl mx-auto text-center p-8">
      <p className="text-blue-500 font-semibold">TECHNOLOGY BUILT FOR YOU</p>
      <h2 className="text-4xl font-bold text-gray-900">
        The future of finance
      </h2>

      {!isMobile && (
        <div className="flex justify-center gap-4 mt-6">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeIndex === index
                  ? "bg-blue-200 text-blue-800"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => handleSlideChange(index)}
            >
              {section.subtitle}
            </button>
          ))}
        </div>
      )}

      <Swiper
        className="mt-8"
        autoplay={
          isMobile
            ? { delay: 3000, disableOnInteraction: false }
            : { delay: 3000 }
        }
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {sections.map((section, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row  text-left gap-6">
              <div className="md:w-1/2 space-y-4">
                <p className="text-blue-500 text-xs font-bold uppercase">
                  {section.subtitle}
                </p>
                <h3 className="text-4xl font-bold text-gray-900">
                  {section.title} for growth
                </h3>
                <p className="text-gray-600 mt-2">{section.content}</p>
              </div>
              <img
                src={section.image}
                alt="Finance"
                className="md:w-1/2 rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FinanceSection;
