import logo1 from "../assets/client/logo1.webp";
import logo2 from "../assets/client/logo2.webp";
import logo3 from "../assets/client/logo3.webp";
import logo4 from "../assets/client/logo4.webp";
import logo5 from "../assets/client/logo5.webp";
import logo6 from "../assets/client/logo6.webp";
import logo7 from "../assets/client/logo7.webp";
import logo8 from "../assets/client/logo8.webp";
import logo9 from "../assets/client/logo9.webp";
import logo10 from "../assets/client/logo10.webp";
import logo11 from "../assets/client/logo11.webp";
import logo12 from "../assets/client/logo12.webp";
import logo13 from "../assets/client/logo13.webp";
import logo14 from "../assets/client/logo14.webp";
import logo15 from "../assets/client/logo15.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Client = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
  };

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
  ];

  return (
    <div className="container mx-auto py-10 ">
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-10 items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={logo}
              alt={`Sponsor ${index + 1}`}
              className="h-16 w-40 object-contain"
            />
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt={`Sponsor ${index + 1}`}
                className="h-16 w-full object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;
