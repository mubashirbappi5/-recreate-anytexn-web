const Footer = () => {
  return (
    <div>
      <footer className="text-white">
        {/* Main Footer Section */}
        <div className="container bg-[#002045] mx-auto p-6 sm:p-10 flex flex-col sm:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-4 sm:mb-0">
            <h2 className="text-xl font-bold">ANTECH</h2>
          </div>
          {/* Our Solutions Section */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-1 items-center text-sky-300 font-semibold text-lg sm:text-xl">
            <p>Our Solutions</p>
            <div className="h-4 border-l border-gray-400 mx-2"></div>
            <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-4">
              <li>AnyCaaS</li>
              <li>AnyBaaS</li>
              <li>AnyPaaS</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-blue-500 text-xs sm:text-sm font-bold bg-[#00152d] p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center">
          <p>©2022 All rights reserved. Any Technology Plc Ltd.</p>
          <p className="cursor-pointer">Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
