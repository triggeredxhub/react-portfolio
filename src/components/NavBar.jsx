const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[1000] h-[100px] bg-white shadow-md flex items-center justify-start px-[2%] mb-12">
      {/* Brand */}
      <div className="text-[1.8rem] font-bold flex items-center mr-10">
        Nathan
      </div>

      {/* Nav */}
      <nav className="flex-1">
        <ul className="flex justify-end items-center mr-10 space-x-6 text-base text-gray-800">
          <li>
            <a
              href="#main"
              className="relative pb-1 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#cv-summary"
              className="relative pb-1 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="relative pb-1 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#additional-content"
              className="relative pb-1 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
