import { MdAccountTree } from "react-icons/md";
import bg from "../assets/icons/easy-banking/Bridge.svg";
import line1 from '../assets/icons/easy-banking/Line1.svg'
import line2 from '../assets/icons/easy-banking/Line2.svg'
import line3 from '../assets/icons/easy-banking/Line3.svg'
import line4 from '../assets/icons/easy-banking/Line4.svg'
import { FaLightbulb,  } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
const PHILOSOPHY = () => {
  return (
    <div>
      <div className="my-10">
        <h4 className="text-xl font-semibold text-blue-400 text-center">
          OUR PHILOSOPHY
        </h4>
        <h1 className="text-5xl font-bold text-center">
          Human-centred innovation
        </h1>
      </div>
      <section className="relative ">
        <div className=" w-11/12 mx-auto rounded-2xl  grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className=" bg-gradient-to-br from-[#e6f4ff] to-white py-16 px-20  col-span-5 rounded-2xl">
            <div className=" shadow-xl bg-white  shadow- text-center p-10 rounded-2xl mt-20  ">
              <h4>Core Tech</h4>
              <h1>Artifical Intelligence</h1>
            </div>
          </div>
          <div className="col-span-7 rounded-2xl  bg-gradient-to-bl from-[#e6f4ff] to-white py-16  px-20">
          <div className="flex gap-10 items-center ">
          <div>
           <div className=" shadow-xl bg-white  text-center p-6 rounded-2xl z-20 relative ">
              <h4>Core Tech</h4>
              <h1>Artifical Intelligence</h1>
            </div>
           </div>
            <div className="flex flex-col gap-20">
            <div className=" shadow-xl bg-white  shadow- text-center p-6 rounded-2xl   ">
              <h4>Core Tech</h4>
              <h1>Artifical Intelligence</h1>
            </div>
            <div className=" shadow-xl bg-white  shadow- text-center p-6 rounded-2xl   ">
              <h4>Core Tech</h4>
              <h1>Artifical Intelligence</h1>
            </div>
            </div>
          </div>
          </div>
        </div>

        <img
          className=" rotate-90 hidden md:absolute top-40 left-[396px] -z-20"
          src={bg}
          alt=""
        />
        <img className="rotate-90 hidden md:absolute top-40 left-[525px] " src={line1} alt="" />
        <img className="-rotate-90 w-30 hidden md:absolute top-44 left-[725px]   " src={line2} alt="" />
        <img className="-rotate-90 w-30 hidden md:absolute top-24 left-[725px]   " src={line3} alt="" />
        <img className="-rotate-90 w-16 hidden md:absolute top-48 right-[265px]   " src={line4} alt="" />

        <div className="bg-white dark:bg-gray-900 w-11/12 mx-auto">
          <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div>
              <MdAccountTree className="text-4xl" />
                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  Default Tailwindcss Config
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dignissim fusce tortor, ac sed malesuada blandit. Et mi
                  gravida sem feugiat.
                </p>
              </div>

              <div>
              <FaLightbulb className="text-4xl" />

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  Fully Responsive Components
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dignissim fusce tortor, ac sed malesuada blandit. Et mi
                  gravida sem feugiat.
                </p>
              </div>

              <div>
              
              <FaMicrochip className="text-4xl" />
                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  RTL Languages Support
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dignissim fusce tortor, ac sed malesuada blandit. Et mi
                  gravida sem feugiat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PHILOSOPHY;
