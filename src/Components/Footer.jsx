

const Footer = () => {
    return (
        <div>
<footer className=" text-white ">
      <div className="container bg-[#002045] mx-auto flex justify-between p-10">
        <div className="mb-2">
          <h2 className="text-xl font-bold">ANTECH</h2>
        </div>
        <div className="mb-2  flex gap-1 items-center text-sky-300 font-semibold text-xl">
          <p className="">Our Solutions</p>
          <div className="h-4 border-l border-gray-400 mx-2"></div>
          <ul className="flex justify-center space-x-4">
            <li>AnyCaaS</li>
            <li>AnyBaaS</li>
            <li>AnyPaaS</li>
          </ul>
        </div>
       
      </div>
      <div className=" text-blue-500 text-xs font-bold bg-[#00152d] p-6 flex justify-between">
          <p>©2022 All rights reserved. Any Technology Plc Ltd.</p>
          <p>Privacy Policy</p>
        </div>
    </footer>

            
        </div>
    );
};

export default Footer;